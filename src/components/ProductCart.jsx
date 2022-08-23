import React from 'react'
import { BsPlus } from 'react-icons/bs'
import { BiMinus } from 'react-icons/bi'

const ProductCart = ({data , handleRemove , handleChange}) => {
    return (
        <div className="w-full my-3 flex flex-col items-center lg:items-stratch bg-white rounded-lg border shadow-md lg:flex-row dark:border-gray-700 dark:bg-gray-800">
            
            <img alt="cart product" 
            className="object-cover w-full h-96 rounded-none lg:rounded-l-lg md:h-auto md:w-48" 
            src={data.image}/>
            
            <div className="flex flex-col gap-5 justify-between p-4 leading-normal w-full">
                <div className='w-full flex flex-col sm:flex-row items-center justify-between'>
                    
                    <h2 className='font-medium text-xl dark:text-gray-200'>
                        {data.productName}
                    </h2>

                    <button onClick={() => handleRemove(data.id)} 
                    className='bg-blue-500 text-white rounded-md px-3 py-2 hover:bg-blue-600'>
                        Remove
                    </button>

                </div>

                <div className='w-full flex justify-between items-center'>
                    <div className='w-[150px] h-max flex items-center gap-3'>
                        <BiMinus onClick={() => handleChange(data , -1)} 
                        className='cursor-pointer border text-xl rounded-full w-[30px] h-[30px] bg-blue-400 text-white'/>
                        <h4 className='text-2xl dark:text-gray-200'
                        >{data.amount}</h4>
                        <BsPlus onClick={() => handleChange(data , 1)}
                        className='cursor-pointer border text-xl rounded-full w-[30px] h-[30px] bg-blue-400 text-white'/>
                    </div>

                    <p className='dark:text-gray-200'>{data.price}$ USD</p>
                </div>

            </div>
        </div>
    )
}

export default ProductCart