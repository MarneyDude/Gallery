import axios from 'axios';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

export class PixabayApiService {
  constructor() {
    this.searchQuery = '';
    this.page = 1;
    this.perPage = 15;
    this.apiKey = '49255995-7f6d469d944259310339ef533';
    this.baseURL = 'https://pixabay.com/api/';
  }

  async fetchImages() {
    const params = new URLSearchParams({
      key: this.apiKey,
      q: this.searchQuery,
      image_type: 'photo',
      page: this.page,
      per_page: this.perPage,
      orientation: 'horizontal',
      safesearch: true,
    });

    try {
      const response = await axios.get(this.baseURL, { params });

      const { hits, totalHits } = response.data;

      if (hits.length === 0) {
        this.showToast(
          'Sorry,',
          'There are no images matching your search query. Please try again!',
          'warning',
        );
        return { hits: [], totalHits: 0 };
      }

      this.page += 1;
      return { hits, totalHits };
    } catch (error) {
      console.error('Error fetching data:', error);
      this.showToast(
        'Error',
        'fetching data. Please try again later.',
        'error',
      );
      return { hits: [], totalHits: 0 };
    }
  }

  reset() {
    this.page = 1;
  }

  setQuery(query) {
    this.searchQuery = query;
    this.reset();
  }

  showToast(title, message, type = 'info') {
    iziToast.show({
      backgroundColor: '#f36f07',
      title,
      titleSize: 20,
      message,
      position: 'topRight',
      iconUrl: 'https://www.svgrepo.com/show/340010/cloud-data-ops.svg',
      iconColor: '#ffffff',
      messageSize: '20',
      messageColor: 'black',
      timeout: 3000,
      class: type,
    });
  }
}
