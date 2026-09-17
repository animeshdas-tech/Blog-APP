import React, { useState } from 'react'
import { useForm } from "react-hook-form"
import { useDispatch } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import authentication from './Auth'
import { login } from './AuthSlice'
import Input from './Input'
import Button from './Button'

function Signup() {
  const [error, seterror] = useState("")
  const nevigate = useNavigate()
  const dispatch = useDispatch()
  const { register, handleSubmit } = useForm()
  const signup = async (data) => {
    seterror("")
    try {
      const sesson = await authentication.createAccount(data)
      if (sesson) {
        const dbProfile = await authentication.setProfile({ ...data })
        const userData = await authentication.getUser()
        if (userData && dbProfile) {
          dispatch(login(userData))
          nevigate('/')
        }
      }
    } catch (error) {
      seterror(error.message)
    }
  }
  return (
    <div className=''>
      <div className='text-left text-green-900 font-bold mt-5'>
        Membership Dossier
      </div>
      <div className='text-left text-3xl font-serif font-bold'>
        Join the Republic of Letters
      </div>
      {
        error && <p>{error}</p>
      }
      <div className=''>
        <form onSubmit={handleSubmit(signup)} className='bg-white rounded-xl my-5'>
        <div className='p-4'>
          <div className='text-left text-xl font-serif font-bold'>
            MindScroll
          </div>
          <div className='text-left text-3xl font-serif font-bold my-4'>
            Begin your intellectual journey.
          </div>
          <div className='text-left my-4'>
            Read, write, and engage with rigorous essays, architectural critiques, and deliberate cultural commentary.
          </div>
          <div className='my-4'>
            <div className='text-left font-bold'>
              Fullname
            </div>
            <Input
              placeHolder='Name Surname'
              {...register("userName", { required: true })}
            />
          </div>
          <div className='my-4'>
            <div className='text-left font-bold'>
              Email Address
            </div>
            <Input
              type='email'
              placeHolder='you@domain.com'
              {...register("email", { required: true, validate: { matchpatern: (value) => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) || "Email address must be a valid adderss" } })}
            />
          </div>
          <div className='my-4'>
            <div className='flex justify-between'>
              <div className='text-left font-bold'>
                Password
              </div>
              <div className='text-slate-500'>
                Min. 6 characters
              </div>
            </div>
            <Input
              type='password'
              placeHolder='Create password'
              {...register("password", { required: true })}
            />
          </div>
          <div className='my-4'>
            By creating an account, you agree to our
            <Link className='px-2 hover:underline'>
              Terms & conditions
            </Link>
            and
            <Link className='px-2 hover:underline'>
              Privacy Policy.
            </Link>
          </div>
          <Button type='submit' className='bg-green-700 md:hover:bg-green-700 text-green-100 h-fit mb-4 mx-auto'>
            Complete Registration
          </Button>
          <div>
            Already a member of the journal?
            <Link to={`/login`} className='px-2 font-bold text-green-900 hover:underline'>
              Login
            </Link>
          </div>
        </div>
      </form>
      </div>
      <div>
        
      </div>
    </div>
  )
}

export default Signup