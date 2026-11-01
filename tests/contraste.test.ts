import { describe, expect, it } from 'vitest';
import { acentoTexto, contraste, CONTRASTE_TEXTO, paleta } from '../src/data/contraste';
import { temporadas } from '../src/data/temporadas';

describe('contraste', () => {
  it('blanco sobre negro es 21:1', () => {
    expect(contraste('#FFFFFF', '#000000')).toBeCloseTo(21);
  });
});

describe('paleta', () => {
  it.each(temporadas.map((t) => [t.clave, paleta(t.colores)] as const))('%s se lee en fondo y bloques', (_, p) => {
    for (const fondo of [p.bg, p.soft, ...(p.tope ? [p.tope] : [])]) {
      expect(contraste(p.ink, fondo)).toBeGreaterThanOrEqual(CONTRASTE_TEXTO);
      expect(contraste(p.accentTexto, fondo)).toBeGreaterThanOrEqual(CONTRASTE_TEXTO);
    }
  });
});

describe('tema', () => {
  it.each(temporadas.filter((t) => t.tema).map((t) => [t.clave, t.tema!] as const))(
    '%s: el texto de los botones se lee al pasar el mouse',
    (_, tema) => {
      expect(contraste(tema.hoverTexto, tema.hover)).toBeGreaterThanOrEqual(CONTRASTE_TEXTO);
    },
  );
});

describe('acentoTexto', () => {
  it('deja el acento igual si ya se lee', () => {
    expect(acentoTexto('#1F3B2C', '#000000', ['#FFFFFF'])).toBe('#1f3b2c');
  });
});
