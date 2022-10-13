/* eslint-disable react/prop-types */
import React from 'react'
import './thumbnail.css'

const Thumbnail = ({ beer, gref }) => {
  return (
      <div className='thumbnail' ref={gref}>
      <img
        src={beer.image_url}
        to={`/beers/${beer.id}`}
      />
      {beer.name}
      <br/>
      {beer.volume.value} {beer.volume.unit}
    </div>
  )
}

export default Thumbnail
