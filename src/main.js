import { dataRequest } from './js/pixabay-api';
import { renderGallery } from './js/render-functions';

import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const lightboxEl = new SimpleLightbox('.gallery__container a');

const HTMLelements = {
  formEl: document.querySelector('.form'),
  galleryEl: document.querySelector('.js-gallery'),
  loadMoreButtonEl: document.querySelector('.js-load-more-button'),
  loader: document.querySelector('.loader'),
};

const { formEl, galleryEl, loadMoreButtonEl, loader } = HTMLelements;
let inputValue = '';

formEl.addEventListener('submit', async (event) => {
  event.preventDefault();

  const form = new FormData(formEl);

  inputValue = form.get('input');

  galleryEl.innerHTML = '';
  loadMoreBtnHidden();
  loader.classList.remove('loader-hidden');

  if (!inputValue) {
    return;
  }

  const imagesDataArray = await dataRequest(inputValue, true).finally(() =>
    loader.classList.add('loader-hidden'),
  );

  renderGallery(imagesDataArray, galleryEl);

  lightboxEl.refresh();

  formEl.reset();
});

export function loadMoreBtnVisual() {
  loadMoreButtonEl.classList.add('display-visual');
}

export function loadMoreBtnHidden() {
  loadMoreButtonEl.classList.remove('display-visual');
}

loadMoreButtonEl.addEventListener('click', async (event) => {
  event.preventDefault();

  const imagesDataArray = await dataRequest(inputValue).finally(() =>
    loader.classList.add('loader-hidden'),
  );

  renderGallery(imagesDataArray, galleryEl);

  lightboxEl.refresh();

  const element = document.querySelector('.gallery__item');

  const height = element.getBoundingClientRect().height;

  window.scrollBy({ top: height * 2, behavior: 'smooth' });
});
