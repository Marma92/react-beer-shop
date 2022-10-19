/* eslint-disable react/prop-types */
import React from 'react'
import { Link } from 'react-router-dom'
import './thumbnail.css'

const Thumbnail = ({ beer, gref }) => {
  return (
      <div className='thumbnail' >
      <img
        src={beer.image_url}
      />
      <Link to={{
        pathname: `/product/${beer.id}`
      }}>
      {beer.name}
      </Link>
      <br ref={gref}/>
      {beer.volume.value} {beer.volume.unit}
      <button className='addToCart'>Add to cart</button>
    </div>
  )
}

export default Thumbnail
