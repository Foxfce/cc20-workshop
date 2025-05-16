import React, { useState } from 'react'

function ProductCard(props) {
const {addToCart,productItem : {id,category,description,image,title,price,rating}}= props
const [showDesc,setShowDesc]=useState(false);

  return (
    <div className="card bg-base-100 w-64 h-fit shadow-sm flex flex-col p-4">
  <figure className='min-h-30 object-fill'>
    <img className='h-30'
      src={image}
      alt={title} />
  </figure>
  <div className="card-body p-2">
    <h2 className="card-title line-clamp-1">{title}</h2>
    <p>{category}</p>
    <p className={`cursor-pointer ${showDesc?'':'line-clamp-2'}`} onClick={()=>setShowDesc(prv=>!prv)}>{description}</p>
    <h2 className="card-title ">{price}</h2>
    <div className="card-actions justify-end">
      <button className="btn">More</button>
      <button className="btn btn-primary bg-red-700 border-red-700 shadow-red-500"
      onClick={()=>addToCart(id,title,price)}>Buy Now</button>
    </div>
  </div>
</div>
  )
}

export default ProductCard