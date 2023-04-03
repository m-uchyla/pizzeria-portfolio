import React from 'react'

const Button = ({text}) => {
  return (
    <>
        <div className='bg-orange-gradient px-6 pb-1 h-[45px] rounded-full mt-6 cursor-pointer flex-center drop-shadow-xl'>
            <button className='text-[20px] text-white font-semibold'><p className='drop-shadow-lg'>{text}</p></button>
        </div>
    </>
  )
}

export default Button