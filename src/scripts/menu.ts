export function iniciarMenu() {
  const navbar = document.querySelector<HTMLElement>('[data-navbar]');
  const boton = document.querySelector<HTMLButtonElement>('[data-menu-boton]');
  const menu = document.querySelector<HTMLElement>('[data-menu]');

  if (navbar) {
    const revisar = () => navbar.classList.toggle('encogido', window.scrollY > 40);
    revisar();
    window.addEventListener('scroll', revisar, { passive: true });
  }

  if (!boton || !menu) return;

  const cambiar = (abierto: boolean) => {
    boton.setAttribute('aria-expanded', String(abierto));
    boton.setAttribute('aria-label', abierto ? 'Cerrar menú' : 'Abrir menú');
    menu.classList.toggle('hidden', !abierto);
    menu.classList.toggle('flex', abierto);
  };

  boton.addEventListener('click', () => cambiar(boton.getAttribute('aria-expanded') !== 'true'));
  menu.addEventListener('click', (e) => {
    if ((e.target as HTMLElement).closest('a')) cambiar(false);
  });
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') cambiar(false);
  });
}
