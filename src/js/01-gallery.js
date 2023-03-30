// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

console.log(galleryItems);

const galleryListEl = document.querySelector('.gallery');

const imageItem = galleryItems
  .map(
    ({ preview, original, description }) =>
      `<li class="gallery__item">
    <a class="gallery__link" href="${original}">
      <img
        class="gallery__image"
        src="${preview}"
        data-source="${original}"
        alt="${description}"
      />
    </a>
  </li>`
  )
  .join('');

// galleryListEl.insertAdjacentHTML("beforeend", imageItem);

galleryListEl.innerHTML = imageItem;

galleryListEl.addEventListener('click', onImageClick);

function onImageClick(event) {
  event.preventDefault();

  if (!event.target.classList.contains('gallery__image')) {
    return;
  }

  const instance = basicLightbox.create(`
    <img src="${event.target.dataset.source}" width="800" height="600">
`);

  instance.show();

  galleryListEl.addEventListener('keydown', event => {
    if (event.code === 'Escape') {
      instance.close();
    }
  });
}
