import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import Routes from './Routes/routes'
import { Navbar } from './Components/Navbar/nav'

function App() {

  return (
    <>
    <Navbar/>
    <Routes/>
    </>
  )
}

export default App
