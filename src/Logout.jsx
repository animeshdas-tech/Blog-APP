import React from 'react'
import { useDispatch } from 'react-redux'
import authentication from './Auth'
import { logout } from './AuthSlice'
import Button from './Button'
import { useNavigate } from 'react-router-dom'

function Logout() {
  const dispatch = useDispatch()
  const navigate=useNavigate()
  authentication.signout().then(()=>{
            dispatch(logout())
            navigate('/')
          })
  return (
    <></>
  )
}

export default Logout