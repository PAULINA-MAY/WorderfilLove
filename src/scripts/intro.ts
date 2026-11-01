// El <head> decide si se muestra la intro "Wonderful Love" (clase .con-intro en
// <html>): solo la primera vez que alguien entra desde este navegador, o si la
// URL lleva ?intro (para volver a verla). Aquí solo se quita al terminar o al
// hacer clic, y se recuerda que ya se vio.
const DURACION_MS = 2200;

export function iniciarIntro() {
  const html = document.documentElement;
  if (!html.classList.contains('con-intro')) return;

  const terminar = () => {
    html.classList.remove('con-intro');
    try {
      localStorage.setItem('wl-intro', '1');
    } catch {
      // Sin almacenamiento (modo privado): la intro podría repetirse, no pasa nada.
    }
  };

  window.setTimeout(terminar, DURACION_MS);
  document.querySelector('.intro-marca')?.addEventListener('click', terminar);
}
