

import React from 'react'
import './footer.css'
import Logo from '../../../public/super_market.png'
import { Link } from 'react-router-dom'
export default function Footer() {
    return (
        <footer className='footer_section  flex'>


            <div className="logo_section  flex">

                <img src={Logo} alt="mm" style={{ width: '50px', height: '50px', borderRadius: '10px' }} />
                <p className='title'>SUPER_MARCKET</p>


            </div>





            <ul className="links_section flex ">
                <li>
                    <Link to={'/privacy'} href="">Privacy Policy</Link>
                </li>

                <li>
                    <Link to={'/about'} href="">About</Link>
                </li>
                <li>
                    <Link to={'/contact'} href="">Contact</Link>
                </li>
            </ul>




            <div className="icons_section flex ">

                <div className='icon-instagram icon'></div>
                <div className='icon-twitter icon'></div>
                <div className='icon-facebook-square icon'></div>

            </div>




        </footer>
    )
}
