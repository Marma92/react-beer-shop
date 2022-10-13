import React, { useEffect, useState } from 'react'
import Thumbnail from './Thumbnail'
import { getBeers } from '../services/api/beerApi'

const BeerList = () => {
  const [beers, setBeers] = useState([])
  const [error, setError] = useState(false)
  const [state, setState] = useState('')
  useEffect(() => {
    setState('loading')
    getBeers(1)
      .then((res) => {
        console.log(res)
        setState('success')
        setBeers(res)
      })
      .catch((err) => {
        console.error('Error:', err)
        setState('error')
        setError(err)
      })
  }, [])
  if (state === 'error') {
    return (
            <h1>
                {error.toString()}
            </h1>
    )
  }
  return (
    <div className="gallery">
      {beers.map((beer, index) => (
        <Thumbnail
          beer={beer}
          key={index + 1}
        />
      ))}
    </div>
  )
}

export default BeerList
