import AlbumsListItem from '../AlbumsListItem/AlbumsListItem'
import React from 'react'

export default function AlbumsList({albums, onSelect, selectedId}) {
  console.log('albumsList', albums);
  console.log('selectedId', selectedId);

  return (
    <div>
        {albums.map((item) => (
            <AlbumsListItem
                key={item.id}
                album={item}
                isSelected={item.id === selectedId}
                onSelect={onSelect}
                />
    ))}
    </div>
  )
}