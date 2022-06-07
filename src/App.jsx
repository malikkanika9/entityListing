import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import { Products } from './components/Products'
import { Routes, Route } from "react-router-dom";
import {ProductDetails} from './components/ProductDetails'
import {Home} from './components/Home'
import { NavBar } from './components/NavBar';
function App() {
  

  return (
    <div className="App">
     <NavBar/>
     <Routes>
     <Route path="/home" element={<Home />}></Route>
     <Route path="/products" element={<Products/>}/>
     <Route path='/products/:id' element={<ProductDetails/>}  />

     </Routes>
    </div>
  )
}

export default App
