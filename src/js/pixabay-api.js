import axios from 'axios';

export function imagesRequest(value) {
  return axios.get('https://pixabay.com/api/', {
    params: {
      key: '49255995-7f6d469d944259310339ef533',
      q: value,
      image_type: 'photo',
      per_page: 200,
      orientation: 'horizontal',
      safesearch: true,
    },
  });
}
