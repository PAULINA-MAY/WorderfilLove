import { describe, expect, it } from 'vitest';
import { acentoTexto, contraste, CONTRASTE_TEXTO } from '../src/data/contraste';
import { temporadas } from '../src/data/temporadas';

describe('contraste', () => {
  it('blanco sobre negro es 21:1', () => {
    expect(contraste('#FFFFFF', '#000000')).toBeCloseTo(21);
  });
});

describe('acentoTexto', () => {
  it.each(temporadas.map((t) => [t.clave, t.colores] as const))('%s se lee sobre su fondo', (_, colores) => {
    expect(contraste(acentoTexto(colores), colores.bg)).toBeGreaterThanOrEqual(CONTRASTE_TEXTO);
  });

  it('deja el acento igual si ya se lee', () => {
    expect(acentoTexto({ bg: '#FFFFFF', ink: '#000000', accent: '#1F3B2C' })).toBe('#1f3b2c');
  });
});
