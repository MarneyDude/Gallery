import { imagesRequest } from './pixabay-api';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const lightbox = new SimpleLightbox('.gallery__container a');

export const renderGallery = (event) => {
  event.preventDefault();

  const form = new FormData(event.target);

  const inputValue = form.get('input');

  const loader = document.querySelector('.loader');

  loader.classList.remove('loader-hidden');

  imagesRequest(inputValue)
    .then((response) => {
      const gallery = document.querySelector('.js-gallery');
      const dataImage = response.data.hits;
      renderImages(dataImage, gallery);
    })
    .catch((error) => {
      loader.classList.remove('loader-hidden');
      console.error('Error fetching data:', error);
    })
    .finally(() => {
      loader.classList.add('loader-hidden');
    });

  event.target.reset();
};

function getMessage() {
  iziToast.show({
    title: 'Sorry,',
    titleSize: '21',
    message:
      'there are no images matching your search query. Please try again!',
    position: 'topRight',
    iconUrl: 'https://www.svgrepo.com/show/340010/cloud-data-ops.svg',
    iconColor: '#ffffff',
    messageSize: '21',
    messageColor: 'black',
  });
}

function renderImages(dataImage, gallery) {
  if (dataImage.length === 0) {
    getMessage();
  }

  gallery.innerHTML = '';
  const markup = dataImage
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
        return `<li class='gallery__item'>
              <div class='gallery__container '>
                <a href='${largeImageURL}'>
                 
                    <span class=' loader-position loader '></span>
                    <img
                      class='gallery__image'
                      src='${webformatURL}'
                      alt='${tags}'
                      onload="this.previousElementSibling.style.visibility = 'hidden';" 
                      onerror="this.previousElementSibling.visibility = 'hidden';" 
                    />
                 
                </a>

                <ul class='gallery_user-stats'>
                  <li class='gallery__user-stats-item'>
                    <p class='gallery__user-stats-text'>
                      Likes:<span>${likes}</span>
                    </p>
                  </li>
                  <li class='gallery__user-stats-item'>
                    <p class='gallery__user-stats-text'>
                      Views:<span>${views}</span>
                    </p>
                  </li>
                  <li class='gallery__user-stats-item'>
                    <p class='gallery__user-stats-text'>
                      Comments:<span>${comments}</span>
                    </p>
                  </li>
                  <li class='gallery__user-stats-item'>
                    <p class='gallery__user-stats-text'>
                      Downloads:<span>${downloads}</span>
                    </p>
                  </li>
                </ul>
              </div>
            </li>`;
      },
    )
    .join('');

  gallery.innerHTML = markup;

  lightbox.refresh();
}
