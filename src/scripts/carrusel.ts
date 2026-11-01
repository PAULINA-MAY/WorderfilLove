// Hero en carrusel: cambia solo cada pocos segundos, todo el tiempo (también
// con el mouse encima). Se mueve con flechas y puntos en pantalla grande y
// deslizando con el dedo en celular. Las diapositivas inactivas llevan `inert`
// (global.css las oculta con un desvanecido). Si la persona pidió reducir el
// movimiento, no avanza solo, pero sí responde a flechas, puntos y dedo.
const INTERVALO_MS = 6000;
const DESLIZ_MIN_PX = 40;

export function iniciarCarruseles() {
  document.querySelectorAll<HTMLElement>('[data-carrusel]').forEach(iniciar);
}

function iniciar(raiz: HTMLElement) {
  const diapositivas = [...raiz.querySelectorAll<HTMLElement>('[data-diapositiva]')];
  const puntos = [...raiz.querySelectorAll<HTMLButtonElement>('[data-punto]')];
  const quieto = matchMedia('(prefers-reduced-motion: reduce)').matches;
  let actual = 0;
  let temporizador: number | undefined;

  const ir = (n: number) => {
    actual = (n + diapositivas.length) % diapositivas.length;
    diapositivas.forEach((d, i) => (d.inert = i !== actual));
    puntos.forEach((p, i) => (i === actual ? p.setAttribute('aria-current', 'true') : p.removeAttribute('aria-current')));
  };
  // Cada cambio manual reinicia la cuenta, para que la diapositiva elegida dure completa.
  const reiniciar = () => {
    window.clearInterval(temporizador);
    if (quieto) return;
    temporizador = window.setInterval(() => {
      // Si la temporada de este carrusel no es la visible, no hace falta avanzar.
      if (raiz.offsetParent !== null) ir(actual + 1);
    }, INTERVALO_MS);
  };
  const mover = (n: number) => {
    ir(n);
    reiniciar();
  };

  raiz.querySelector('[data-anterior]')?.addEventListener('click', () => mover(actual - 1));
  raiz.querySelector('[data-siguiente]')?.addEventListener('click', () => mover(actual + 1));
  puntos.forEach((p, i) => p.addEventListener('click', () => mover(i)));

  // Deslizar con el dedo: solo cuenta si el gesto fue más horizontal que vertical.
  let inicio: { x: number; y: number } | null = null;
  raiz.addEventListener(
    'touchstart',
    (e) => {
      const t = e.touches[0];
      inicio = { x: t.clientX, y: t.clientY };
    },
    { passive: true },
  );
  raiz.addEventListener(
    'touchend',
    (e) => {
      if (!inicio) return;
      const t = e.changedTouches[0];
      const dx = t.clientX - inicio.x;
      const dy = t.clientY - inicio.y;
      inicio = null;
      if (Math.abs(dx) >= DESLIZ_MIN_PX && Math.abs(dx) > Math.abs(dy)) mover(actual + (dx < 0 ? 1 : -1));
    },
    { passive: true },
  );

  reiniciar();
}
