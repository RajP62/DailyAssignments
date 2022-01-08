import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import {store} from "./Redux/store";
import {AppContextProvider} from "./Redux/AppContextProvider";
import {BrowserRouter} from "react-router-dom"

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <AppContextProvider store={store}>
    <App />
    </AppContextProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
)
