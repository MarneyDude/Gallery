import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const galleryEl = document.querySelector('.js-gallery');
let lightbox = new SimpleLightbox('.gallery__container a');

export function renderGallery(imagesArr) {
  const markup = imagesArr
    .map(
      ({
        webformatURL,
        largeImageURL,
        tags,
        likes,
        views,
        comments,
        downloads,
      }) => {
        return `
          <li class="gallery__item">
            <div class="gallery__container">
              <a href="${largeImageURL}">
                <img 
                  class="gallery__image"
                  src="${webformatURL}"
                  alt="${tags}"
                  loading="lazy"
                />
              </a>
              <ul class="gallery_user-stats">
                <li class="gallery__user-stats-item">
                  <p class="gallery__user-stats-text">Likes: <span>${likes}</span></p>
                </li>
                <li class="gallery__user-stats-item">
                  <p class="gallery__user-stats-text">Views: <span>${views}</span></p>
                </li>
                <li class="gallery__user-stats-item">
                  <p class="gallery__user-stats-text">Comments: <span>${comments}</span></p>
                </li>
                <li class="gallery__user-stats-item">
                  <p class="gallery__user-stats-text">Downloads: <span>${downloads}</span></p>
                </li>
              </ul>
            </div>
          </li>`;
      },
    )
    .join('');

  galleryEl.insertAdjacentHTML('beforeend', markup);
  lightbox.refresh();
}

export function clearGallery() {
  galleryEl.innerHTML = '';
}
