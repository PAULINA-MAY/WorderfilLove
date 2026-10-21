import { describe, expect, it } from 'vitest';
import { temporadaPara } from '../src/data/temporadas';

// Mes en formato humano (1-12) para que los casos se lean como el calendario.
const dia = (anio: number, mes: number, d: number) => new Date(anio, mes - 1, d);

describe('temporadaPara', () => {
  it.each([
    [dia(2026, 10, 1), 'halloween'],
    [dia(2026, 10, 20), 'halloween'],
    [dia(2026, 10, 21), 'muertos'],
    [dia(2026, 11, 10), 'muertos'],
    [dia(2026, 11, 11), 'general'],
    [dia(2026, 11, 14), 'general'],
    [dia(2026, 11, 15), 'navidad'],
    [dia(2026, 12, 31), 'navidad'],
    [dia(2027, 1, 1), 'navidad'],
    [dia(2027, 1, 31), 'navidad'],
    [dia(2027, 2, 1), 'amor'],
    [dia(2027, 2, 28), 'amor'],
    [dia(2028, 2, 29), 'amor'],
    [dia(2027, 3, 1), 'primavera'],
    [dia(2027, 3, 31), 'primavera'],
    [dia(2027, 4, 1), 'general'],
    [dia(2027, 4, 14), 'general'],
    [dia(2027, 4, 15), 'mamas'],
    [dia(2027, 5, 10), 'mamas'],
    [dia(2027, 5, 11), 'general'],
    [dia(2027, 6, 1), 'papas'],
    [dia(2027, 6, 21), 'papas'],
    [dia(2027, 6, 22), 'general'],
    [dia(2027, 8, 31), 'general'],
    [dia(2027, 9, 1), 'mexicano'],
    [dia(2027, 9, 30), 'mexicano'],
  ])('%s → %s', (fecha, esperada) => {
    expect(temporadaPara(fecha).clave).toBe(esperada);
  });
});
