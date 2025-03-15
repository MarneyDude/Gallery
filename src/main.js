import { PixabayApiService } from './js/pixabay-api.js';
import { renderGallery, clearGallery } from './js/render-functions.js';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const formEl = document.querySelector('.form');
const paginationButton = document.querySelector('.js-load-more-button');
const loader = document.querySelector('.loader');

const apiService = new PixabayApiService();

formEl.addEventListener('submit', async (event) => {
  event.preventDefault();

  const formData = new FormData(formEl);
  const inputQuery = formData.get('input').trim();

  if (!inputQuery) {
    return;
  }

  apiService.setQuery(inputQuery);

  clearGallery();

  loaderDisplayOn();
  paginationButton.classList.remove('display-On-Of');

  const { hits, totalHits } = await apiService.fetchImages();

  loaderDisplayOff();

  if (hits.length > 0) {
    renderGallery(hits);
    paginationBtnDisplayToggle(apiService, paginationButton, totalHits);
  }

  formEl.reset();
});

paginationButton.addEventListener('click', async (event) => {
  event.preventDefault();

  loaderDisplayOn();

  const { hits, totalHits } = await apiService.fetchImages();

  loaderDisplayOff();

  if (hits.length > 0) {
    renderGallery(hits);
    paginationBtnDisplayToggle(apiService, paginationButton, totalHits);
  }

  const firstGalleryItem = document.querySelector('.gallery__item');
  if (firstGalleryItem) {
    const { height } = firstGalleryItem.getBoundingClientRect();
    window.scrollBy({ top: height * 2, behavior: 'smooth' });
  }
});

function paginationBtnDisplayToggle(apiService, paginationButton, totalHits) {
  const displayToggle = (apiService.page - 1) * apiService.perPage <= totalHits;

  paginationButton.classList.toggle('display-On-Of', displayToggle);

  if (!displayToggle) {
    iziToast.show({
      backgroundColor: '#008ae9',
      title: `We're sorry`,
      titleSize: 20,
      message: `but you've reached the end of search results`,
      position: 'topRight',
      iconUrl: 'https://www.svgrepo.com/show/340010/cloud-data-ops.svg',
      iconColor: '#ffffff',
      messageSize: '20',
      messageColor: 'black',
      timeout: 3000,
    });
  }
}

function loaderDisplayOn() {
  loader.classList.remove('js-loader');
}

function loaderDisplayOff() {
  loader.classList.add('js-loader');
}
