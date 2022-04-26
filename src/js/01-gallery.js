// Add imports above this line
import { galleryItems } from './gallery-items';

import SimpleLightbox from 'simplelightbox';
import '../sass/simple-lightbox.scss';
// Change code below this line

const refs = {
    gallery: document.querySelector('.gallery'),
};

const galleryItemsMarkup = createGalleryItemsMarkup(galleryItems);
refs.gallery.innerHTML = galleryItemsMarkup;

function createGalleryItemsMarkup(items) {
    const markup = items
        .map(({ preview, original, description }) => {
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
            </div>`;
        })
        .join('');

    return markup;
}

let gallery = new SimpleLightbox('.gallery a', { captionDelay: 250, captionsData: 'alt' });
gallery.on('show.simplelightbox', function () {});
