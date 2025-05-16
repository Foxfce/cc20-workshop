import React from 'react'
import CartItem from './CartItem'

function CartSummary(props) {
  const { carts } = props

  return (
    <div className='w-1/1 bg-green-300'>
      <h2>Cart Items</h2>
      <div className='flex flex-col gap-2 p-2'>
        {carts.map(el=> <CartItem key={el.id} cartItem={el} />)}
      </div>
      {/* <pre className='text-wrap'>{JSON.stringify(carts,null,2)}</pre> */}
      </div>
      )
}

      export default CartSummary