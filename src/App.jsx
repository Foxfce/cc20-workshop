import { useState } from 'react'
import Header from './components/Header'
import ProductList from './components/ProductLIst'
import CartSummary from './components/CartSummary'



function App() {
const [products,setProducts]=useState([])
  const [carts,setCarts]=useState([]);

  return (
    <div className='flex flex-col h-screen'>
      <div>
        <Header itemCount={carts.length} />
      </div>
      <div className='flex grow-1'>
        <div className='flex grow-3'>
          <ProductList products={products} />
        </div>
        <div className='flex grow-1'>
            <CartSummary carts={carts} />
        </div>
      </div>
    </div>
  )
}

export default App
