import { galleryItems } from './gallery-items.js';
// Change code below this line

function createGalleryMarkup(arrayOfObjects) {
  return arrayOfObjects
    .map(
      ({ preview, original, description }) =>
        `
        <li>
        <a class="gallery__item" href="${original}">
            <img
            class="gallery__image"
            src="${preview}"
            alt="${description}"
            />
        </a>
        </li>
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

  // Create a SimpleLightbox instance
  return new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
    captionDelay: 250,
  });
}
