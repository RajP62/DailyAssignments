import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import {Route, Routes} from 'react-router-dom';
import Allproducts from './components/Allproducts';
import Product from "./components/product";
import Home from "./components/Home";

function App() {

  return (
    <Routes>
      <Route path="/allProducts" element={<Allproducts/>}></Route>
      <Route path="/product/:id" element={<Product/>}></Route>
      <Route path="/Home" element={<Home/>}></Route>
      <Route path="*" element={<><h1 style={{color: 'blue', fontWeight: 'bold', textAlign: 'center'}}>Unauthorised access</h1></>}></Route>

    </Routes>
  )
}

export default App
