// Завдання 2 - бібліотека SimpleLightbox
// Зроби таку саму галерею як в першому завданні, але використовуючи бібліотеку SimpleLightbox, 
// яка візьме на себе обробку кліків по зображеннях, відкриття і закриття модального вікна, а 
// акож гортання зображень за допомогою клавіатури.

// Необхідно трохи змінити розмітку картки галереї, використовуй цей шаблон.

// <a class="gallery__item" href="large-image.jpg">
//   <img class="gallery__image" src="small-image.jpg" alt="Image description" />
// </a>

// Виконуй це завдання у файлах 02-lightbox.html і 02-lightbox.js. Розбий його на декілька підзавдань:

// 1. Створення і рендер розмітки на підставі масиву даних galleryItems і наданого шаблону елемента галереї. 
//   Використовуй готовий код з першого завдання.
// 2. Підключення скрипту і стилів бібліотеки, використовуючи CDN сервіс cdnjs. Необхідно додати посилання на
//   два файли: simple-lightbox.min.js і simple-lightbox.min.css.
// 3. Ініціалізація бібліотеки після створення і додання елементів галереї у div.gallery. Для цього ознайомся 
//   з документацією SimpleLightbox - насамперед секції «Usage» і «Markup».
// 4. Подивися в документації секцію «Options» і додай відображення підписів до зображень з атрибута alt. 
//   Нехай підпис буде знизу і з'являється через 250 мілісекунд після відкриття зображення.


import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryImagesContainer = document.querySelector('.gallery');

const imageGalleryMarkup = galleryItems.map(item => `
  <a class="gallery__item" href="${item.original}">
    <img class="gallery__image" src="${item.preview}" alt="${item.description}" />
  </a>
`).join('');

galleryImagesContainer.innerHTML = imageGalleryMarkup;

galleryImagesContainer.addEventListener('click', onClickGalleryImage);

function onClickGalleryImage(evt) {
  evt.preventDefault();

  if (evt.target.nodeName !== 'IMG') {
    return;
  };
  const lightbox = new SimpleLightbox('.gallery a', { 
    captionsData: 'alt',
    captionDelay: 250,
  });  
}


// const lightbox = new SimpleLightbox('.gallery a', { 
//   captionsData: 'alt',
//   captionDelay: 250,
// });
