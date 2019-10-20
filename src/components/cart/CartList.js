import React from 'react'
import CartItem from './CartItem'

export default function CartList({ value }) {
    console.log(value)
    const { cart } = value
    console.log(`Cart Values ${cart}`)
    return (

        <div className="container-fluid">
            {
                cart.map((cat) => {
                    return <CartItem key={cat.id} cat={cat} value={value} />
                })
            }

        </div>
    )
}
