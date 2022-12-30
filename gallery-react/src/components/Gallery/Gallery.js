import './Gallery.css'

import { useEffect, useState } from 'react'

import Albums from '../Albums/Albums'
import Photos from '..//Photos/Photos'
import {getAlbums} from '../../services/albumsServices'
import {getPhotos} from '../../services/photosServices'

function Gallery() {
  const [albums, setAlbums] = useState([]);
  const [selectedId, setSelectedId] = useState(null);
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    getAlbums().then((data) => {
      console.log(data)
      if (data.length > 0) {
        console.log(data[0].userId)
        setSelectedId(data[0].userId);
      }
      setAlbums(data);
    });
  }, []);

  useEffect(() => {
    selectedId === null || getPhotos(selectedId).then(setPhotos);
  }, [selectedId]);
  
  return (
    <div className='container'>
      <Albums albums={albums} onSelect={setSelectedId} selectedId={selectedId} />
      <Photos photos={photos} />
    </div>
  )
}

export default Gallery;