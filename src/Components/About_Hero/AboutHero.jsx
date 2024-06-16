
import React from 'react'

import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';



import './aboutHero.css'

export default function AboutHero({p13_img,p12_img,p26_img}) {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex) => {
      setIndex(selectedIndex);
    };
    return (
        <Carousel  activeIndex={index} onSelect={handleSelect}>
            <Carousel.Item className='item'>
                <img
                    className="d-block w-100"
                    src={p26_img}
                    alt="First slide"
                />

                <Carousel.Caption>
                    <h3>First slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item className='item'>
                <img
                    className="d-block w-100"
                    src={p12_img}
                    alt="Second slide"
                />

                <Carousel.Caption>
                    <h3>Second slide label</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item className='item'>
                <img
                    className="d-block w-100"
                    src={p13_img}
                    alt="Third slide"
                />

                <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p>
                        Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                    </p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    )
}
