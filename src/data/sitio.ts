// Datos de contacto ficticios para el prototipo.
export const sitio = {
  nombre: 'Wonderful Love',
  descripcion:
    'Velas aromáticas y figurillas de yeso hechas a mano en Mérida, Yucatán, con temáticas para cada temporada.',
  whatsapp: '529991234567',
  whatsappVisible: '999 123 4567',
  facebook: 'https://facebook.com/wonderfullove.mx',
  facebookVisible: '/wonderfullove.mx',
  correo: 'hola@wonderfullove.mx',
  direccion: 'Calle 60 #123 x 55 y 57, Centro, Mérida, Yuc.',
  horario: 'Lunes a sábado · 10:00 a 19:00',
  mapa: 'https://maps.google.com/?q=Calle+60+Centro+Merida+Yucatan',
};

export const mensajeGeneral = 'Hola, vi su página y quiero información.';
export const mensajeProducto = (nombre: string) =>
  `Hola, vi en su página la ${nombre} y me gustaría cotizarla.`;

export const enlaceWhatsApp = (mensaje: string) =>
  `https://wa.me/${sitio.whatsapp}?text=${encodeURIComponent(mensaje)}`;
