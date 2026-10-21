// Las secciones con .revelar aparecen al entrar en pantalla, una sola vez.
export function iniciarRevelar() {
  const elementos = document.querySelectorAll<HTMLElement>('.revelar');
  if (!('IntersectionObserver' in window)) {
    elementos.forEach((el) => el.classList.add('visible'));
    return;
  }
  const observador = new IntersectionObserver(
    (entradas) => {
      for (const e of entradas) {
        if (e.isIntersecting) {
          e.target.classList.add('visible');
          observador.unobserve(e.target);
        }
      }
    },
    { rootMargin: '0px 0px -8% 0px', threshold: 0 },
  );
  elementos.forEach((el) => observador.observe(el));
}
