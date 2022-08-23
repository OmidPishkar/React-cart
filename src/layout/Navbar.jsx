import React, { useState } from 'react'
import {Link} from 'react-router-dom'
import {BsFillMoonStarsFill , BsFillSunFill} from 'react-icons/bs'
import {HiOutlineMenu} from 'react-icons/hi'
import {VscChromeClose} from 'react-icons/vsc'

const links = [
    {title: 'Home' , to: '/'},
    {title: 'Cart' , to: '/cart'}
]


const Navbar = () => {
    const [mode , setMode] = useState(true)
    const [respMenu , setRespMenu] = useState(false)

    const handleSetMode = () => {
        document.body.classList.toggle('dark')
        setMode(!mode)
    }

    const result = links.map( (item , index) => {
        return (
            <li className='px-3 py-2' key={index}>
                <Link to={item.to}>{item.title}</Link>
            </li>
        )
    }) 

    return (
        <header className='flex justify-between items-center py-6 border-b relative'>
            <h1 className='text-xl dark:text-gray-300 font-semibold'>React Store</h1>
            
            
            <ul className='hidden sm:flex gap-10 items-center
            text-gray-900 dark:text-gray-300'>
                {result}
            </ul>

            <div className='flex items-center gap-x-5'>
                <button className='text-yellow-500 text-2xl' 
                onClick={() => handleSetMode()}>{mode ? <BsFillMoonStarsFill/> : <BsFillSunFill/>}</button>


                <button onClick={() => setRespMenu(!respMenu)} 
                className='sm:hidden text-xl dark:text-gray-300'>
                    {respMenu ? <VscChromeClose/> : <HiOutlineMenu/>}
                </button>
            </div>

            <ul className={`${respMenu ? 'flex' : 'hidden'} sm:hidden w-[150px] h-max z-[1000] bg-blue-500 dark:bg-blue-900 absolute right-0 top-16 rounded-md
            flex-col p-5 gap-y-5 text-gray-300`}>
                {result}
            </ul>
        </header>
    )
}

export default Navbar