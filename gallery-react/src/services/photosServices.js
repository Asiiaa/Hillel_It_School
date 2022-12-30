const API_URL_PHOTOS = 'https://jsonplaceholder.typicode.com/photos';

export function getPhotos(albumId) {
    return request(`${API_URL_PHOTOS}?albumId=${albumId}`);
  }

  function request(url, options) {
    return fetch(url, options).then((res) => {
      if (res.ok) {
        return res.json();
      }
  
      throw new Error(res);
    });
  }