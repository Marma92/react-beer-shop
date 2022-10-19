import React from 'react'
import { useLoaderData } from 'react-router-dom'
import DetailedView from '../components/detailedView/DetailedView'
import { getBeer } from '../helpers/beerApi'

export async function loader ({ params }) {
  return getBeer(params.id)
}

export const Product = () => {
  const beer = useLoaderData()
  return (
    <div className="catalog">
      <DetailedView beer={beer}/>
    </div>
  )
}

export default Product
