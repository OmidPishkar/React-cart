import React from 'react'
import {ToastContainer , toast} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const Toastify = ({type , message}) => {
    toast[type](message , {
        position: "top-right",
        autoClose: 2500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
    })
    
    return (
        <ToastContainer
            position="top-right"
            autoClose ={2500}
            hideProgressBar={false}
            newestOnTop={true}
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
        />
    )
}

export default Toastify