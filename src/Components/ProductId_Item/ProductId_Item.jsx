import React from 'react'
import './ProductId_Item'
import arrow_icon from '../Assets/breadcrum_arrow.png'

import './ProductId_Item.css'
export default function ProductId_Item(props) {

    const { product } = props
    return (

            <div className='ProductId_Item flex '>
                HOME <img src={arrow_icon} alt="" />
                SHOP <img src={arrow_icon} alt="" />
                {product.category}
                <img src={arrow_icon} alt="" />
                {product.name}
              
            </div>
        
    )
}
