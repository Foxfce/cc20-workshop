import React, { useState } from 'react'
import ProductCard from './ProductCard'

function ProductLIst(props) {
  const {products}=props

  return (
    <div className='w-1/1 bg-blue-300'>
      <h2>ProductLIst</h2>
      <div className='flex flex-wrap gap-4 justify-start '>
      <ProductCard />
      <ProductCard />
      <ProductCard />
      </div>
    </div>
  )
}

export default ProductLIst