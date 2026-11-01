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
  /** `tope`: color de arriba del degradado de fondo; si falta, se usa el de global.css. */
  colores: { bg: string; ink: string; accent: string; tope?: string };
  /** Bordes, bolitas del fondo, íconos y hovers; si falta, se usan los de global.css (rosa). */
  tema?: Tema;
  /** Lo que cae (o sube) sobre la página en esta temporada. Ver components/Particulas.astro. */
  particulas?: GrupoParticulas[];
}

export interface Tema {
  borde: string;
  /** Color de las bolitas del fondo, ya con su transparencia. */
  puntos: string;
  icono: string;
  /** Fondo de los botones oscuros al pasar el mouse, y el texto que va encima. */
  hover: string;
  hoverTexto: string;
  /** Borde de botones claros y tarjetas al pasar el mouse. */
  hoverBorde: string;
}

export type FormaParticula = 'petalo' | 'cempasuchil' | 'copo' | 'baston' | 'corazon' | 'flor' | 'estrella' | 'confeti' | 'burbuja';
export interface GrupoParticulas {
  forma: FormaParticula;
  colores: string[];
  cantidad: number;
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
    // Calabaza y morado de bruja; caen hojas de otoño.
    colores: { bg: '#F5B56F', ink: '#2A2130', accent: '#8E5BB5', tope: '#E2D4F0' },
    tema: { borde: '#8E5BB5', puntos: 'rgb(142 91 181 / 0.2)', icono: '#D9661F', hover: '#F5B56F', hoverTexto: '#2A2130', hoverBorde: '#6E3F96' },
    particulas: [{ forma: 'petalo', colores: ['#E8761A', '#8E5BB5', '#F29A1F'], cantidad: 18 }],
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
    // Cempasúchil de base, morado de altar para el texto y rosa mexicano de acento.
    colores: { bg: '#F7C873', ink: '#3B1F4A', accent: '#E4007C', tope: '#BC9680' },
    tema: { borde: '#C9781E', puntos: 'rgb(201 120 30 / 0.22)', icono: '#E8761A', hover: '#F29A1F', hoverTexto: '#3B1F4A', hoverBorde: '#E8761A' },
    particulas: [
      { forma: 'petalo', colores: ['#F29A1F', '#F7B32B', '#E8761A'], cantidad: 24 },
      { forma: 'cempasuchil', colores: [], cantidad: 5 },
    ],
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
    // Cielo de invierno, verde pino y rojo navideño; cae nieve con bastones de caramelo.
    colores: { bg: '#A8DDF2', ink: '#1F3B2C', accent: '#C0392B', tope: '#E4F3FA' },
    tema: { borde: '#2F6B4F', puntos: 'rgb(47 107 79 / 0.18)', icono: '#C0392B', hover: '#B03428', hoverTexto: '#FFFFFF', hoverBorde: '#2F6B4F' },
    particulas: [
      { forma: 'copo', colores: ['#FFFFFF'], cantidad: 30 },
      { forma: 'baston', colores: ['#C0392B'], cantidad: 8 },
    ],
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
    // Rosa y coral; caen corazones.
    colores: { bg: '#F3A6DF', ink: '#5A2232', accent: '#D9546B', tope: '#FBD3DC' },
    tema: { borde: '#D9546B', puntos: 'rgb(217 84 107 / 0.2)', icono: '#D9546B', hover: '#F49091', hoverTexto: '#5A2232', hoverBorde: '#B8394F' },
    particulas: [{ forma: 'corazon', colores: ['#D9546B', '#F49091', '#F3A6DF'], cantidad: 18 }],
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
    // Verde brote con flores rosas y amarillas; caen florecitas.
    colores: { bg: '#C9E4B4', ink: '#2F4A2B', accent: '#D96FB8', tope: '#FBF0C2' },
    tema: { borde: '#6E9B4F', puntos: 'rgb(110 155 79 / 0.2)', icono: '#D96FB8', hover: '#C9E4B4', hoverTexto: '#2F4A2B', hoverBorde: '#6E9B4F' },
    particulas: [{ forma: 'flor', colores: ['#F3A6DF', '#F8E69A', '#FFFFFF'], cantidad: 16 }],
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
    // Rosa suave y malva; caen flores.
    colores: { bg: '#F6C6DC', ink: '#5B3A3A', accent: '#B5658A', tope: '#FCE8F0' },
    tema: { borde: '#C98BA8', puntos: 'rgb(201 139 168 / 0.22)', icono: '#B5658A', hover: '#F6C6DC', hoverTexto: '#5B3A3A', hoverBorde: '#B5658A' },
    particulas: [{ forma: 'flor', colores: ['#F3A6DF', '#FFFFFF', '#F49091'], cantidad: 16 }],
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
    // Azul acero, madera y café; caen estrellitas.
    colores: { bg: '#A8DDF2', ink: '#22313F', accent: '#B07A3B', tope: '#E3D5C3' },
    tema: { borde: '#5B7A99', puntos: 'rgb(91 122 153 / 0.18)', icono: '#B07A3B', hover: '#22313F', hoverTexto: '#FFFFFF', hoverBorde: '#22313F' },
    particulas: [{ forma: 'estrella', colores: ['#F5B56F', '#5B7A99', '#B07A3B'], cantidad: 14 }],
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
    // Verde, blanco y rojo de la bandera; cae confeti.
    colores: { bg: '#CFE8D4', ink: '#1E3D2F', accent: '#C0392B', tope: '#F6D9D5' },
    tema: { borde: '#2E7D4F', puntos: 'rgb(46 125 79 / 0.18)', icono: '#C0392B', hover: '#2E7D4F', hoverTexto: '#FFFFFF', hoverBorde: '#C0392B' },
    particulas: [{ forma: 'confeti', colores: ['#2E7D4F', '#FFFFFF', '#C0392B'], cantidad: 26 }],
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
    // El rosado de la marca (los mismos valores que :root en global.css); suben burbujas.
    colores: { bg: '#F3A6DF', ink: '#3B2F27', accent: '#F3A6DF' },
    tema: { borde: '#C27BA8', puntos: 'rgb(194 123 168 / 0.22)', icono: '#C27BA8', hover: '#F3A6DF', hoverTexto: '#3B2F27', hoverBorde: '#A65E8E' },
    particulas: [{ forma: 'burbuja', colores: ['#C27BA8'], cantidad: 12 }],
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
