/* eslint-disable react/prop-types */
import React from 'react'
import './detailedView.css'

const DetailedView = ({ beer }) => {
  console.log(beer.id)
  return (
  <div className='detailedView'>
    <div className='description'>
      <div>
        <img className='detailedImg'
          src={beer.image_url}
        />
      </div>
      <div>
        <h2>{beer.name} <i>({beer.volume.value} {beer.volume.unit})</i></h2>
        <h3><i>{'"' + beer.description + '"'}</i></h3>
      </div>
    </div>
    <div>
      <div className='details'>
        <h2>Ingredients:</h2>
        <h3>Malt:</h3>
        <ul>
          {beer.ingredients.malt.map((malt, index) => (
            <li key={index}> {malt.name}: {malt.amount.value} {malt.amount.unit}</li>
          ))
          }
        </ul>
        <h3>Hops:</h3>
        <ul>
          {beer.ingredients.hops.map((hop, index) => (
            <li key={index}> {hop.name}: {hop.amount.value} {hop.amount.unit}</li>
          ))
          }
        </ul>
        <h3>Yeast:</h3>
          {beer.ingredients.yeast}
        <h2>Makes a perfect couple with:</h2>
        <ul>
          {beer.food_pairing.map((food, index) => (
            <li key={index}>{food}</li>
          ))
          }
        </ul>
        <h2>A word from its brewer:</h2>
          {beer.brewers_tips}
      </div>
    </div>
  </div>
  )
}
export default DetailedView
