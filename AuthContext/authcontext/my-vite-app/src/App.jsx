import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import Nav from "./components/navbar"
import Form from "./components/form"
import LoginStatus from "./components/loginStatus"

function App() {

  return (
    <>
    <Nav/>
    <Form/>
    <LoginStatus/>
    </>
  )
}

export default App
