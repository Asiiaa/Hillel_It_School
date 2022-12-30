const API_URL_ALBUMS = 'https://jsonplaceholder.typicode.com/albums';

export function getAlbums() {
    return request(API_URL_ALBUMS);
  }

  function request(url, options) {
    return fetch(url, options).then((res) => {
      if (res.ok) {
        return res.json();
      }
  
      throw new Error(res);
    });
  }