import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import Container from './Container'
import Profile from './Profile'
import authentication from "./Auth";
import LoginLayout from './LoginLayout';

function MyAccount() {
  const [userData, setUserData] = useState()
  useEffect(() => {
    authentication.getUser().then((data)=>{
      setUserData(data)
    })
  }, [])
  return userData ? (
    <div className=''>
       <Container>
        <div>
          <Profile {...userData}/>
        </div>
       </Container>
    </div>
  ) : (
    <div>
      <LoginLayout/>
    </div>
  )
}

export default MyAccount