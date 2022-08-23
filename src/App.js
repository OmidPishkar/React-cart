import React from 'react'

// components
import Navbar from './layout/Navbar'
import Main from './layout/Main'

const App = () => {
    return (
        <div className='min-h-screen bg-white dark:bg-gray-900 px-2 transition-all'>
            <div className='container mx-auto'>
                <Navbar/>
                <Main/>
            </div>
        </div>
    )
}

export default App