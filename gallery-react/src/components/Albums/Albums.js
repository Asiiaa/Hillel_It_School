import './Albums.css'

import AlbumsList from '../AlbumsList/AlbumsList'
import React from 'react'

export default function Albums({albums, onSelect, selectedId}) {
  return (
    <div>
        <div className='title'>Albums</div>
        <AlbumsList albums={albums} onSelect={onSelect} selectedId={selectedId} />
    </div>
  )
}