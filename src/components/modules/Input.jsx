import {React, useState} from 'react'

const Input = ({labelName, forName, isRequired, placeholder}) => {

    const [isFocused,setIsFocused] = useState(false);

  return (
    <>
        <label 
            htmlFor={forName} 
            className={`block mb-1 text-[18px] font-medium ${isFocused ? "text-primary" : "text-gray"}`}>
                {labelName} {(isRequired) ? <span className='text-red-600'>*</span> : ""}
        </label>
        <input 
            id={forName} 
            placeholder={placeholder} 
            onFocus={()=>setIsFocused(true)} 
            onBlur={()=>setIsFocused(false)} 
            className='p-2 placeholder:text-sm bg-transparent border-b-[2px] border-gray focus:border-primary focus:outline-0' 
            />
    </>
  )
}

export default Input