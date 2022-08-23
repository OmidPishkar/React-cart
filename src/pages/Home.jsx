import React , { useEffect, useState } from 'react'

import Products from '../components/Product'
import SkeletonProducts from '../components/SkeletonProducts'
import Data from '../data'
import generateId from '../services/generateId'

const Home = ({handleClickCallback}) => {
    const [ data , setData ] = useState(null)

    useEffect( () => {
        setTimeout( () => {
            setData(Data)
        } , 500)
    } , [])

    const resultData = data ? data.map( (item) => {
        return (
            <Products
                handleClickCallback={handleClickCallback}
                data={item}
                key={generateId()}
            />
        )
    }) : (
        <>
        <SkeletonProducts/>
        <SkeletonProducts/>
        <SkeletonProducts/>
        <SkeletonProducts/>
        <SkeletonProducts/>
        <SkeletonProducts/>
        <SkeletonProducts/>
        </>
    )


    return (
        <div className='py-8 flex flex-wrap gap-4 items-center justify-center'>
            {resultData}
        </div>
    )
}

export default Home