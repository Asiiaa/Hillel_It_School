import './Photos.css'

import PhotosList from '../PhotosList/PhotosList'
import React from 'react'

export default function Photos({photos}) {
    console.log(photos)
  return (
    <div>
        <div className='title'>Photos</div>
        <PhotosList photos={photos} />
    </div>
  )
}