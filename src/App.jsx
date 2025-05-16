import { useState } from 'react'
import Header from './components/Header'
import ProductList from './components/ProductLIst'
import CartSummary from './components/CartSummary'



function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='flex flex-col h-screen'>
      <div>
        <Header />
      </div>
      <div className='flex grow-1'>
        <div className='flex grow-3'>
          <ProductList />
        </div>
        <div className='flex grow-1'>
            <CartSummary />
        </div>
      </div>
    </div>
  )
}

export default App
