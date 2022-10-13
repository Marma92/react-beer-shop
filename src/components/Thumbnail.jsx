/* eslint-disable react/prop-types */
import React from 'react'

const Thumbnail = ({ beer }) => (

  <div>
    <img
      style={{ display: 'block', margin: '1rem 0' }}
      to={`/beers/${beer.id}`}
      key={beer.id}
    />
    {beer.name}
  </div>

)

export default Thumbnail
