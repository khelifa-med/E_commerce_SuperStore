import React, { useEffect, useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './Components/Navbar/Navbar'
import Shop from './Pages/Shop'
import ShopCategory from './Pages/ShopCategory'
import Product from './Pages/Product'
import Cart from './Pages/Cart'
import LoginSignUp from './Pages/LoginSignUp'

import Footer from './Components/Footer/Footer'



import men_banner from './Components/Assets/banner_mens.png'
import women_banner from './Components/Assets/banner_women.png'
import kids_banner from './Components/Assets/banner_kids.png'
import About from './Pages/more info/AboutUs/About'
import Contact from './Pages/more info/Contact/Contact'
import { Privacy } from './Pages/Privacy'
function App() {

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (scrollY > 300) {
        setshowScrollButton(true)
      } else {
        setshowScrollButton(false)
      }
    })
  }, [])

  const [showScrollButton, setshowScrollButton] = useState(false)


  return (
    <div id='up' className='container'>

      <Navbar />

      <Routes>
        <Route path='/' element={<Shop />} />
        <Route path='/men' element={<ShopCategory banner={men_banner} category_item='men' />} />
        <Route path='/Women' element={<ShopCategory banner={women_banner} category_item='women' />} />
        <Route path='/Kids' element={<ShopCategory banner={kids_banner} category_item='kid' />} />

        <Route path='/product' element={<Product />} >
          <Route path=':productId' element={<Product />} />
        </Route>

        <Route path='/cart' element={<Cart />} />
        <Route path='/login' element={<LoginSignUp />} />

        <Route path='/privacy' element={<Privacy/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/contact' element={<Contact/>} />
      </Routes>

      <a href="#up" style={{ opacity: showScrollButton ? 1 : 0, transition: '1s' }}>
        <button className="icon-keyboard_arrow_up scrollToTop"></button>
      </a>


      <Footer />






      <div className="copyright  flex"

        style=
        {
          {
            fontFamily: 'Arial, Helvetica, sans-serif',
            margin: '1.5rem 0',
            fontSize: '0.8rem',
            justifyContent: 'center',
            opacity: 0.7
          }
        }

      >
        Copyright @ 2024 - All Rights Reserved
      </div>
    </div>
  )
}

export default App
