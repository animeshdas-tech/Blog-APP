import React from 'react'
import Button from './Button'
import { useNavigate } from 'react-router-dom'

function LoginLayout() {
    const nevigate=useNavigate()
  return (
    <div className='h-screen'>
        <div className='h-2/5'>
            <div className='font-serif font-medium text-3xl pt-14'>
                Wellcome to MindScroll
            </div>
            <div className='md:hidden py-5'>
                A sanctuary for focused reading & intellectual exploration. Access is reserved for our community of thinkers
            </div>
            <div className='hidden md:block py-5'>
                Discover in-depth analyses, thoughtful essays & professional perspectives. Please login to unlock our full archive of editorial content.
            </div>
            <div className=''>
                <Button className='bg-green-700 md:hover:bg-green-700 text-green-100 h-fit ' onClick={()=>nevigate('/Login')}>
                    LOGIN TO ACCESS
                </Button>
            </div>
            <div className='flex justify-center items-center h-fit md:hidden'>
                Don't have an account?
                <div className=''>
                    <Button className='' onClick={()=>nevigate('/Signup')}>
                        Signup
                    </Button>
                </div>
            </div>
        </div>
        <div className='h-3/5 grid place-items-center '>
            <div className='h-80 w-4/5 md:w-1/2 bg-white place-items-center rounded-lg grid md:h-44'>
                <div className='m-auto '>
                    <img src="lock-icon.svg" alt="lock" className='size-16 bg-slate-100 rounded-lg'/>
                </div>
                <div className='font-serif font-medium text-3xl'>
                    Exclusive Content
                </div>
                <div className='md:hidden'>
                    Unlock a library of profound essays, deep-dives & cultural critique.
                </div>
                <div className='hidden md:block'>
                    Join our community of readers to access full articles.
                </div>
                <div className=''>
                    <Button className='bg-green-700 md:hover:bg-green-700 text-green-100 h-fit md:hidden' onClick={()=>nevigate('/Login')}>
                        LOGIN TO UNLOCK
                    </Button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default LoginLayout