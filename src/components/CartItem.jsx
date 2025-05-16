import React from 'react'

function CartItem(props) {
const {cartItem: {id,title,price,quantity}}=props

  return (
    <div className='flex justify-between px-1.5'>
      <p>{title.split(" ")[0]}</p>
      <div className='flex gap-1'>
        <button className="btn btn-square h-5 w-5">-</button>
        <p>{quantity}</p>
        <button className="btn btn-square h-5 w-5">+</button>
      </div>
      <p>{quantity}</p>
    </div>
  )
}

export default CartItem