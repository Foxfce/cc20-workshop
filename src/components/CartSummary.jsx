import React from 'react'
import CartItem from './CartItem'

function CartSummary(props) {
  const { carts, decQuantity, incQuantity } = props
  let summaryPrice = (carts.reduce((acc,el)=>{
    return acc += acc + (el.quantity*el.price);
  },0)).toFixed(2)

  return (
    <div className='w-1/1 bg-green-300'>
      <h2>Cart Items</h2>
      {carts.length === 0 && <p>Cart are empty</p>}
      <div className='flex flex-col gap-2 p-2'>
        {carts.map(el => <CartItem key={el.id} cartItem={el} decQuantity={decQuantity} incQuantity={incQuantity} />)}
      </div>
      {/* <pre className='text-wrap'>{JSON.stringify(carts,null,2)}</pre> */}
      <div className="divider m-1 mt-0"></div>
      {carts.length === 0 ||
        <div className='flex flex-col'>
          <div className='flex justify-between px-1.5 text-lg'>
            <p>Price</p><p>{summaryPrice+'฿'}</p>
          </div>
          <div className='flex justify-between px-1.5 text-lg'>
            <p>Tax</p><p>{(summaryPrice * 0.07).toFixed(2)+'฿'}</p>
          </div>
          <div className='flex justify-between px-1.5 text-lg'>
            <p>Shipping</p><p>{0+'฿'}</p>
          </div>
          <div className='flex justify-between px-1.5 text-lg font-bold'>
            <p>Total</p><p>{(summaryPrice * 1.07).toFixed(2)+'฿'}</p>
          </div>
        </div>
      }
    </div>
  )
}

export default CartSummary