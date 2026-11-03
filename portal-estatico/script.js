// El único comportamiento de JavaScript es abrir y cerrar el menú lateral.
const body = document.body;
const menuButton = document.querySelector('[data-open-menu]');
const closeButtons = document.querySelectorAll('[data-close-menu]');

function closeMenu() {
  body.classList.remove('menu-open');
  menuButton?.setAttribute('aria-expanded', 'false');
}

menuButton?.addEventListener('click', () => {
  const isOpen = body.classList.toggle('menu-open');
  menuButton.setAttribute('aria-expanded', String(isOpen));
});

closeButtons.forEach((button) => button.addEventListener('click', closeMenu));
document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') closeMenu();
});
