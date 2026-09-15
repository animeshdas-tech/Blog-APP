import { useEffect, useState } from 'react'
import {useSelector} from 'react-redux'
import survice from './Config'
import Container from './Container'
import Post from './Post'

function Home() {
  const authStatus=useSelector((state)=>state.Auth.status)
  const [Allposts,setAllPosts]=useState([])
  useEffect(()=>{
    survice.getAllPosts().then((posts)=>{
      if (posts) {
        const arr=[]
        posts.map((post)=>{
          Object.values(post.posts).forEach((value)=>{
            arr.push(value)           
          })
        })
        setAllPosts(arr)
      }
    })
  },[])
  return (
    <div>
      <Container>
        <div className='font-serif font-medium text-3xl text-left mt-2'>
          Editor's Picks
        </div>
        <div className='md:hidden text-left mt-2'>
          Curated thoughts for the focused mind.
        </div>
        <div className='hidden md:block text-left mt-2'>
          A curated selection of our finest long-form essays & deep dives for your focused reading time.
        </div>
        <div className='md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-10'>
          {
            Allposts.map((post)=>(
              <div key={post.id}>
                <Post {...post}/>
              </div>
            ))
          }
        </div>
      </Container>
    </div>
  )
}

export default Home