import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <div className='bg-white md:flex md:h-32 h-52 md:w-11/12 md:mx-auto justify-between'>
      <div className=' md:my-auto grid place-items-center h-3/5'>
        <div className='md:mr-auto mt-auto md:my-auto font-serif font-medium text-green-900 text-2xl'>
          MindScroll
        </div>
        <div className=' '>
          &copy; 2025 MindScroll Precision. All Rights Reserved.
        </div>
      </div>
      <div className='h-2/5 flex md:my-auto w-56 justify-between mx-auto md:mx-0 md:items-center'>
        <Link to='/'>
          About
        </Link>
        <Link to='/'>
          Contact
        </Link>
        <Link to='/'>
          Privacy Policy
        </Link>
      </div>
    </div>
  )
}

export default Footer