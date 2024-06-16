import React from 'react'
import Cart_Items from '../Components/cart_Items/Cart_Items'
import Payment from '../Components/codePromo&Payment/payment'

export default function Cart() {
  return (
    <div>
      <Cart_Items/>
      <div className="divider" />
      <Payment/>
    </div>
  )
}
