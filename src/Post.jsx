import React from 'react'
import { Link } from 'react-router-dom'
import parse from 'html-react-parser'

function Post({ uid, id, title, featuredimage, content }) {
    return (
        <Link to={`/post/${uid}/${id}`}>
            <div className='my-4 bg-white'>
                <div className=''>
                    <img src={featuredimage} alt={title} className='h-80 object-cover m-auto' />
                </div>
                <div className='w-11/12 mx-auto py-4'>
                    <div className='font-serif font-medium text-justify text-2xl hover:text-green-900 line-clamp-2'>
                        {title}
                    </div>
                    <div className='text-justify line-clamp-3 mt-4'>
                        {parse(content)}
                    </div>
                </div>
            </div>
        </Link>
    )
}

export default Post