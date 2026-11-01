const menuToggle = document.querySelector('.menu-toggle');
const mainNavigation = document.querySelector('#main-navigation');

function setMenuOpen(isOpen) {
  mainNavigation.classList.toggle('open', isOpen);
  menuToggle.setAttribute('aria-expanded', String(isOpen));
  menuToggle.setAttribute('aria-label', isOpen ? 'Cerrar menú' : 'Abrir menú');
}

menuToggle.addEventListener('click', () => {
  const isOpen = menuToggle.getAttribute('aria-expanded') !== 'true';
  setMenuOpen(isOpen);
});

mainNavigation.addEventListener('click', (event) => {
  if (event.target.closest('a')) setMenuOpen(false);
});

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') setMenuOpen(false);
});

const productLightbox = document.querySelector('.product-lightbox');

if (productLightbox) {
  const enlargedImage = productLightbox.querySelector('#product-lightbox-image');
  const imageCaption = productLightbox.querySelector('#product-lightbox-caption');

  document.querySelectorAll('[data-product-image]').forEach((button) => {
    button.addEventListener('click', () => {
      const image = button.querySelector('img');
      enlargedImage.src = image.currentSrc || image.src;
      enlargedImage.alt = image.alt;
      imageCaption.textContent = button.closest('figure').querySelector('h3').textContent;
      productLightbox.showModal();
      document.body.classList.add('image-view-open');
    });
  });

  productLightbox.addEventListener('close', () => {
    document.body.classList.remove('image-view-open');
  });

  productLightbox.addEventListener('click', (event) => {
    if (event.target === productLightbox) productLightbox.close();
  });
}
