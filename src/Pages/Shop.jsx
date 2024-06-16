import React from 'react'
import { Hero } from '../Components/Hero/Hero'
import { Product_Item } from '../Components/Item/Product_Item'
import './shop.css'
import Offers from '../Components/Offers/Offers'
import Message from '../Components/Message/Message'

export default function Shop() {
  return (
    <div>

      <Hero />
      <div className="divider" />
      <div className="collections   flex">
        <h1 >New Collections</h1>
      </div>
      <Product_Item />
      <div className="divider" />
      <Offers />

      <Message />


      
    </div>
  )
}
