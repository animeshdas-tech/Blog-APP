import React from 'react'
import { useSelector } from 'react-redux'
import Container from './Container'
import { Link } from 'react-router-dom'
import Button from './Button'
import AllPosts from './AllPosts'

function Profile({ displayName, email, photoURL }) {
    return (
        <div className='text-left'>
            <div className=''>
                AUTHOR DOSSIER
            </div>
            <Container className='bg-white rounded-xl p-5 my-6 lg:flex lg:justify-between'>
                <div className='lg:flex lg:gap-5'>
                    <img src={photoURL} alt="No Profile Photo" className='size-20 md:size-32 rounded-lg object-cover' />
                    <div className=''>
                        <div className='font-serif font-medium text-3xl my-2'>
                            {displayName}
                        </div>
                        <div className='my-2'>
                            {email}
                        </div>
                    </div>
                </div>
                <div>
                    <Link to={'/editProfile'}>
                        <Button className='w-full bg-green-900 md:hover:bg-green-900 text-green-100 h-fit lg:w-48'>
                            Edit
                        </Button>
                    </Link>
                </div>
            </Container>
            <div className='bg-green-900 text-green-100 rounded-xl w-fit font-bold p-1 px-3'>
                Overview & Essays
            </div>
            <div className='my-3 lg:flex lg:justify-between'>
                <div className='lg:w-3/5'>
                    <div>
                        <div className='font-serif font-medium text-3xl my-2'>
                            Published Monographs
                        </div>
                        <div>
                            Peer-archived critical works
                        </div>
                    </div>
                    <div>
                        <AllPosts className='lg:grid-cols-2' />
                    </div>
                </div>
                <div className='lg:w-2/6'>
                    <div className='bg-white rounded-xl p-5 my-6'>
                        <div className='font-serif font-medium text-3xl my-2'>
                            Account & Security
                        </div>
                        <div>
                            LINKED INSTITUTIONAL EMAIL
                        </div>
                        <div className='bg-slate-100 p-3 my-2 rounded-lg font-bold'>
                            {email}
                        </div>
                    </div>
                    <div className='bg-white rounded-xl p-5 my-6'>
                        <div className='font-serif font-medium text-3xl my-2'>
                            Dossier Actions
                        </div>
                        <Link to={'/Logout'} className='flex md:hover:bg-red-200  text-red-700 hover:text-red-700 rounded md:py-1 justify-center'>
                            Decommission Session & Sign Out
                        </Link>
                    </div>
                    <div className='rounded-xl p-5 my-3 bg-green-900'>
                        <div className='font-serif font-medium text-2xl text-white my-2 italic'>
                            “To build interfaces that honor contemplative silence is the primary civic duty of modern prose.”
                        </div>
                        <div className='text-green-300 font-bold'>
                            - INK & THOUGHT RULE III
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile