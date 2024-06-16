


import React from 'react'
import './payment.css'


export default function Payment() {

    return (
        <div className="Funale_Stape  flex">
            <div className="Total flex ">

                <div className="code_promo flex">
                    <h1 style={{marginLeft:'45px',fontFamily:'arial'}}>Promo code</h1>
                    <input type="number" placeholder='Promo Code' />
                    <button>
                        Enter
                    </button>

                </div>

                <div className="finalPrice  flex">
                    <h3>The final price</h3>
                    <h4>$ 100</h4>
                </div>

            </div>

            <div className="payment-container ">
                <form className="payment-form ">
                    <h2 className="payment-title">Payment Form</h2>
                    <div className="form-group">
                        <label htmlFor="cardNumber">Card Number</label>
                        <input type="text" id="cardNumber" placeholder="1234 5678 9012 3456" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="expiryDate">Expiry Date</label>
                        <input type="text" id="expiryDate" placeholder="MM/YY" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="cvc">CVC</label>
                        <input type="text" id="cvc" placeholder="123" />
                    </div>
                    <button type="submit" className="submit-button ">Pay</button>
                </form>
            </div>
        </div>
    )
}
