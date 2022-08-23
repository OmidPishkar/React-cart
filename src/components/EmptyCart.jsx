import React from 'react'
import empty from '../assets/empty-cart.svg'

const EmptyCart = () => {
    return (
        <div className='flex flex-col items-center gap-4'>
            <img src={empty} alt='empty'/>
            <p className='dark:text-gray-500'>Your Cart is Empty!</p>
        </div>
    )
}

export default EmptyCart