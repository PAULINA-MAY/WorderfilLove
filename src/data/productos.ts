import type { ClaveTemporada } from './temporadas';

export type TipoProducto = 'vela' | 'figurilla';
/** Ilustración de línea que hace de placeholder mientras no hay fotos reales. */
export type Ilustracion = 'frasco' | 'pilar' | 'figurilla';

export interface Producto {
  id: string;
  nombre: string;
  frase: string;
  tipo: TipoProducto;
  temporada: ClaveTemporada;
  ilustracion: Ilustracion;
}

// Catálogo ficticio para el prototipo.
export const productos: Producto[] = [
  { id: 'vela-calabaza-especiada', nombre: 'Vela Calabaza Especiada', frase: 'Huele a tarde de octubre.', tipo: 'vela', temporada: 'halloween', ilustracion: 'frasco' },
  { id: 'gatito-bruja', nombre: 'Gatito Bruja de Yeso', frase: 'Un pequeño guardián para tu repisa.', tipo: 'figurilla', temporada: 'halloween', ilustracion: 'figurilla' },
  { id: 'velas-humo-de-lena', nombre: 'Velas Humo de Leña', frase: 'Para encender a medianoche.', tipo: 'vela', temporada: 'halloween', ilustracion: 'pilar' },

  { id: 'vela-cempasuchil', nombre: 'Vela Cempasúchil', frase: 'Ilumina el camino a casa.', tipo: 'vela', temporada: 'muertos', ilustracion: 'frasco' },
  { id: 'calaverita', nombre: 'Calaverita de Yeso', frase: 'Para recordar con alegría.', tipo: 'figurilla', temporada: 'muertos', ilustracion: 'figurilla' },
  { id: 'velas-copal', nombre: 'Velas de Copal', frase: 'Aroma de altar y de abuela.', tipo: 'vela', temporada: 'muertos', ilustracion: 'pilar' },

  { id: 'vela-pino-nevado', nombre: 'Vela Pino Nevado', frase: 'Huele a cabaña en diciembre.', tipo: 'vela', temporada: 'navidad', ilustracion: 'pilar' },
  { id: 'renito', nombre: 'Renito de Yeso', frase: 'Para colgar en el árbol.', tipo: 'figurilla', temporada: 'navidad', ilustracion: 'figurilla' },
  { id: 'vela-ponche', nombre: 'Vela Ponche de Frutas', frase: 'Como la olla de la abuela.', tipo: 'vela', temporada: 'navidad', ilustracion: 'frasco' },

  { id: 'vela-rosa-vainilla', nombre: 'Vela Rosa y Vainilla', frase: 'Un detalle que se queda encendido.', tipo: 'vela', temporada: 'amor', ilustracion: 'frasco' },
  { id: 'parejita', nombre: 'Parejita de Yeso', frase: 'Dos que se acompañan.', tipo: 'figurilla', temporada: 'amor', ilustracion: 'figurilla' },
  { id: 'velas-corazon-canela', nombre: 'Velas Corazón de Canela', frase: 'Para una cena en casa.', tipo: 'vela', temporada: 'amor', ilustracion: 'pilar' },

  { id: 'vela-azahar', nombre: 'Vela Azahar', frase: 'Como abrir la ventana en marzo.', tipo: 'vela', temporada: 'primavera', ilustracion: 'frasco' },
  { id: 'macetita', nombre: 'Macetita de Yeso', frase: 'Para tu suculenta favorita.', tipo: 'figurilla', temporada: 'primavera', ilustracion: 'figurilla' },
  { id: 'velas-lavanda-menta', nombre: 'Velas Lavanda y Menta', frase: 'Frescura para la tarde.', tipo: 'vela', temporada: 'primavera', ilustracion: 'pilar' },

  { id: 'figura-mama-ave', nombre: 'Figura Mamá Ave', frase: 'Para la que siempre cuida el nido.', tipo: 'figurilla', temporada: 'mamas', ilustracion: 'figurilla' },
  { id: 'vela-jazmin-miel', nombre: 'Vela Jazmín y Miel', frase: 'Dulce como sus abrazos.', tipo: 'vela', temporada: 'mamas', ilustracion: 'frasco' },
  { id: 'velas-rosa-mosqueta', nombre: 'Velas Rosa Mosqueta', frase: 'Para su rincón favorito.', tipo: 'vela', temporada: 'mamas', ilustracion: 'pilar' },

  { id: 'vela-cafe-de-olla', nombre: 'Vela Café de Olla', frase: 'Para las mañanas con papá.', tipo: 'vela', temporada: 'papas', ilustracion: 'frasco' },
  { id: 'bigoton', nombre: 'Bigotón de Yeso', frase: 'Con todo y su estilo.', tipo: 'figurilla', temporada: 'papas', ilustracion: 'figurilla' },
  { id: 'velas-madera-cuero', nombre: 'Velas Madera y Cuero', frase: 'Para su escritorio.', tipo: 'vela', temporada: 'papas', ilustracion: 'pilar' },

  { id: 'catrina-mini', nombre: 'Catrina Mini de Yeso', frase: 'Elegancia hecha en yeso.', tipo: 'figurilla', temporada: 'mexicano', ilustracion: 'figurilla' },
  { id: 'vela-chocolate-chile', nombre: 'Vela Chocolate y Chile', frase: 'Dulce con un toque picosito.', tipo: 'vela', temporada: 'mexicano', ilustracion: 'frasco' },
  { id: 'velas-tricolor', nombre: 'Velas Tricolor', frase: 'Para la noche del grito.', tipo: 'vela', temporada: 'mexicano', ilustracion: 'pilar' },

  { id: 'vela-canela-clavo', nombre: 'Vela Canela & Clavo', frase: 'Nuestro clásico de siempre.', tipo: 'vela', temporada: 'general', ilustracion: 'frasco' },
  { id: 'angelito', nombre: 'Angelito de Yeso', frase: 'Para cuidar tu casa.', tipo: 'figurilla', temporada: 'general', ilustracion: 'figurilla' },
  { id: 'velas-vainilla', nombre: 'Velas Vainilla Pura', frase: 'Sencillas, para todos los días.', tipo: 'vela', temporada: 'general', ilustracion: 'pilar' },
];

export const productoPorId = (id: string) => {
  const p = productos.find((x) => x.id === id);
  if (!p) throw new Error(`Producto no encontrado: ${id}`);
  return p;
};
