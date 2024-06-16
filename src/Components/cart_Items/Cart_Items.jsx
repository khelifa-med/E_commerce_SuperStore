import React from 'react'
import './cart_Items.css'
import { useDispatch, useSelector } from 'react-redux'
import { clearFromCart, deleteFromCart } from '../../rtk/slices/CartSlice'

export default function Cart_Items() {
    const dispatch = useDispatch()
    const cart = useSelector((state) => state.cart)


    const totolPrice = cart.reduce((acc, product) => {
        acc += product.new_price * product.quantity
        return acc
    }, 0)


    return (


        <div className="cart-container">
            <button
                className='deleteall'
                onClick={() => { dispatch(clearFromCart()) }}

                style={{ backgroundColor: 'red', color: 'white' }}
            >Delete All</button>


            <h2 className="cart-title">Shopping Cart</h2>
            <table className="cart-table">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>name</th>
                        <th>image</th>
                        <th>price</th>
                        <th>quantity</th>
                        <th>actions</th>

                    </tr>
                </thead>
                <tbody>

                    {cart.map((product) => {

                        return <tr key={product.id}>
                            <td> {product.id}</td>
                            <td>{product.name}</td>
                            <td><img src={product.image} alt={product.name} style={{ width: '100px', height: "100px" }} /></td>
                            <td>{product.new_price}$</td>
                            <td>{product.quantity}</td>
                            <td className='ProsuctAction '>


                                <button
                                    onClick={() => { dispatch(deleteFromCart(product)) }}
                                    style={{ marginRight: '3px', backgroundColor: 'red', color: 'white' }}>
                                    delete
                                </button>

                                <button style={{ backgroundColor: '#03AED2', color: 'white' }}>view</button>



                            </td>
                        </tr>
                    })}
                </tbody>

            </table>


            <div className="TotalePrice  flex">
                <h3>The Total price</h3>
                <h4>$ {totolPrice.toFixed(2)}</h4>
            </div>
        </div>
    )
}
