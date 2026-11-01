import type { ClaveTemporada } from './temporadas';
import fotoFantasmita from '../assets/halloween/FantasmaYeso.jpeg';
import fotoVelaFantasmita from '../assets/halloween/VelaYesoFantasmaCalabazas.jpeg';
import fotoCalabazaFlores from '../assets/halloween/VelaYesoFlores.jpeg';
import fotoCalabazas from '../assets/halloween/Calabazas.jpeg';
import fotoCalabazasCharola from '../assets/diaMuertos/VelaYesoCalabazaBase.jpeg';
import fotoFlorMorada from '../assets/diaMuertos/VelaYesoFloresBase.jpeg';
import fotoCruzCalabaza from '../assets/diaMuertos/YesoVelaCruzCalabaza.jpeg';

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
  /** Foto real del producto; si no hay, la tarjeta usa la ilustración. */
  foto?: {
    src: ImageMetadata;
    alt: string;
    /** `object-position` del recorte, para centrar la pieza en la tarjeta. */
    posicion?: string;
  };
}

// Halloween y Día de Muertos son piezas reales (con foto); el resto es ficticio para el prototipo.
export const productos: Producto[] = [
  { id: 'fantasmita-brujo', nombre: 'Fantasmita Brujo de Yeso', frase: 'Con sombrero y varita, listo para la noche.', tipo: 'figurilla', temporada: 'halloween', ilustracion: 'figurilla',
    foto: { src: fotoFantasmita, alt: 'Figurilla de yeso de un fantasma blanco con sombrero de bruja morado y una varita con estrella roja', posicion: '50% 45%' } },
  { id: 'vela-fantasmita', nombre: 'Vela Fantasmita', frase: 'Calabacitas de cera dentro de un fantasma de yeso.', tipo: 'vela', temporada: 'halloween', ilustracion: 'frasco',
    foto: { src: fotoVelaFantasmita, alt: 'Vela en un recipiente de yeso con forma de fantasma, con tres calabacitas moradas de cera', posicion: '50% 60%' } },
  { id: 'vela-calabaza-flores', nombre: 'Vela Calabaza con Flores', frase: 'Florecitas de cera en una calabaza de yeso.', tipo: 'vela', temporada: 'halloween', ilustracion: 'frasco',
    foto: { src: fotoCalabazaFlores, alt: 'Vela en una calabaza de yeso rosa con tres flores amarillas de cera', posicion: '50% 60%' } },
  { id: 'calabazas-yeso', nombre: 'Calabazas de Yeso', frase: 'Una con tapa y otra con vela, para tu repisa.', tipo: 'figurilla', temporada: 'halloween', ilustracion: 'figurilla',
    foto: { src: fotoCalabazas, alt: 'Dos calabazas de yeso: una rosa con vela y una naranja con tapa', posicion: '50% 35%' } },

  { id: 'velas-calabaza-charola', nombre: 'Velas Calabaza en Charola', frase: 'Tres calabacitas de cera para tu altar.', tipo: 'vela', temporada: 'muertos', ilustracion: 'pilar',
    foto: { src: fotoCalabazasCharola, alt: 'Tres velas amarillas en forma de calabaza sobre una charola de yeso blanca', posicion: '50% 65%' } },
  { id: 'vela-flor-morada', nombre: 'Vela Flor Morada', frase: 'Una flor de cera con calabacitas y florecitas.', tipo: 'vela', temporada: 'muertos', ilustracion: 'pilar',
    foto: { src: fotoFlorMorada, alt: 'Vela morada en forma de flor con calabacitas moradas y flores amarillas de cera sobre una charola de yeso', posicion: '50% 60%' } },
  { id: 'vela-cruz-calabaza', nombre: 'Vela Cruz y Calabaza', frase: 'Luz para los que vuelven a casa.', tipo: 'vela', temporada: 'muertos', ilustracion: 'pilar',
    foto: { src: fotoCruzCalabaza, alt: 'Vela blanca en forma de cruz y vela morada en forma de calabaza sobre una charola plateada', posicion: '50% 60%' } },

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
