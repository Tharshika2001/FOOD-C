 import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import { Header } from './Components/Header'
import { Home } from './Components/Home'
import { ViewCart } from './Components/ViewCart'
import { About } from './Components/About'
import { useState,createContext} from 'react'

export const CartContext=createContext();

function App() {
  const[cart,setCart]=useState([])
  return (
    <CartContext.Provider value={{cart,setCart}}>
      <BrowserRouter>
        <Header cart={cart} />
        <div className='container'>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/Cart' element={<ViewCart  />} />
            <Route path='/about' element={<About />} />
          </Routes>
        </div>
       </BrowserRouter>
    </CartContext.Provider>
  )
}

export default App
