import React , { useEffect, useState } from 'react'
import EmptyCart from '../components/EmptyCart'
import ProductCart from '../components/ProductCart'


const Cart = ({cart , setCart , handleChange}) => {
    const [price , setPrice] = useState(0)
    

    const handleRemove = id => {
        const aar = cart.filter( (item) => item.id !== id)
        setCart(aar)
        handlePrice()
    }

    const handlePrice = () => {
        let ans = 0
        cart.map(item => (ans += item.amount * item.price))
        setPrice(ans)
    }

    useEffect(() => {
        handlePrice()
    })



    const result = (
        cart.length ? 
        <div className='w-full flex flex-col-reverse sm:flex-row'>
            
            <div className='w-full sm:w-2/3 p-2'>
                {cart.map( (item) => {
                    return (
                        <ProductCart
                            handleChange={handleChange}
                            handleRemove={handleRemove}
                            data={item}
                            key={item.id}
                        />
                    )
                })}
            </div>
            
            <div className='w-full flex  items-center  py-16  gap-4 flex-col sm:w-1/3'>
                <span className='dark:text-gray-300'>Total Price of your Cart</span>
                <span className='dark:text-gray-300 text-2xl'>{price}$ USD</span>
                <button className='bg-blue-500 text-white px-4 py-2 rounded-md text-xl'>Check Out!</button>
            </div>
        </div> : 
        <EmptyCart/>
    )

    
    return (
        <>
            {result}
        </>
    )
}

export default Cart