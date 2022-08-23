import React , { useState } from 'react'
import {FiShoppingCart} from 'react-icons/fi'
import {BsChevronLeft} from 'react-icons/bs'
import Toastify from './Toastify'

const Product = ({handleClickCallback , data}) => {
    const [showDesc , setShowDesc] = useState(false)
    const [myToast , setMyToast] = useState(false)

    const handleAddToCart = () => {
        handleClickCallback(data)
        setMyToast(<Toastify type='success' message='Added To Your Cart' />)

    }

    return (
        <div className="relative overflow-hidden max-w-xs bg-white h-max rounded-lg border border-gray-200 shadow-md dark:bg-gray-700 dark:border-gray-600">
            {myToast}
            <img className="rounded-t-lg" src={data.image} alt="product"/>
                
            <div className="p-5">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{data.productName}</h5>

                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{data.price}$ USD</p>
                
                <div className='flex w-full items-stretch justify-between'>
                    <button onClick={() => setShowDesc(true)} 
                    className='bg-blue-500 text-white text-base dark:bg-blue-700 px-3 py-1 rounded-md hover:bg-blue-600 dark:hover:bg-blue-800'>
                        Read More
                    </button>
                    
                    <button onClick={() => handleAddToCart()} 
                    className='bg-blue-500 text-white text-xl dark:bg-blue-700 px-3 py-1 rounded-md hover:bg-blue-600 dark:hover:bg-blue-800'>
                        <FiShoppingCart/>
                    </button>
                </div>

                <div className={`${showDesc ? 'left-0' : 'left-[-100%]'} transition-all absolute top-0  w-full h-full`}>
                    <p className='relative w-full overflow-scroll text-center px-5 py-14 text-white dark:text-gray-300 h-full bg-blue-400 dark:bg-blue-500'>
                        <button onClick={() => setShowDesc(false)} 
                        className='top-0 absolute hover:opacity-100 left-0 bg-gray-100 text-blue-400 dark:text-blue-500 text-3xl p-1 rounded-br-md opacity-70'>
                            <BsChevronLeft/>
                        </button>
                        {data.desciption}
                    </p>
                </div>

            </div>
        </div>

    )
}

export default Product