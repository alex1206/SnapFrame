import { useRef, useState } from 'react';

interface UploadZoneProps {
  onImageUpload: (file: File) => void;
}

export default function UploadZone({ onImageUpload }: UploadZoneProps) {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [isDragOver, setIsDragOver] = useState(false);

  const handleClick = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file && file.type.startsWith('image/')) {
      onImageUpload(file);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(false);
    const file = e.dataTransfer.files[0];
    if (file && file.type.startsWith('image/')) {
      onImageUpload(file);
    }
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(true);
  };

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(false);
  };

  return (
    <div
      onClick={handleClick}
      onDrop={handleDrop}
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      className={`group relative w-full h-full flex flex-col items-center justify-center rounded-2xl cursor-pointer transition-all duration-300 overflow-hidden ${
        isDragOver
          ? 'bg-[var(--glass-highlight)] border-indigo-500 scale-[0.99]'
          : 'bg-[var(--bg-card)] border-[var(--border-color)] hover:border-indigo-400/50 hover:bg-[var(--glass-bg)]'
      } border-2 border-dashed`}
    >
      {/* Glow Effect */}
      <div className={`absolute inset-0 bg-gradient-to-br from-indigo-500/10 to-purple-500/10 transition-opacity duration-300 ${isDragOver ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}`} />

      <div className="relative z-10 flex flex-col items-center p-8 text-center">
        <div className={`w-20 h-20 mb-6 rounded-2xl bg-gradient-to-br from-[var(--bg-secondary)] to-[var(--bg-primary)] border border-[var(--border-color)] flex items-center justify-center shadow-2xl transition-transform duration-300 ${isDragOver ? 'scale-110 rotate-3' : 'group-hover:scale-110 group-hover:-rotate-3'}`}>
          <svg className="w-10 h-10 text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
          </svg>
        </div>
        
        <h3 className="text-xl font-bold text-white mb-2 tracking-tight">
          上传图片
        </h3>
        <p className="text-[var(--text-secondary)] mb-6 max-w-xs leading-relaxed">
          拖拽图片到这里，或点击浏览本地文件
        </p>
        
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[var(--glass-highlight)] border border-[var(--border-color)] text-xs text-[var(--text-muted)] font-mono">
          <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 animate-pulse" />
          支持 Ctrl+V 粘贴
        </div>
      </div>

      <input
        ref={fileInputRef}
        type="file"
        accept="image/*"
        onChange={handleFileChange}
        className="hidden"
      />
    </div>
  );
}
