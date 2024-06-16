

import React from 'react'
import './message.css'
import Footer from '../Footer/Footer'
import { useRef } from 'react';

import Lottie from "lottie-react";

import message from '../../../public/animation/message_2.json'
export default function Message() {
    let lottieRef = useRef();
    return (
        

            <section className='message_section flex '>
                <div className="left_part  flex border ">
                    <h1 className='title '>
                        Get Exclusive Effers On Your Email
                    </h1>

                    <p className='subTitle'>
                        subscribe with us for new collections
                    </p>

                    <div className="icon-verified flex">
                        For You
                    </div>

                    <div className="action flex">
                        <input type="email" placeholder='Your email id' />

                        <button>
                            Subscribe
                        </button>
                    </div>
                </div>



                <div className="animation   flex" >

                    <Lottie
                        animationData={message}
                        lottieRef={lottieRef}
                        onLoadedImages={() => {
                            lottieRef.current.setSpeed(0.5);

                        }}

                        style={{
                            height: 355
                        }} />
                </div>

            </section>

           

            
       
    )
}
