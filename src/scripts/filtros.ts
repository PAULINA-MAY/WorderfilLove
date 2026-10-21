type Grupo = 'tipo' | 'temporada';

export function iniciarFiltros() {
  const catalogo = document.querySelector<HTMLElement>('[data-catalogo]');
  if (!catalogo) return;

  const botones = [...catalogo.querySelectorAll<HTMLButtonElement>('[data-filtro]')];
  const tarjetas = [...catalogo.querySelectorAll<HTMLElement>('[data-rejilla] [data-producto]')];
  const vacio = catalogo.querySelector<HTMLElement>('[data-vacio]');
  const activo: Record<Grupo, string> = { tipo: 'todo', temporada: 'todo' };

  const aplicar = () => {
    let visibles = 0;
    for (const t of tarjetas) {
      const ok =
        (activo.tipo === 'todo' || t.dataset.tipo === activo.tipo) &&
        (activo.temporada === 'todo' || t.dataset.temporadaProducto === activo.temporada);
      t.hidden = !ok;
      if (ok) visibles++;
    }
    vacio?.classList.toggle('hidden', visibles > 0);
  };

  for (const b of botones) {
    b.addEventListener('click', () => {
      const grupo = b.dataset.filtro as Grupo;
      activo[grupo] = b.dataset.valor ?? 'todo';
      for (const otro of botones) {
        if (otro.dataset.filtro === grupo) otro.setAttribute('aria-pressed', String(otro === b));
      }
      aplicar();
    });
  }
}
