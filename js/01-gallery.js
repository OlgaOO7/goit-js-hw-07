import { galleryItems } from './gallery-items.js';
// Change code below this line


const galleryImagesContainer = document.querySelector('.gallery');

const imageGalleryMarkup = galleryItems.map(item => `
<div class="gallery__item">
<a class="gallery__link" href="${item.original}">
  <img
    class="gallery__image"
    src="${item.preview}"
    data-source="${item.original}"
    alt="${item.description}"
  />
</a>
</div>
`).join('');

galleryImagesContainer.innerHTML = imageGalleryMarkup;

galleryImagesContainer.addEventListener('click', onClickGalleryImage);

function onClickGalleryImage(evt) {
  evt.preventDefault();

  if (evt.target.nodeName !== 'IMG') {
    return;
  };

  const instance = basicLightbox.create(`
    <div class="modal">
      <img src="${evt.target.dataset.source}" width="800" height="600">
    </div>
  `,
    {
      onShow: () => { 
        document.addEventListener('keydown', onEscape)
      },
      onClose: () => {
        document.removeEventListener('keydown', onEscape)
      },
    });
  
    function onEscape(event) {    
      if (event.code !== 'Escape') {
        return;    
      }    
      instance.close();
    };

  instance.show();
};
