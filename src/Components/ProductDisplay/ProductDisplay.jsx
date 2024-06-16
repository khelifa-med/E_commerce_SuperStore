
import React, { useEffect } from 'react'

import star_icon from '../Assets/star_icon.png'
import star_dull_icon from '../Assets/star_dull_icon.png'

import './producyDisplay.css'
import { useDispatch } from 'react-redux'
import { addToCart } from '../../rtk/slices/CartSlice'

export default function ProductDisplay(props) {

    let dispatch = useDispatch()
    const { product } = props


    return (
        <div className='productDispaly flex '>


            <div className="productDisplay_lift flex ">
                <div className="imageDiplay_list  flex">
                    <img src={product.image} alt="" />
                    <img src={product.image} alt="" />
                    <img src={product.image} alt="" />
                    <img src={product.image} alt="" />
                </div>

                <div className="imageDisplay flex ">
                    <img src={product.image} alt="" />
                </div>
            </div>



            <div className="productDispaly_right flex ">
                <h1>
                    {product.name}
                </h1>

                <div className="productDisplay_rate flex">
                    <img src={star_icon} alt="" />
                    <img src={star_icon} alt="" />
                    <img src={star_icon} alt="" />
                    <img src={star_icon} alt="" />
                    <img src={star_dull_icon} alt="" />
                    <p> (100)</p>

                </div>



                <div className="productDislayRight_Pices flex">
                    <div className="oldPrice">Old Price {product.old_price}$</div>
                    <div className="newPrice">New Price {product.new_price}$</div>
                </div>

                <div className="discription">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Deserunt soluta, inventore quo ab est aut ex quisquam,
                    dignissimos qui exercitationem ipsam quibusdam dolore nam pariatur, fugiat nesciunt. Eum, ut ipsa?
                </div>

                <div className="size_continair flex">
                    <h1>Select Size</h1>


                    <div className="size flex">
                        <div>S</div>
                        <div>M</div>
                        <div>L</div>
                        <div>XL</div>
                        <div>XXL</div>
                    </div>


                </div>

                <button

                    onClick={() => { dispatch(addToCart(product)) }}

                    className='action border'>Add To Cart</button>
            </div>
        </div>
    )
}
