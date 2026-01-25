export type GradientPreset = {
  id: string;
  name: string;
  gradient: string;
  startColor: string;
  endColor: string;
};

export const GRADIENT_PRESETS: GradientPreset[] = [
  {
    id: 'preset-1',
    name: '紫罗兰',
    gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    startColor: '#667eea',
    endColor: '#764ba2',
  },
  {
    id: 'preset-2',
    name: '粉红',
    gradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
    startColor: '#f093fb',
    endColor: '#f5576c',
  },
  {
    id: 'preset-3',
    name: '天蓝',
    gradient: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
    startColor: '#4facfe',
    endColor: '#00f2fe',
  },
  {
    id: 'preset-4',
    name: '薄荷',
    gradient: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)',
    startColor: '#43e97b',
    endColor: '#38f9d7',
  },
  {
    id: 'preset-5',
    name: '日落',
    gradient: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)',
    startColor: '#fa709a',
    endColor: '#fee140',
  },
  {
    id: 'preset-6',
    name: '柔和',
    gradient: 'linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)',
    startColor: '#a8edea',
    endColor: '#fed6e3',
  },
  {
    id: 'preset-7',
    name: '奶茶',
    gradient: 'linear-gradient(135deg, #d299c2 0%, #fef9d7 100%)',
    startColor: '#d299c2',
    endColor: '#fef9d7',
  },
  {
    id: 'preset-8',
    name: '深邃',
    gradient: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)',
    startColor: '#1a1a2e',
    endColor: '#16213e',
  },
];

export const DEFAULT_STYLE = {
  borderRadius: 16,
  shadow: 40,
  padding: 64,
  selectedPreset: GRADIENT_PRESETS[0],
};
