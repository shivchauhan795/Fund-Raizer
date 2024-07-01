import React from 'react'

const Footer = () => {
    const currentyear = new Date().getFullYear()
    return (
        <div className='flex justify-center items-center bg-gray-950 text-white p-4'>
            Copyright &copy; {currentyear}. All Rights Reserved.
        </div>
    )
}

export default Footer
