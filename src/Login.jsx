import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useForm } from 'react-hook-form'
import { Link, useNavigate } from 'react-router-dom'
import { login as storeLogin } from './AuthSlice'
import authentication from './Auth'
import Input from './Input'
import Button from './Button'

function Login() {
  const [error, seterror] = useState("")
  const nevigate = useNavigate()
  const dispatch = useDispatch()
  const { register, handleSubmit } = useForm()
  const login = async (data) => {
    seterror("")
    try {
      const sesson = await authentication.signIn(data)
      if (sesson) {
        const userData = await authentication.getUser()
        if (userData) {
          dispatch(storeLogin(userData))
          nevigate('/')
        }
      }
    } catch (error) {
      seterror(error.message)
    }
  }
  return (
    <div className='text-left py-6'>
      <div className='flex items-center gap-2'>
        <div className='size-2 bg-green-900 rounded-full'></div>
        <div className='text-green-900 font-bold'>
          MEMBER PORTAL
        </div>
        <div className='size-1 bg-slate-500 rounded-full hidden lg:inline-block'></div>
        <div className='hidden lg:inline-block'>
          CURATED FOR DELIBERATE MINDS
        </div>
      </div>
      <div className='my-2'>
        <div className='text-3xl font-serif font-bold'>
          Welcome Back to the Discourse
        </div>
        <div>
          Reclaim your undisturbed reading environment, sync marginal annotations, and resume your archival explorations.
        </div>
      </div>
      <div className='my-8 lg:flex justify-between'>
        {error && <p>{error}</p>}
        <form onSubmit={handleSubmit(login)} className='p-5 bg-white rounded-xl my-8 lg:w-6/12'>
          <div className='text-xl font-serif font-bold'>
            MindScroll
          </div>
          <div className='my-4'>
            <div className='text-2xl font-serif font-bold'>
              Access your library & writings
            </div>
            <div>
              Continue reading in-depth essays, reviewing peer annotations, or managing published monographs.
            </div>
          </div>
          <div className='my-4'>
            <div className='font-bold'>
              Email Address
            </div>
            <Input
              type='email'
              placeHolder='you@domain.com'
              {...register("email", { required: true, validate: { matchPatern: (value) => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) || "Email address must be a valid address" } })}
            />
          </div>
          <div className='my-4'>
            <div className='font-bold'>
              Password
            </div>
            <Input
              type='password'
              placeHolder='Password'
              {...register("password", { required: true })}
            />
          </div>
          <Button type='submit' className='bg-green-700 text-white w-full my-4'>
            SIGN IN TO ACCOUNT
          </Button>
          <div className='my-4'>
            New to the journal?
            <Link to={`/Signup`} className='px-2 font-bold text-green-900 hover:underline'>
              Sign up
            </Link>
          </div>
          <div className='my-4'>
            Encrypted member session. Zero tracker footprint.
          </div>
        </form>
        <div className='my-8 lg:w-5/12 lg:my-0'>
          <div className='bg-green-900 rounded-xl p-6 my-6'>
            <div className='text-green-300 font-bold'>
              CURATOR NOTE
            </div>
            <div className='text-2xl text-white italic my-4'>
              "To read deeply is to inhabit another mind with delibrated slowness."
            </div>
          </div>
          <div className='p-5 rounded-xl bg-white my-6'>
            <div className='font-bold'>
              MEMBER PRIVILEGES
            </div>
            <div className='my-4'>
              <div className='font-bold'>
                Synchronized Marginal Notes
              </div>
              <div className='text-slate-500'>
                Annotations persist seamlessly across tablet, desktop, and e-reader.
              </div>
            </div>
            <div className='my-4'>
              <div className='font-bold'>
                Zero Tracking or Distractions
              </div>
              <div className='text-slate-500'>
                Pure prose without third-party scripts, advertising, or telemetry.
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='md:flex justify-between'>
        <div className='flex items-center my-4'>
          <div className='text-3xl px-4'>
            01
          </div>
          <div>
            <div className='font-bold'>
              Strict Privacy Cadence
            </div>
            <div>
              We do not trade, analyze, or fingerprint reader dwell metrics for commercial advertising.
            </div>
          </div>
        </div>
        <div className='flex items-center my-4'>
          <div className='text-3xl px-4'>
            02
          </div>
          <div>
            <div className='font-bold'>
              Peer Attribution
            </div>
            <div>
              Direct discourse channels let you converse with monograph authors via curated margins.
            </div>
          </div>
        </div>
        <div className='flex items-center my-4'>
          <div className='text-3xl px-4'>
            03
          </div>
          <div>
            <div className='font-bold'>
              Physical Dispatch
            </div>
            <div>
              Subscribers can request annual hardbound compilations printed on archival rag paper.
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login