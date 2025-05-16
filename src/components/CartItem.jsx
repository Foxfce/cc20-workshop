import React from 'react'

function CartItem(props) {
const {cartItem: {id,title,price,quantity},decQuantity,incQuantity}=props

  return (
    <div className='flex justify-between px-1.5'>
      <p>{title.split(" ")[0]}</p>
      <div className='flex gap-1'>
        <button className="btn btn-square h-5 w-5" onClick={()=>decQuantity(id)}>-</button>
        <p>{quantity}</p>
        <button className="btn bdtn-square h-5 w-5" onClick={()=>incQuantity(id)}>+</button>
      </div>
      <p>{(quantity*price).toFixed(2)+'฿'}</p>
    </div>
  )
}

export default CartItem