export type ClaveTemporada =
  | 'halloween'
  | 'muertos'
  | 'navidad'
  | 'amor'
  | 'primavera'
  | 'mamas'
  | 'papas'
  | 'mexicano'
  | 'general';

/** [mes 1-12, día]. Los rangos son inclusivos y pueden cruzar el año (ej. 15 nov → 31 ene). */
export type MesDia = [number, number];
export interface Rango {
  desde: MesDia;
  hasta: MesDia;
}

export interface Temporada {
  clave: ClaveTemporada;
  nombre: string;
  /** Texto corto para la etiqueta del hero y del bloque de Productos. */
  etiqueta: string;
  /** Frase del hero; la segunda línea va en cursiva y color de acento. */
  frase: [string, string];
  descripcion: string;
  /** Título del bloque de temporada actual en Productos. */
  tituloBloque: [string, string];
  rangos: Rango[];
  /** Ids de `productos.ts`, en el orden en que se muestran. */
  destacados: string[];
  colores: { bg: string; ink: string; accent: string };
}

export const temporadas: Temporada[] = [
  {
    clave: 'halloween',
    nombre: 'Halloween',
    etiqueta: 'Temporada · Halloween',
    frase: ['Velas para', 'noches de brujas'],
    descripcion:
      'Calabaza, canela y humo de leña. Velas aromáticas y figurillas de yeso hechas a mano, en piezas contadas para esta temporada.',
    tituloBloque: ['Para', 'noches de brujas'],
    rangos: [{ desde: [10, 1], hasta: [10, 20] }],
    destacados: ['vela-fantasmita', 'fantasmita-brujo', 'vela-calabaza-flores'],
    colores: { bg: '#F3A6DF', ink: '#2A2130', accent: '#F5B56F' },
  },
  {
    clave: 'muertos',
    nombre: 'Día de Muertos / Hanal Pixán',
    etiqueta: 'Temporada · Día de Muertos',
    frase: ['Luz para', 'los que vuelven'],
    descripcion:
      'Velas de cempasúchil y copal, y figurillas para tu altar de Hanal Pixán, hechas a mano en Mérida.',
    tituloBloque: ['Para', 'tu altar'],
    rangos: [{ desde: [10, 21], hasta: [11, 10] }],
    destacados: ['vela-cruz-calabaza', 'vela-flor-morada', 'velas-calabaza-charola'],
    colores: { bg: '#F3A6DF', ink: '#4A1F3A', accent: '#F8E69A' },
  },
  {
    clave: 'navidad',
    nombre: 'Navidad / Invierno',
    etiqueta: 'Temporada · Navidad',
    frase: ['El calor de', 'casa en invierno'],
    descripcion:
      'Pino, vainilla y canela para regalar o para quedarte. Piezas hechas a mano para estas fiestas.',
    tituloBloque: ['Para', 'estas fiestas'],
    rangos: [{ desde: [11, 15], hasta: [1, 31] }],
    destacados: ['vela-pino-nevado', 'renito', 'vela-ponche'],
    colores: { bg: '#F3A6DF', ink: '#1F3B2C', accent: '#A8DDF2' },
  },
  {
    clave: 'amor',
    nombre: 'Amor y amistad',
    etiqueta: 'Temporada · Amor y amistad',
    frase: ['Detalles para', 'quien quieres'],
    descripcion: 'Velas y figurillas para regalar en febrero, con aromas suaves y hechas a mano.',
    tituloBloque: ['Para', 'quien quieres'],
    // 29 feb cubre también los años no bisiestos: el 28 queda dentro del rango.
    rangos: [{ desde: [2, 1], hasta: [2, 29] }],
    destacados: ['vela-rosa-vainilla', 'parejita', 'velas-corazon-canela'],
    colores: { bg: '#F3A6DF', ink: '#5A2232', accent: '#F49091' },
  },
  {
    clave: 'primavera',
    nombre: 'Primavera',
    etiqueta: 'Temporada · Primavera',
    frase: ['Todo vuelve', 'a florecer'],
    descripcion: 'Aromas frescos de azahar, menta y lavanda para recibir la primavera.',
    tituloBloque: ['Para', 'recibir la primavera'],
    rangos: [{ desde: [3, 1], hasta: [3, 31] }],
    destacados: ['vela-azahar', 'macetita', 'velas-lavanda-menta'],
    colores: { bg: '#F3A6DF', ink: '#2F4A2B', accent: '#F8E69A' },
  },
  {
    clave: 'mamas',
    nombre: 'Día de las Madres',
    etiqueta: 'Temporada · Día de las Madres',
    frase: ['Para la que', 'nos dio todo'],
    descripcion:
      'Regalos hechos a mano para el 10 de mayo: velas suaves y figurillas con mucho cariño.',
    tituloBloque: ['Para', 'mamá'],
    rangos: [{ desde: [4, 15], hasta: [5, 10] }],
    destacados: ['figura-mama-ave', 'vela-jazmin-miel', 'velas-rosa-mosqueta'],
    colores: { bg: '#F3A6DF', ink: '#5B3A3A', accent: '#F49091' },
  },
  {
    clave: 'papas',
    nombre: 'Día del Padre',
    etiqueta: 'Temporada · Día del Padre',
    frase: ['Para el que', 'siempre está'],
    descripcion: 'Aromas a café, madera y tabaco dulce para consentir a papá.',
    tituloBloque: ['Para', 'papá'],
    rangos: [{ desde: [6, 1], hasta: [6, 21] }],
    destacados: ['vela-cafe-de-olla', 'bigoton', 'velas-madera-cuero'],
    colores: { bg: '#F3A6DF', ink: '#22313F', accent: '#A8DDF2' },
  },
  {
    clave: 'mexicano',
    nombre: 'Fiestas Patrias',
    etiqueta: 'Temporada · Fiestas Patrias',
    frase: ['Hecho con', 'orgullo mexicano'],
    descripcion:
      'Velas y figurillas para celebrar septiembre: colores, aromas y tradición de aquí.',
    tituloBloque: ['Para', 'la noche del grito'],
    rangos: [{ desde: [9, 1], hasta: [9, 30] }],
    destacados: ['catrina-mini', 'vela-chocolate-chile', 'velas-tricolor'],
    colores: { bg: '#F3A6DF', ink: '#1E3D2F', accent: '#F5B56F' },
  },
  {
    clave: 'general',
    nombre: 'Wonderful Love',
    etiqueta: 'Wonderful Love · Todo el año',
    frase: ['Hecho a mano,', 'hecho con amor'],
    descripcion:
      'Velas aromáticas y figurillas de yeso hechas a mano en Mérida, Yucatán, en piezas contadas.',
    tituloBloque: ['Nuestros', 'favoritos'],
    // Cubre cualquier hueco del calendario; no necesita rangos propios.
    rangos: [],
    destacados: ['vela-canela-clavo', 'angelito', 'velas-vainilla'],
    colores: { bg: '#F3A6DF', ink: '#3B2F27', accent: '#F3A6DF' },
  },
];

export const temporadaGeneral = temporadas.find((t) => t.clave === 'general')!;

/**
 * Regla pura que también se serializa al script inline del <head>,
 * así que no puede usar nada fuera de sus argumentos.
 */
export function claveParaFecha(
  rangos: { clave: string; desde: number[]; hasta: number[] }[],
  mes: number,
  dia: number,
): string {
  const hoy = mes * 100 + dia;
  for (const r of rangos) {
    const desde = r.desde[0] * 100 + r.desde[1];
    const hasta = r.hasta[0] * 100 + r.hasta[1];
    const dentro = desde <= hasta ? hoy >= desde && hoy <= hasta : hoy >= desde || hoy <= hasta;
    if (dentro) return r.clave;
  }
  return 'general';
}

/** Rangos aplanados, listos para pasarlos al script inline. */
export const rangosPlanos = temporadas.flatMap((t) =>
  t.rangos.map((r) => ({ clave: t.clave, desde: r.desde, hasta: r.hasta })),
);

export function temporadaPara(fecha: Date): Temporada {
  const clave = claveParaFecha(rangosPlanos, fecha.getMonth() + 1, fecha.getDate());
  return temporadas.find((t) => t.clave === clave) ?? temporadaGeneral;
}
