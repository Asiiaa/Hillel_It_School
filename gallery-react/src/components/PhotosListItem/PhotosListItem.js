import './PhotosListItem.css'

import React from 'react'

export default function PhotosListItem({photo}) {
  return (
        <img src={photo.url} alt={photo.title} albumId={photo.albumId}></img>
  )
}
