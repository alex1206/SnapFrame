interface PreviewProps {
  imageUrl: string;
  style: {
    background: string;
    borderRadius: number;
    shadow: number;
    padding: number;
  };
}

export default function Preview({ imageUrl, style }: PreviewProps) {
  return (
    <div className="w-full h-full flex items-center justify-center rounded-2xl overflow-hidden bg-[var(--bg-card)] border border-[var(--border-color)] relative group">
      {/* Checkered background for transparency */}
      <div 
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `
            linear-gradient(45deg, #808080 25%, transparent 25%), 
            linear-gradient(-45deg, #808080 25%, transparent 25%), 
            linear-gradient(45deg, transparent 75%, #808080 75%), 
            linear-gradient(-45deg, transparent 75%, #808080 75%)
          `,
          backgroundSize: '20px 20px',
          backgroundPosition: '0 0, 0 10px, 10px -10px, -10px 0px'
        }}
      />

      <div
        className="relative transition-all duration-300 ease-out shadow-2xl"
        style={{ 
          background: style.background,
          boxShadow: '0 20px 50px rgba(0,0,0,0.3)'
        }}
      >
        <div
          className="transition-all duration-300 ease-out"
          style={{
            padding: `${style.padding}px`,
          }}
        >
          <img
            src={imageUrl}
            alt="Preview"
            className="max-w-full max-h-[calc(100vh-240px)] object-contain transition-all duration-300 ease-out"
            style={{
              borderRadius: `${style.borderRadius}px`,
              boxShadow: `0 ${style.shadow / 2}px ${style.shadow}px rgba(0, 0, 0, 0.4)`,
            }}
          />
        </div>
      </div>
    </div>
  );
}
