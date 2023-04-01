// Add imports above this line
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import { galleryItems } from './gallery-items';
// Change code below this line


const galleryListEl = document.querySelector('.gallery');

const galleryMarkup = createGalleryItemsMarkup(galleryItems);
galleryListEl.insertAdjacentHTML('beforeend', galleryMarkup);


function createGalleryItemsMarkup(items) {
  return items.map(({ preview, original, description }) => {
    return ` <a class="gallery__link" href="${original}">
       <img class="gallery__image" src="${preview}"
       alt="${description}" />
    </a>`
  }).join('');
}
  const lightbox = new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
    captionPosition: 'bottom',
    captionDelay: 250,
  });

