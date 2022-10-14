/* eslint-disable react/prop-types */
import React from 'react'
import './thumbnail.css'

const Thumbnail = ({ beer, gref }) => {
  return (
      <div className='thumbnail' >
      <img
        src={beer.image_url}
        to={`/beers/${beer.id}`}
      />
      {beer.name}
      <br ref={gref}/>
      {beer.volume.value / 100} {beer.volume.unit}
      <button className='addToCart'>Add to cart</button>
    </div>
  )
}

export default Thumbnail
