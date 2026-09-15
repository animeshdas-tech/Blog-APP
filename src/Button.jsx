import React from 'react'

function Button({children,className='',bgcolor="",type="button",textColor = "",...props}) {
  return (
    <button className={`px-4 py-4 rounded-lg lg:hover:bg-slate-200  focus:text-xl hover:text-green-900 h-full md:h-fit font-bold font-serif ${bgcolor}${textColor}${className}`}{...props}>
      {children}
    </button>
  )
}

export default Button