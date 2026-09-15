import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import survice, { Survice } from './Config'
import { useSelector } from 'react-redux'
import authentication from './Auth'
import Container from './Container'
import Button from './Button'
import parse from 'html-react-parser'

function PostFunctions() {
    const {uid,pid}=useParams()
    const [post,setPost]=useState()
    const userData=useSelector((state)=>state.Auth.userData)?.uid
    const isAuthor=uid && userData ? uid===userData : false
    const navigate=useNavigate()
    useEffect(()=>{
      if (pid) {
        survice.getPost(uid, pid).then((post)=>{
          if (post) {
            setPost(post)
          }else{
            navigate('/')
          }
        })
      }else{
        navigate('/')
      }
    },[uid,pid,navigate])
    const deletePost=()=>{
      survice.deletePost(post.uid,post.id).then((response)=>{
        if (response) {
        navigate('/')
        }
      })
    }
  return post?(
    <div>
      <Container className=''>
        <div className='font-serif font-medium text-justify text-2xl md:w-4/5 mx-auto'>
          {post.title}
        </div>
        {
          isAuthor && (
            <div className='bg-slate-200 rounded-lg flex justify-center gap-3 py-3 my-6 md:w-4/5 mx-auto'>
              <Link to={`/editPost/${post.uid}/${post.id}`}>
              <Button className='bg-slate-300 lg:hover:bg-slate-400 text-green-900'>
                Edit
              </Button>
              </Link>
              <Button onClick={deletePost} className='bg-slate-300 lg:hover:bg-red-200  text-red-700 hover:text-red-700'>
                Delete
              </Button>
            </div>
          )
        }
        <img src={post.featuredimage} alt={post.title} className='rounded-lg mt-6'/>
        <div className='text-justify my-6 md:w-3/5 mx-auto'>
          {parse(post.content)}
        </div>
      </Container>
    </div>
  ):null
}

export default PostFunctions