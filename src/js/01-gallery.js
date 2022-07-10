import { galleryItems } from './gallery-items.js';
// Change code below this line
console.log(galleryItems);

const galleryContainer = document.querySelector(".gallery");
const galleryMarkup = createGallery(galleryItems);

galleryContainer.insertAdjacentHTML('beforeend', galleryMarkup);

galleryContainer.addEventListener("click", onGalleryContainerClick);


function onGalleryContainerClick(evt) {
  evt.preventDefault()
  if (!evt.target.classList.contains('gallery__image')) {
    return
  }
  const instance = basicLightbox.create(`
    <img src="${evt.target.dataset.source}">
`)
  instance.show()
  window.addEventListener("keydown", onEscKeyPress);
  function onEscKeyPress(evt) {
    const ESC_KEY_CODE = 'Escape';
    if (evt.code === ESC_KEY_CODE) {
      instance.close()
    }
    if (instance.close()) {
      window.removeEventListener("keydown", onEscKeyPress);
    }
    console.log(evt.code)
  }

}


function createGallery(galleryItems) {
  const markup = galleryItems.map(({ preview, original, description }) => {
    return `<div class="gallery__item">
    <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>`
  }).join("");
  return markup;
};












