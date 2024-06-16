

import React from 'react'
import { useState } from 'react'
import './item.css'
import new_collections from '../Assets/new_collections'
import { motion, AnimatePresence } from "framer-motion";

export const Product_Item = () => {
    const [active, setactive] = useState('all')
    const [category, setcategory] = useState(new_collections)
    return (
        <main className="main flex ">

            <section className="left_section flex  ">
                <button onClick={() => {
                    setactive('all')
                    setcategory(new_collections)
                }
                } className={active === 'all' ? 'active' : null}>All Collections</button>
                {/*  */}
                <button onClick={() => {
                    setactive('Men')

                    const new_arr = new_collections.filter((item) => {
                        return item.title === "Men clothes"
                    })

                    setcategory(new_arr)
                }
                } className={active === 'Men' ? 'active' : null}>Men</button>
                {/*  */}
                <button onClick={() => {
                    setactive('Women')

                    const new_arr = new_collections.filter((item) => {
                        return item.title === "Women clothes"
                    })

                    setcategory(new_arr)
                }
                } className={active === 'Women' ? 'active' : null}>Women</button>
                {/*  */}
                <button onClick={() => {
                    setactive('Kids')

                    const new_arr = new_collections.filter((item) => {
                        return item.title === "Kids clothes"
                    })

                    setcategory(new_arr)
                }
                } className={active === 'Kids' ? 'active' : null}>Kids</button>

            </section>



            <section className='right_section  flex  ' >

                <AnimatePresence>

                    {
                        category.map((item) => {
                            return <motion.article
                                layout
                                initial={{ transform: "scale(0.4)" }}
                                animate={{ transform: "scale(1)" }}
                                transition={{ type: "spring", damping: 8, stiffness: 50 }}

                                key={item.id} className="card ">

                                <img src={item.image} alt="nn" />

                                <div className="box flex  ">
                                    <h1 className='title flex '>{item.title}</h1>

                                    <div className="proces_info  ">
                                        <p className='sub_title  '>{item.name}</p>
                                        <p className='price '>Old Price  {item.old_price}</p>
                                        <p className='price '>New Price  {item.new_price}</p>
                                    </div>

                                    <div className="action flex ">
                                        <a href="#">Detaills</a>
                                    </div>
                                </div>
                            </motion.article>
                        })
                    }

                </AnimatePresence>

            </section>

        </main>
    )
}
