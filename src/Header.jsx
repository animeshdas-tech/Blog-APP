import React from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import Logout from './Logout'
import Button from './Button'


function Header() {
    const authStatus = useSelector((state) => state.Auth.status)
    const userData = useSelector((state) => state.Auth.userData)
    console.log(userData);
    
    const nevigate = useNavigate()
    const nevitems = [
        {
            name: "Home",
            slug: '/',
            active: true
        },
        {
            name: 'Create',
            slug: '/AddPost',
            active: true
        },
        {
            name: 'Posts',
            slug: '/AllPosts',
            active: true
        },
        {
            name: 'Account',
            slug: '/MyAccount',
            active: true
        }
    ]
    return (
        <header className='md:py-2'>
            <nav className='bg-white w-11/12 mx-auto flex justify-between'>
                <div className='flex my-auto md:w-fit'>
                    <div className=''>
                        <img src='/mindScroll.svg' alt="Logo" className="lg:size-16 md:size-12 size-10 pr-1" />
                    </div>
                    <div className='font-serif font-medium text-green-900 lg:text-5xl md:text-4xl border-black border-l-2 pl-1 text-3xl my-auto'>
                        MindScroll
                    </div>
                </div>
                <ul className=''>
                    <div className='absolute justify-between bottom-0 w-full left-0 lg:relative lg:w-fit bg-white lg:bg-transparent h-20'>
                        <div className='flex h-full items-center'>
                            {
                                nevitems.map((item) => (
                                    item.active ? <li key={item.name} className='mx-auto'>
                                        <Button className=' focus:text-green-900' onClick={() => nevigate(item.slug)}>
                                            {item.name}
                                        </Button>
                                    </li> : null
                                ))
                            }
                        </div>
                    </div>
                </ul>
                <div className='my-auto h-20 md:h-fit'>
                    {
                        authStatus ? <div className='h-full flex items-center'>
                            <div className='md:inline font-serif text-green-900 hidden font-bold'>
                                Wellcome, {userData?.displayName}
                            </div>
                               {
                                    userData.photoURL ? <img src={userData.photoURL} alt="Profile Picture" className='md:inline hidden md:size-16 rounded-full mx-2 object-cover' />  
                                    : <div className='md:inline-flex items-center justify-center hidden font-serif font-medium text-green-100 text-5xl size-16 rounded-full bg-green-900 mx-2'>
                                        {userData.displayName.charAt(0)}
                                    </div>
                                } 
                            <Logout />
                        </div> : <div className='h-full'>
                            <div className='md:inline font-serif text-green-900 hidden font-bold mr-2'>
                                Wellcome to MindScroll
                            </div>
                            <Button className='bg-green-700 md:hover:bg-green-700 text-green-100 border-4 md:rounded-lg rounded-3xl border-white md:border-none' onClick={() => nevigate('/Login')}>
                                Login
                            </Button>
                        </div>
                    }
                </div>
            </nav>
        </header>
    )
}

export default Header