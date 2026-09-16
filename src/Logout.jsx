import React from 'react'
import { useDispatch } from 'react-redux'
import authentication from './Auth'
import { logout } from './AuthSlice'
import Button from './Button'

function Logout() {
  const dispatch = useDispatch()
   const logoutHandeler=()=>{
        authentication.signout().then(()=>{
            dispatch(logout())
        })}
  return (
    <Button className=' bg-red-700 text-red-100 hover:bg-red-200 hover:text-red-700' onClick={logoutHandeler}>Logout</Button>
  )
}

export default Logout