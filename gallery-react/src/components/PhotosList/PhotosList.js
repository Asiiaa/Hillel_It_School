import PhotosListItem from '../PhotosListItem/PhotosListItem'
import React from 'react'

export default function PhotosList({photos}) {
  return (
    <div>
        {photos.map((item) => (
            <PhotosListItem
                key={item.id}
                photo={item}
                />
    ))}
    </div>
  )
}