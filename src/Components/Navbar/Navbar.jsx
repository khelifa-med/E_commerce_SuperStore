
import React, { useState } from 'react'
import './navbar.css'

import Logo from '../../../public/super_market.png'
import cartImage from '../Assets/cart_icon.png'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

export default function Navbar() {
    const [clicked, setclicked] = useState('')

    const [showModal, setshowModal] = useState(false)

    const cart = useSelector((state) => state.cart)


    return (
        <header className='flex' >
            <Link className='logo flex' to={'/'}>
                <img src={Logo} alt="mm" style={{ width: '70px', height: '70px' }} />
                <p className='title'>SUPER_MARCKET</p>
            </Link>

            <nav className='dispalyNav flex '>


                <Link style={{ textDecoration: 'none' }} className='linkk' onClick={() => {
                    setclicked('Shop')
                }} to={'/'}>Shop {clicked === 'Shop' ? <hr /> : <></>}</Link>

                <Link style={{ textDecoration: 'none' }} className='linkk' onClick={() => {
                    setclicked('Men')
                }} to={'/men'}>Men {clicked === 'Men' ? <hr /> : <></>}</Link>

                <Link style={{ textDecoration: 'none' }} className='linkk' onClick={() => {
                    setclicked('Women')
                }} to={'/Women'}>Women {clicked === 'Women' ? <hr /> : <></>} </Link>

                <Link style={{ textDecoration: 'none' }} className='linkk' onClick={() => {
                    setclicked('Kids')
                }} to={'/Kids'}>Kids {clicked === 'Kids' ? <hr /> : <></>}</Link>

            </nav>

            <div className="actions flex">
                <button><Link style={{ textDecoration: 'none' }} to={'/login'}>Login</Link></button>

                <Link className='cartblock flex ' style={{ textDecoration: 'none' }} to={'/Cart'}>
                    <img src={cartImage} alt="nn" style={{ width: '25px', height: '25px', cursor: 'pointer' }} />
                    <div className='counter'>{cart.length}</div>
                </Link>
            </div>


            {/* show modal icon */}
            
            <button className='showButton icon-menu' onClick={() => {setshowModal(true)}}></button>

            {/* Modal */}

            {
                showModal && (
                    <div className="modal ">
                        <nav className='modalNav  flex'>


                            <div className="login_close flex ">
                                <button><Link style={{ textDecoration: 'none' }} to={'/login'}>Login</Link></button>

                                <button className="icon-close" onClick={() => {
                                    setshowModal(false)
                                }}>

                                </button>
                            </div>


                            <Link style={{ textDecoration: 'none' }} onClick={() => {
                                setclicked('Shop')
                            }} to={'/'}>Shop </Link>

                            <Link style={{ textDecoration: 'none' }} onClick={() => {
                                setclicked('Men')
                            }} to={'/men'}>Men </Link>

                            <Link style={{ textDecoration: 'none' }} onClick={() => {
                                setclicked('Women')
                            }} to={'/Women'}>Women  </Link>

                            <Link style={{ textDecoration: 'none' }} onClick={() => {
                                setclicked('Kids')
                            }} to={'/Kids'}>Kids </Link>

                        </nav>
                    </div>
                )

            }



        </header>

    )
}
