import { useState, useEffect } from 'react';
import Header from './components/Header';
import UploadZone from './components/UploadZone';
import Preview from './components/Preview';
import StylePanel from './components/StylePanel';
import { DEFAULT_STYLE } from './constants/presets';
import type { GradientPreset } from './constants/presets';
import { beautifyImage } from './utils/imageProcessor';
import { downloadImage } from './utils/download';

function App() {
  const [uploadedImage, setUploadedImage] = useState<HTMLImageElement | null>(null);
  const [imageUrl, setImageUrl] = useState<string>('');
  const [selectedPreset, setSelectedPreset] = useState<GradientPreset>(
    DEFAULT_STYLE.selectedPreset
  );
  const [borderRadius, setBorderRadius] = useState(DEFAULT_STYLE.borderRadius);
  const [shadow, setShadow] = useState(DEFAULT_STYLE.shadow);
  const [padding, setPadding] = useState(DEFAULT_STYLE.padding);

  const handleImageUpload = (file: File) => {
    const reader = new FileReader();
    reader.onload = (e) => {
      const img = new Image();
      img.onload = () => {
        setUploadedImage(img);
        setImageUrl(e.target?.result as string);
      };
      img.src = e.target?.result as string;
    };
    reader.readAsDataURL(file);
  };

  const handlePaste = (e: ClipboardEvent) => {
    const items = e.clipboardData?.items;
    if (!items) return;

    for (let i = 0; i < items.length; i++) {
      if (items[i].type.startsWith('image/')) {
        const file = items[i].getAsFile();
        if (file) {
          handleImageUpload(file);
        }
      }
    }
  };

  useEffect(() => {
    document.addEventListener('paste', handlePaste);
    return () => {
      document.removeEventListener('paste', handlePaste);
    };
  }, []);

  const handleExport = async () => {
    if (!uploadedImage) return;

    try {
      const dataUrl = await beautifyImage(uploadedImage, {
        background: selectedPreset,
        borderRadius,
        shadow,
        padding,
      });
      downloadImage(dataUrl);
    } catch (error) {
      console.error('导出失败:', error);
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 container mx-auto p-6">
        <div className="flex gap-6 h-[calc(100vh-120px)]">
          <div className="flex-1 min-w-0">
            {uploadedImage ? (
              <Preview
                imageUrl={imageUrl}
                style={{
                  background: selectedPreset.gradient,
                  borderRadius,
                  shadow,
                  padding,
                }}
              />
            ) : (
              <UploadZone onImageUpload={handleImageUpload} />
            )}
          </div>
          <StylePanel
            selectedPreset={selectedPreset}
            borderRadius={borderRadius}
            shadow={shadow}
            padding={padding}
            onPresetChange={setSelectedPreset}
            onBorderRadiusChange={setBorderRadius}
            onShadowChange={setShadow}
            onPaddingChange={setPadding}
            onExport={handleExport}
            disabled={!uploadedImage}
          />
        </div>
      </main>
    </div>
  );
}

export default App;
