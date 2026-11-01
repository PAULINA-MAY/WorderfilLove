// Las secciones con .revelar y las tarjetas con .tarjeta-anim aparecen al
// entrar en pantalla, una sola vez. Las tarjetas que entran juntas (una fila,
// un grupo) lo hacen en cascada.
const PASO_CASCADA_MS = 90;

export function iniciarRevelar() {
  const elementos = document.querySelectorAll<HTMLElement>('.revelar, .tarjeta-anim');
  if (!('IntersectionObserver' in window)) {
    elementos.forEach((el) => el.classList.add('visible'));
    return;
  }
  const observador = new IntersectionObserver(
    (entradas) => {
      let tarjetas = 0;
      for (const e of entradas) {
        if (!e.isIntersecting) continue;
        const el = e.target as HTMLElement;
        if (el.classList.contains('tarjeta-anim')) {
          el.style.setProperty('--retraso-anim', `${tarjetas++ * PASO_CASCADA_MS}ms`);
        }
        el.classList.add('visible');
        observador.unobserve(el);
      }
    },
    { rootMargin: '0px 0px -8% 0px', threshold: 0 },
  );
  elementos.forEach((el) => observador.observe(el));
}
