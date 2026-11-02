// Datos de contacto ficticios para el prototipo.
export const sitio = {
  nombre: 'Wonderful Love',
  descripcion:
    'Velas aromáticas y figurillas de yeso hechas a mano en Mérida, Yucatán, con temáticas para cada temporada.',
  whatsapp: '529994130668',
  whatsappVisible: '999 413 0668',
  facebook: 'https://facebook.com/wonderfullove.mx',
  facebookVisible: '/wonderfullove.mx',
  correo: 'hola  ',
  direccion: 'Calle 43 x 18 y 20 Roble agricola, Mérida, Yucatán, México , 376 A',
  horario: 'Lunes a sábado · 10:00 a 19:00',
  mapa: 'https://maps.google.com/?q=Calle+43+x+18+y+20+Roble+Agricola,+Mérida,+Yucatán,+México,+376+A',
};

export const mensajeGeneral = 'Hola, vi su página y quiero información.';
export const mensajeProducto = (nombre: string) =>
  `Hola, vi en su página la ${nombre} y me gustaría cotizarla.`;

export const enlaceWhatsApp = (mensaje: string) =>
  `https://wa.me/${sitio.whatsapp}?text=${encodeURIComponent(mensaje)}`;
