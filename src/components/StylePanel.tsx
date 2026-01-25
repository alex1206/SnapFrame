import { GRADIENT_PRESETS } from '../constants/presets';
import type { GradientPreset } from '../constants/presets';

interface StylePanelProps {
  selectedPreset: GradientPreset;
  borderRadius: number;
  shadow: number;
  padding: number;
  onPresetChange: (preset: GradientPreset) => void;
  onBorderRadiusChange: (value: number) => void;
  onShadowChange: (value: number) => void;
  onPaddingChange: (value: number) => void;
  onExport: () => void;
  disabled?: boolean;
}

export default function StylePanel({
  selectedPreset,
  borderRadius,
  shadow,
  padding,
  onPresetChange,
  onBorderRadiusChange,
  onShadowChange,
  onPaddingChange,
  onExport,
  disabled = false,
}: StylePanelProps) {
  return (
    <div className="w-80 h-full bg-[var(--bg-card)] backdrop-blur-xl border border-[var(--border-color)] rounded-2xl p-6 flex flex-col shadow-2xl">
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-lg font-bold tracking-tight flex items-center gap-2">
          <span className="w-1 h-5 bg-indigo-500 rounded-full"/>
          样式设置
        </h2>
      </div>

      <div className="flex-1 space-y-8 overflow-y-auto pr-2 custom-scrollbar">
        {/* Background Presets */}
        <div>
          <label className="block text-xs font-semibold text-[var(--text-secondary)] uppercase tracking-wider mb-4">
            背景风格
          </label>
          <div className="grid grid-cols-4 gap-3">
            {GRADIENT_PRESETS.map((preset) => (
              <button
                key={preset.id}
                onClick={() => onPresetChange(preset)}
                disabled={disabled}
                className={`group relative w-full aspect-square rounded-xl transition-all duration-300 overflow-hidden ${
                  selectedPreset.id === preset.id
                    ? 'ring-2 ring-indigo-500 scale-100 shadow-lg shadow-indigo-500/20'
                    : 'hover:scale-105 hover:ring-2 hover:ring-[var(--border-color)]'
                } ${disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}`}
                title={preset.name}
              >
                <div 
                  className="absolute inset-0"
                  style={{ background: preset.gradient }} 
                />
                {/* Selection Indicator */}
                {selectedPreset.id === preset.id && (
                  <div className="absolute inset-0 flex items-center justify-center bg-black/10">
                    <div className="w-2 h-2 bg-white rounded-full shadow-sm" />
                  </div>
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Sliders */}
        <div className="space-y-6">
          <div className="group">
            <label className="flex items-center justify-between text-sm text-[var(--text-secondary)] mb-3 group-hover:text-white transition-colors">
              <span>圆角程度</span>
              <span className="font-mono text-xs bg-[var(--glass-highlight)] px-2 py-0.5 rounded text-[var(--text-primary)]">
                {borderRadius}px
              </span>
            </label>
            <input
              type="range"
              min="0"
              max="32"
              value={borderRadius}
              onChange={(e) => onBorderRadiusChange(Number(e.target.value))}
              disabled={disabled}
              className="w-full h-1.5 bg-[var(--glass-bg)] rounded-lg appearance-none cursor-pointer slider"
            />
          </div>

          <div className="group">
            <label className="flex items-center justify-between text-sm text-[var(--text-secondary)] mb-3 group-hover:text-white transition-colors">
              <span>阴影强度</span>
              <span className="font-mono text-xs bg-[var(--glass-highlight)] px-2 py-0.5 rounded text-[var(--text-primary)]">
                {shadow}px
              </span>
            </label>
            <input
              type="range"
              min="0"
              max="80"
              value={shadow}
              onChange={(e) => onShadowChange(Number(e.target.value))}
              disabled={disabled}
              className="w-full h-1.5 bg-[var(--glass-bg)] rounded-lg appearance-none cursor-pointer slider"
            />
          </div>

          <div className="group">
            <label className="flex items-center justify-between text-sm text-[var(--text-secondary)] mb-3 group-hover:text-white transition-colors">
              <span>画布边距</span>
              <span className="font-mono text-xs bg-[var(--glass-highlight)] px-2 py-0.5 rounded text-[var(--text-primary)]">
                {padding}px
              </span>
            </label>
            <input
              type="range"
              min="32"
              max="128"
              value={padding}
              onChange={(e) => onPaddingChange(Number(e.target.value))}
              disabled={disabled}
              className="w-full h-1.5 bg-[var(--glass-bg)] rounded-lg appearance-none cursor-pointer slider"
            />
          </div>
        </div>
      </div>

      <button
        onClick={onExport}
        disabled={disabled}
        className="group relative w-full mt-6 py-4 px-6 rounded-xl font-bold text-white transition-all disabled:opacity-50 disabled:cursor-not-allowed overflow-hidden"
      >
        <div className={`absolute inset-0 transition-all duration-300 ${
          disabled 
            ? 'bg-[var(--glass-bg)]' 
            : 'bg-gradient-to-r from-indigo-600 to-purple-600 group-hover:scale-105'
        }`} />
        
        {/* Shine Effect */}
        {!disabled && (
          <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12" />
        )}
        
        <div className="relative flex items-center justify-center gap-2">
          <span>下载图片</span>
          <svg className={`w-5 h-5 transition-transform ${!disabled && 'group-hover:translate-y-0.5'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
          </svg>
        </div>
      </button>
    </div>
  );
}
