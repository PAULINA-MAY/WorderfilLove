type Rgb = [number, number, number];

/** Contraste mínimo para texto normal (WCAG AA). */
export const CONTRASTE_TEXTO = 4.5;

const aRgb = (hex: string): Rgb => [1, 3, 5].map((i) => parseInt(hex.slice(i, i + 2), 16)) as Rgb;
const aHex = (c: Rgb) => '#' + c.map((v) => Math.round(v).toString(16).padStart(2, '0')).join('');

/** Igual que `color-mix(in srgb, a p, b)`: p es la proporción de `a`, de 0 a 1. */
const mezclar = (a: Rgb, b: Rgb, p: number): Rgb => a.map((v, i) => v * p + b[i] * (1 - p)) as Rgb;

const aLineal = (v: number) => {
  const s = v / 255;
  return s <= 0.04045 ? s / 12.92 : ((s + 0.055) / 1.055) ** 2.4;
};
const deLineal = (v: number) => 255 * (v <= 0.0031308 ? v * 12.92 : 1.055 * v ** (1 / 2.4) - 0.055);

const luminancia = (c: Rgb) => {
  const [r, g, b] = c.map(aLineal);
  return 0.2126 * r + 0.7152 * g + 0.0722 * b;
};

export function contraste(a: string, b: string): number {
  const [claro, oscuro] = [luminancia(aRgb(a)), luminancia(aRgb(b))].sort((x, y) => y - x);
  return (claro + 0.05) / (oscuro + 0.05);
}

// OKLCH: separa claridad (l), intensidad (c) y tono (h), así se puede
// oscurecer un color sin que se vuelva gris ni cambie de tono.
type Oklch = { l: number; c: number; h: number };

function aOklch(rgb: Rgb): Oklch {
  const [r, g, b] = rgb.map(aLineal);
  const l = Math.cbrt(0.4122214708 * r + 0.5363325363 * g + 0.0514459929 * b);
  const m = Math.cbrt(0.2119034982 * r + 0.6806995451 * g + 0.1073969566 * b);
  const s = Math.cbrt(0.0883024619 * r + 0.2817188376 * g + 0.6299787005 * b);
  const L = 0.2104542553 * l + 0.793617785 * m - 0.0040720468 * s;
  const A = 1.9779984951 * l - 2.428592205 * m + 0.4505937099 * s;
  const B = 0.0259040371 * l + 0.7827717662 * m - 0.808675766 * s;
  return { l: L, c: Math.hypot(A, B), h: Math.atan2(B, A) };
}

/** Devuelve null si el color cae fuera de lo que una pantalla sRGB puede mostrar. */
function deOklch({ l: L, c, h }: Oklch): Rgb | null {
  const A = c * Math.cos(h);
  const B = c * Math.sin(h);
  const l = (L + 0.3963377774 * A + 0.2158037573 * B) ** 3;
  const m = (L - 0.1055613458 * A - 0.0638541728 * B) ** 3;
  const s = (L - 0.0894841775 * A - 1.291485548 * B) ** 3;
  const lineal = [
    4.0767416621 * l - 3.3077115913 * m + 0.2309699292 * s,
    -1.2684380046 * l + 2.6097574011 * m - 0.3413193965 * s,
    -0.0041960863 * l - 0.7034186147 * m + 1.707614701 * s,
  ];
  if (lineal.some((v) => v < -1e-4 || v > 1 + 1e-4)) return null;
  return lineal.map((v) => deLineal(Math.min(1, Math.max(0, v)))) as Rgb;
}

/** El color más intenso posible con esa claridad y tono, sin pasar la intensidad original. */
function masIntenso(l: number, c: number, h: number): Rgb {
  let [bajo, alto] = [0, c];
  for (let i = 0; i < 20; i++) {
    const medio = (bajo + alto) / 2;
    if (deOklch({ l, c: medio, h })) bajo = medio;
    else alto = medio;
  }
  return deOklch({ l, c: bajo, h })!;
}

/**
 * Versión del acento para usar en texto: conserva su tono e intensidad y solo
 * lo oscurece lo necesario para que se lea sobre `--bg` y sobre `--soft`
 * (que en global.css es 6% de tinta sobre el fondo).
 */
export function acentoTexto(colores: { bg: string; ink: string; accent: string }): string {
  const soft = aHex(mezclar(aRgb(colores.ink), aRgb(colores.bg), 0.06));
  const { l, c, h } = aOklch(aRgb(colores.accent));

  for (let claridad = l; claridad > 0; claridad -= 0.005) {
    const candidato = aHex(masIntenso(claridad, c, h));
    if (contraste(candidato, colores.bg) >= CONTRASTE_TEXTO && contraste(candidato, soft) >= CONTRASTE_TEXTO) {
      return candidato;
    }
  }
  return colores.ink;
}
