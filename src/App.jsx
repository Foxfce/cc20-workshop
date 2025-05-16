import { useState, useEffect } from 'react'
import Header from './components/Header'
import ProductList from './components/ProductLIst'
import CartSummary from './components/CartSummary'



function App() {
  const [products, setProducts] = useState([]);
  const [carts, setCarts] = useState([]);

  // cart = {id,price,title,quantity};

  const fetchProducts = () => {
    fetch('http://localhost:8000/products')
      .then(resp => resp.json())
      .then(data => setProducts(data))
  }

  useEffect(() => {
    fetchProducts()
  }, [])

  const addToCart = (id, title, price) => {
    let newItem = { id: id, title: title, price: price, quantity: 1 }
    if(carts.some((el) => newItem.id === el.id)){
      const clonedCart = [...carts];
    clonedCart[carts.findIndex(el=>el.id===id)].quantity +=1
    setCarts(clonedCart);
    }
    else{
    setCarts([...carts,newItem]);
    }
  }

  return (
    <div className='flex flex-col h-screen'>
      <div>
        <Header itemCount={carts.length} />
      </div>
      <div className='flex grow-1'>
        <div className='flex grow-1 max-w-4/5'>
          <ProductList products={products} addToCart={addToCart} />
        </div>
        <div className='flex grow-1 min-w-60'>
          <CartSummary carts={carts} />
        </div>
      </div>
    </div>
  )
}

export default App
