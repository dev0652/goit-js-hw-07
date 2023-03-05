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

new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});
