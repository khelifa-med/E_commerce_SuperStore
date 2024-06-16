
import React from 'react'
import './offers.css'
import exclusive_collections from '../Assets/exclusive_image.png'
export default function Offers() {
    return (
        <section className='main_offers flex  '>

            <div className="left_offers  flex ">

                
                    <h1 >Exclusive Offers For the best sillers</h1>
                    <p>Here we have the best for you you can chose whatever you want and we will baring it you </p>
                    <div className="actions flex ">
                        <button>Go to shop</button>
                    </div>
                    

            </div>

            <div className="rigth_offers flex " >
                <img src={exclusive_collections} alt="nn" />
            </div>

        </section>
    )
}
