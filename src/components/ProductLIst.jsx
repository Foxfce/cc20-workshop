import React, { useState } from 'react'
import ProductCard from './ProductCard'

function ProductLIst(props) {
  const {products,addToCart}=props

  return (
    <div className='w-1/1 bg-blue-300 p-2'>
      <h2 className='rounded py-2 text-2xl'>ProductLIst</h2>
        <div className="divider m-1 mt-0"></div>
      <div className='flex flex-wrap gap-4 justify-start '>
        {products.map(el=>(
          <ProductCard key={el.id} productItem={el} addToCart={addToCart} />
        ))}
      </div>
      <pre className='text-wrap'>{JSON.stringify(products,null,2)}</pre>
    </div>
  )
}

export default ProductLIst