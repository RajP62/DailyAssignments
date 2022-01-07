import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import {BrowserRouter} from 'react-router-dom';
import {AuthContextProvider} from "./Contexts/AuthContext";
import {TokenContextProvider} from "./Contexts/TokenContext";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <TokenContextProvider>
    <AuthContextProvider>
    <App/>
    </AuthContextProvider>
    </TokenContextProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
)
