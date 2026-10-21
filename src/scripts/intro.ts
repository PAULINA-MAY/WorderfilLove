// El <head> decide si se muestra la intro (clase .con-intro en <html>).
// Aquí solo se quita al terminar y se recuerda para el resto de la sesión.
const DURACION_MS = 2100;

export function iniciarIntro() {
  const html = document.documentElement;
  if (!html.classList.contains('con-intro')) return;

  const terminar = () => {
    html.classList.remove('con-intro');
    try {
      sessionStorage.setItem('wl-intro', '1');
    } catch {
      // Sin almacenamiento (modo privado): la intro podría repetirse, no pasa nada.
    }
  };

  setTimeout(terminar, DURACION_MS);
  document.querySelectorAll('.intro').forEach((el) => el.addEventListener('click', terminar));
}
