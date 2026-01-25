import type { GradientPreset } from '../constants/presets';

export interface BeautifyOptions {
  background: GradientPreset;
  borderRadius: number;
  shadow: number;
  padding: number;
}

export async function beautifyImage(
  image: HTMLImageElement,
  options: BeautifyOptions
): Promise<string> {
  const { background, borderRadius, shadow, padding } = options;

  const canvas = document.createElement('canvas');
  const ctx = canvas.getContext('2d');
  if (!ctx) throw new Error('无法创建Canvas上下文');

  canvas.width = image.width + padding * 2;
  canvas.height = image.height + padding * 2;

  const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
  gradient.addColorStop(0, background.startColor);
  gradient.addColorStop(1, background.endColor);
  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  ctx.shadowColor = 'rgba(0, 0, 0, 0.3)';
  ctx.shadowBlur = shadow;
  ctx.shadowOffsetY = shadow / 2;

  ctx.save();
  ctx.beginPath();
  roundRect(ctx, padding, padding, image.width, image.height, borderRadius);
  ctx.clip();
  ctx.drawImage(image, padding, padding, image.width, image.height);
  ctx.restore();

  return canvas.toDataURL('image/png');
}

function roundRect(
  ctx: CanvasRenderingContext2D,
  x: number,
  y: number,
  width: number,
  height: number,
  radius: number
) {
  ctx.beginPath();
  ctx.moveTo(x + radius, y);
  ctx.lineTo(x + width - radius, y);
  ctx.quadraticCurveTo(x + width, y, x + width, y + radius);
  ctx.lineTo(x + width, y + height - radius);
  ctx.quadraticCurveTo(x + width, y + height, x + width - radius, y + height);
  ctx.lineTo(x + radius, y + height);
  ctx.quadraticCurveTo(x, y + height, x, y + height - radius);
  ctx.lineTo(x, y + radius);
  ctx.quadraticCurveTo(x, y, x + radius, y);
  ctx.closePath();
}
