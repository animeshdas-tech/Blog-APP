import React, { useCallback, useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { useSelector } from 'react-redux'
import { data, useNavigate } from 'react-router-dom'
import survice from './Config'
import Input from './Input'
import RTE from './RTE'
import Button from './Button'
import LoginLayout from './LoginLayout'

export default function PostForm({ post }) {
  const { register, setValue, handleSubmit, getValues, control, watch } = useForm({
    defaultValues: {
      title: post?.title || '',
      content: post?.content || '',
      slug: post?.slug || ''
    }
  })
  const userData = useSelector((state) => state.Auth.userData)?.uid
  const [loadImage, setLoadImage] = useState(null)
  const navigate = useNavigate()
  const submit = async (data) => {
    if (post) {
      const file = data.image[0] ? await survice.uploadFile(data.image[0]) : null
      delete data.image
      if (file) {
        data.featuredimage = file.secure_url
      }
      const dbPost = await survice.updatePost(userData, { ...data }, post.id)
      if (dbPost) {
        navigate(`/post/${post.uid}/${post.id}`)
      }
    } else {
      const file = await survice.uploadFile(data.image[0])
      delete data.image
      if (file) {
        data.featuredimage = file.secure_url
        const dbPost = await survice.createPost(userData, { ...data })
        if (dbPost) {
          navigate(`/post/${userData}/${dbPost}`)
        }
      }
    }
  }
  const slugTransform = useCallback((value) => {
    if (value && typeof value === "string")
      return value
        .trim()
        .toLowerCase()
        .replace(/[^a-zA-Z\d\s]+/g, "-")
        .replace(/\s/g, "-");

    return ""
  }, [])
  const imageChange = (e) => {
    if (e.target.files) {
      setLoadImage(URL.createObjectURL(e.target.files[0]))
    }
  }
  // useEffect(() => {
  //   const subscribtion = watch((value, { name }) => {
  //     if (name === "title") {
  //       // setValue('slug', slugTransform(value.title), { shouldValidate: true })
  //     }
  //   })
  //   return () => subscribtion.unsubscribe()
  // }, [watch, slugTransform, setValue])
  return userData ? (
    <form onSubmit={handleSubmit(submit)}>
      <div>
        <div className='flex justify-between items-center'>
          {
            post ? <div className='flex items-center md:bg-white rounded-xl h-fit'>
              <div className='size-2 bg-green-900 rounded-full mx-2'></div>
              <div className='text-green-900 pr-2'>
                STUDIO / MONOGRAPH
              </div>
            </div> : <div className='flex items-center md:bg-white rounded-xl h-fit md:text-green-900'>
              <div className=' bg-slate-300 flex items-center rounded md:bg-transparent'>
                <div className='size-2 bg-green-900 rounded-full mx-2'></div>
                <div className='pr-2'>
                  NEW DRAFT
                </div>
              </div>
              <div className='px-2'>
                Ready to compose
              </div>
            </div>
          }
          <Button type='submit' className='bg-green-700 text-green-100'>
            {post ? 'UPDATE' : 'PUBLISH'}
          </Button>
        </div>
        <div className='md:bg-white md:p-8 rounded-xl my-8'>
          {
            post ? <div className='bg-slate-300 rounded w-fit text-left px-2 mb-8 md:bg-transparent'>
              # MONOGRAPH ENTRY
            </div> : <div className='bg-slate-300 rounded md:bg-transparent md:font-normal md:text-black text-green-900 font-bold w-fit text-left px-2 mb-8'>
              # NEW-DRAFT
            </div>
          }
          <textarea className='text-2xl w-full rounded-xl font-serif font-medium bg-transparent'
            placeholder='Enter monograph or essay title...'
            {...register('title', { required: true })}
          />
        </div>
        <div className='my-8 md:bg-white md:p-8 rounded-xl'>
          <div className='text-left font-bold'>
            MONOGRAPH COVER IMAGE
          </div>
          {
            post || loadImage ? <div className='bg-cover bg-center md:bg-center rounded-xl my-4 h-60 md:h-96 grid place-content-end md:flex md:items-center md:justify-center' style={{ backgroundImage: `url(${loadImage || post.featuredimage})` }}>
              <label htmlFor="image" className="cursor-pointer px-4 py-4 rounded-lg bg-green-700 font-bold font-serif text-green-100 m-3 md:hidden">
                Replace
              </label>
              <div className='hidden md:inline-block bg-slate-100 rounded-xl p-4 pb-8'>
                <div className='font-bold '>
                  Tap to replace monograph cover
                </div>
                <div className='pb-6'>
                  JPEG, PNG, or WebP(16.9 recommended)
                </div>
                <label htmlFor="image" className="cursor-pointer px-4 py-4 rounded-lg bg-green-700 font-bold font-serif text-green-100">
                  Browse File
                </label>
              </div>
            </div> : <div className='bg-white md:bg-slate-100 rounded-xl h-60 md:h-96 flex items-center justify-center my-4'>
              <div className=''>
                <div className='font-bold '>
                  Tap to upload monograph cover
                </div>
                <div className='pb-6'>
                  JPEG, PNG, or WebP(16.9 recommended)
                </div>
                <label htmlFor="image" className="cursor-pointer px-4 py-4 rounded-lg bg-green-700 font-bold font-serif text-green-100">
                  Browse File
                </label>
              </div>
            </div>
          }
          <Input className='hidden'
            type='file'
            id='image'
            accept='image/jpg, image/png, image/jpeg, image/gif'
            {...register('image', { required: !post })}
            onChange={(e) => imageChange(e)}
          />
        </div>
        {/* <Input
          lable='Slug'
          placeholder='Slug'
          {...register('slug',{required:true})}
          onInput={(e)=>setValue('slug',slugTransform(e.currentTarget.value),{shouldValidate:true})}
        /> */}
        <div className='my-8'>
          <RTE
            name='content'
            control={control}
            defaultValue={getValues('content')}
            placeholder={'Begin drafting your thesis here...'}
          />
        </div>
      </div>
    </form>
  ) : (
    <div>
      <LoginLayout />
    </div>
  )
}
