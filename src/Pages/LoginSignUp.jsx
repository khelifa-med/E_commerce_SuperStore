import React from 'react'
import './Css/loginSignUp.css'

import Lottie from "lottie-react";

import signUp from '../../public/animation/signUp.json'
export default function LoginSignUp() {
  return (
    <div className='continaire flex '>
      <form action="" className='flex'>
        <h1>Sign Up</h1>

        <div className="inputs flex ">
          <input type="text" placeholder='Enter the UserName' />
          <input type="email" placeholder='Enter the email' />
          <input type="password" placeholder='Enter the password' />
        </div>

        <div className="actions flex">

          <button>Continue</button>

          <p>allready have an account? <span>Login here</span></p>

          <div className="agree flex" style={{ justifyContent: "center", gap: '4px', alignItems: 'center', marginBottom: '0.5rem' }}>
            <input type="checkbox" />
            <p>
              agree to the terms of use and privicy policy
            </p>
          </div>
        </div>

      </form>


      <div className="animatin_login ">
        <Lottie
          animationData={signUp}
          style={{
            height: 300
          }} />
      </div>
    </div>
  )
}
