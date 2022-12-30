import './AlbumsListItem.css'

import React from 'react'

export default function AlbumsListItem({album, isSelected, onSelect}) {
    function onClicked (e) {
      console.log(album.userId)
        return onSelect(album.id)
    }
  return (
    <li onClick={onClicked} className={isSelected ? 'active' : ''}>
        {album.title}
    </li>
  )
}
