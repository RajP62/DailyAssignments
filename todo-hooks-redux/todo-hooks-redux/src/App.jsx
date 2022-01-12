import { useState } from 'react'
import './App.css'
import {Route, Routes} from "react-router-dom"
import Home from './Components/Home/Home'
import EditToDo from './Components/EditTodo/EditToDo'

function App() {

  return (
    <div className="App">
      <Routes>
        <Route path="/home" element={<Home/>}>  </Route>
        <Route path="/todo/:id" element={<EditToDo/>}></Route>
      </Routes>
    </div>
  )
}

export default App
