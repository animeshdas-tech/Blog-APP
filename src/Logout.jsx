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
    <Button className=' text-red-700 hover:text-red-700 lg:hover:bg-red-200' onClick={logoutHandeler}>Logout</Button>
  )
}

export default Logout