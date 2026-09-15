import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import survice from './Config'
import Container from './Container'
import Post from './Post'
import LoginLayout from './LoginLayout'

function AllPosts() {
     const userData=useSelector((state)=>state.Auth.userData)
     const [posts, setPosts]=useState([])
     useEffect(()=>{
        survice.getPosts(userData?.uid).then((posts)=>{
            if (posts) {
                setPosts(posts)
            }
        })
     },[userData])
     
  return userData ? (
    <div className=''>
        <Container>
            <div className='md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-10'>
                {
                    posts.map((post)=>(
                        <div key={post.id}>
                            <Post {...post}/>
                        </div>
                    ))
                }
            </div>
        </Container>
    </div>
  ) : (
    <div>
       <LoginLayout/>
    </div>
  )
}

export default AllPosts