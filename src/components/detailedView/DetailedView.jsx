/* eslint-disable react/prop-types */
import React from 'react'
import './detailedView.css'

const DetailedView = ({ beer }) => {
  console.log(beer.id)
  return (
  <>
  <div className='description'>
    <div>
      <img className='detailedImg'
        src={beer.image_url}
      />
    </div>
    <div>
      <h2>{beer.name}</h2>
      <h3><i>{'"' + beer.description + '"'}</i></h3>
    </div>
  </div>
  <div>

  </div>
  </>
  )
}
export default DetailedView
