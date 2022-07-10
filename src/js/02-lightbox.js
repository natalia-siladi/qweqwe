import { galleryItems } from './gallery-items.js';

// Change code below this line
const galleryContainer = document.querySelector(".gallery");
const galleryMarkup = createGallery(galleryItems);

galleryContainer.insertAdjacentHTML('beforeend', galleryMarkup);

galleryContainer.addEventListener("click", onGalleryContainerClick);

function onGalleryContainerClick(evt) {
    evt.preventDefault()
    if (!evt.target.classList.contains('gallery__image')) {
        return
    }
    var lightbox = new SimpleLightbox('.gallery a', { captionsData: 'alt', captionDelay: 250 });


}

function createGallery(galleryItems) {
    const markup = galleryItems.map(({ preview, original, description }) => {
        return `
        <div class = "gallery">
            <a class="gallery__item" href="${original}">
            <img
               class="gallery__image"
               src="${preview}"
               alt="${description}"
             />
           </a>
           </div>
         `
    }).join("");
    return markup;
};

console.log(galleryItems);

