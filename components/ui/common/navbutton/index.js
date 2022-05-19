import React from 'react'

const Navbutton = (props) => {
  return (
    <button className='bg-gradient-to-r from-green-500 to-green-400 text-white 
    items-center justify-center px-5 py-2 border border-transparent 
                        text-base font-medium rounded-mdfont-[Poppins]  rounded md:ml-8 hover:bg-indigo-400 
    duration-500'>
      {props.children}
    </button>
  )
}

export default  Navbutton