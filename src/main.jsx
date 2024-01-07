import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Header from './pages/header/Header.jsx'
import "./main.css"
import "./responsive.css"
import Footer from './pages/footer/Footer.jsx'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Header/>
    <App />
    <Footer/>
  </React.StrictMode>,
)
