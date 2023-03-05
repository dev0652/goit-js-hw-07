import { galleryItems } from './gallery-items.js';
// Change code below this line

// Create gallery markup
function createGalleryMarkup(arrayOfObjects) {
  return arrayOfObjects
    .map(
      ({ preview, original, description }) =>
        `
    <div class="gallery__item">
    <a class="gallery__link" href="${original}">
        <img
        class="gallery__image"
        src="${preview}"
        data-source="${original}"
        alt="${description}"
        />
    </a>
    </div>
    `
    )
    .join('');
}

// Create and insert gallery markup
const galleryContainer = document.querySelector('.gallery');

galleryContainer.insertAdjacentHTML(
  'beforeend',
  createGalleryMarkup(galleryItems)
);

// Listen to clicks
galleryContainer.addEventListener('click', onImgPreviewClick);

function onImgPreviewClick(event) {
  event.preventDefault();
  const target = event.target;

  // Check if the clicked area is an image
  const isImagePreview = target.classList.contains('gallery__image');

  if (!isImagePreview) {
    return;
  }

  // Create a basicLightbox image instance
  const instance = basicLightbox.create(`<img src="${target.dataset.source}">`);

  function onLightBoxOpen() {
    window.addEventListener('keydown', onEscKey, { once: true });
  }

  function onEscKey(event) {
    if (event.code === 'Escape') {
      instance.close();
    }
  }

  // Show a full-sized image + listen to Esc key press
  return instance.show(onLightBoxOpen);
}
