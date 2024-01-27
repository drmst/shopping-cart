
import { useState } from 'react'
import './App.css'
import Card from './components/Card'
import Header from './components/Header'
import Products from './components/Products'

function App() {

const [cart, setCart]=useState([]);
const emptyCart=()=>{
  setCart([])
}
  return (

    <div className="container mx-auto p-4">
      <Header cart={cart}/>
      <Products cart={cart} setCart={setCart}/>
      <Card cart={cart} emptyCart={emptyCart}/>
    </div>


  )
}

export default App
