import React from 'react'

import hello from '../Assets/hello.jpg'
import { motion } from "framer-motion"

import hero_img from '../Assets/product_28.png'
import './hero.css'
export const Hero = () => {
    return (
        <>

            <section className='main_section   flex '>

                <div className="left_section  flex ">

                    <motion.h1
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 2 }}

                    > Welcome to our shop , we are so happy to have you</motion.h1>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 2 }}
                        className="social_media flex ">

                        <div className='icon-instagram icon'></div>
                        <div className='icon-linkedin-square icon'></div>
                        <div className='icon-facebook-square icon'> </div>

                    </motion.div>

                    <motion.button
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 2 }}

                    >Go to shop</motion.button>


                </div>

                <div className="rigth_section flex " >
                    <motion.img
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 4 }}


                        src={hero_img} alt="nn" />
                </div>


            </section>



        </>
    )
}
