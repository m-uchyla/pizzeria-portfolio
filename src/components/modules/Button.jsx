import React from 'react'

const Button = ({text, background, border, color}) => {
  return (
    <>
        <div className={`${background} ${border} sm:mt-0 mt-2 grow button px-6 pb-1 h-[45px] rounded-full cursor-pointer flex-center drop-shadow-xl`}>
            <button className={`text-[20px] ${color} font-semibold`}>{text}</button>
        </div>
    </>
  )
}

export default Button