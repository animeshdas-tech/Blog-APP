import React, { forwardRef, useId } from 'react'

const Input=forwardRef(function({lable, type, className, ...props},ref){
  const id=useId()
  return (
    <div>
      {
        lable && <lable htmlFor={id}>
          {lable}
        </lable>
      }
      <input type={type} id={id} ref={ref} {...props} className={`h-10 w-full bg-slate-100 px-4 rounded-lg border-2 border-slate-300 ${className}`}/>
    </div>
  )
})

export default Input