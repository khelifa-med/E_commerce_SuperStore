

import React from 'react'
import './rlatedProducts.css'
import data_product from '../Assets/data.js'
import { Link } from 'react-router-dom';
export default function RelatedProducts() {
    
    return (
        <div className='rematedProduct flex'>




            {
                data_product.map((item) => {

                    return <article key={item.id} className="card">

                        <Link to={`/product/${item.id}`}>
                            <img
                            onClick={window.scrollTo(0,0)}
                             src={item.image} alt="nn"
                              style={{ borderRadius: '5px', width: '100%',maxWidth:'250px',maxHeight:'300px' }} />
                        </Link>

                        <div className="box flex  ">
                            <h1 className='title flex '>{item.title}</h1>

                            <div className="proces_info  ">
                                <p className='sub_title  '>{item.name}</p>
                                <p className='price '>Old Price  {item.old_price}</p>
                                <p className='price '>New Price  {item.new_price}</p>
                            </div>
                        </div>

                    </article>
                })
            }
        </div>
    )
}
