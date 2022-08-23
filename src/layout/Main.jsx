import React, { useState } from 'react'

import { Routes , Route } from 'react-router-dom'

import Home from '../pages/Home'
import Cart from '../pages/Cart'

const Main = () => {
    const [cart , setCart] = useState([])


    const handleClickCallback = item => {
        if(cart.indexOf(item) !== -1) return;
        setCart([...cart , item])
    }

    const handleChange = (data , d) => {
        const ind = cart.indexOf(data)
        const arr = cart
        arr[ind].amount = Number(arr[ind].amount) + d

        if(arr[ind].amount === 0) {
            arr[ind].amount = 1
        }
        else {
            setCart([...arr])
        }
    }

    return (
        <>
            <Routes>
                <Route path='/' element={
                    <Home handleClickCallback={handleClickCallback}/>
                }/>
                <Route path='/cart' element={
                    <Cart 
                    cart={cart}
                    setCart={setCart}
                    handleChange={handleChange}
                    />
                }/>
            </Routes>
        </>
    )
}

export default Main