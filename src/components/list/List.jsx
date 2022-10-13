import React, { useCallback, useRef, useState } from 'react'
import Thumbnail from '../thumbnail/Thumbnail'
import { getBeers } from '../../helpers/beerApi'
import './list.css'

const BeerList = () => {
  const [page, setPage] = useState(1)
  const { isLoading, error, beers, hasMore } = getBeers(page)

  const observer = useRef()
  const lastBeerElementRef = useCallback(
    (node) => {
      if (isLoading) return
      if (observer.current) observer.current.disconnect()
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && hasMore) {
          setPage((prev) => prev + 1)
        }
      })
      if (node) observer.current.observe(node)
    },
    [isLoading, hasMore]
  )

  if (error) {
    return (
      <h1>
          {error.toString()}
      </h1>
    )
  }
  return (
    <div className="list">
      {beers.map((beer, index) => {
        if (beers.length === index + 1) {
          return (
          <Thumbnail
              beer={beer}
              key={index + 1}
              gref={lastBeerElementRef}
            />
          )
        } else {
          return (
            <Thumbnail
              beer={beer}
              key={index + 1}
            />
          )
        }
      })}
    </div>
  )
}

export default BeerList
