import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import Routes from "./Routes/route";
import { Navbar } from './Components/Navbar/nav';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar/>
    <Routes/>
    </>
  )
}

export default App
