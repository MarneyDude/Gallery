import axios from 'axios';

import { loadMoreBtnHidden, loadMoreBtnVisual } from '../main';

import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

let page = 1;
let per_page = 15;

export async function dataRequest(value, newSearch = false) {
  if (newSearch) {
    page = 1;
  }

  const params = new URLSearchParams({
    key: '49255995-7f6d469d944259310339ef533',
    q: value,
    image_type: 'photo',
    page,
    per_page,
    orientation: 'horizontal',
    safesearch: true,
  });

  try {
    const response = await axios.get('https://pixabay.com/api/', { params });

    const dataImages = response.data.hits;

    let totalImages = response.data.totalHits;

    if (dataImages.length === 0) {
      message_DataIsEmpty();
      return [];
    }

    if (page * per_page <= totalImages) {
      loadMoreBtnVisual();
    } else {
      endingSearch();
    }

    page += 1;

    return dataImages;
  } catch (error) {
    message_ErrorFetchingData();
    console.error('Error fetching data:', error);
    return [];
  }
}

function message_DataIsEmpty() {
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

function message_ErrorFetchingData() {
  iziToast.show({
    title: 'Sorry,',
    titleSize: '21',
    message: 'Error Fetching Data:',
    position: 'topRight',
    iconUrl: 'https://www.svgrepo.com/show/340010/cloud-data-ops.svg',
    iconColor: '#ffffff',
    messageSize: '21',
    messageColor: 'black',
  });
}

function endingSearch() {
  loadMoreBtnHidden();

  iziToast.show({
    title: 'Sorry,',
    titleSize: '21',
    message: `We're sorry, but you've reached the end of search results.`,
    position: 'topRight',
    iconUrl: 'https://www.svgrepo.com/show/340010/cloud-data-ops.svg',
    iconColor: '#ffffff',
    messageSize: '21',
    messageColor: 'black',
  });
}
