import { galleryItems } from './gallery-items.js';
// Change code below this line

// 1. Створення і рендер розмітки на підставі масиву даних galleryItems і наданого шаблону елемента галереї

const galleryCnt = document.querySelector('.gallery');

function makeItemMarkup({ preview, original, description }) {
  return `
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
    `;
}

const galleryMarkup = galleryItems.map(makeItemMarkup).join('');

galleryCnt.insertAdjacentHTML('beforeend', galleryMarkup);

// 2. Реалізація делегування на div.gallery і отримання url великого зображення.

galleryCnt.addEventListener('click', handleImgClick);

function openLargeImg(e) {}
