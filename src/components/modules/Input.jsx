import {React, useState} from 'react'

const Input = ({type, labelName, forName, isRequired, placeholder, formId}) => {

  const [isFocused,setIsFocused] = useState(false);
  const [input, setInput] = useState("");
  const [typeError, setTypeError] = useState(false);
  const [requiredError, setRequiredError] = useState(false);

  function validate(e){
    if(isRequired && input.length === 0)setRequiredError(true);
    if(input.length > 0){
      setRequiredError(false);
      if(type == "email")setTypeError(!(emailValidation(input)));
    }
  }

  function emailValidation(email){
    const regex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    return (regex.test(email));
  }

  return (
    <>
      <div className='flex flex-col mb-5'>
        <label 
            htmlFor={forName} 
            className={`block text-[18px] font-medium ${isFocused ? "text-primary" : "text-gray"}`}>
                {labelName} {(isRequired) ? <span className='text-red-600'>*</span> : ""}
        </label>
        <input 
            type={type}
            id={forName} 
            value={input} 
            onInput={e => setInput(e.target.value)}
            placeholder={placeholder} 
            onFocus={()=>setIsFocused(true)} 
            onBlur={e=>{setIsFocused(false);validate(e)}} 
            className={`p-2 placeholder:text-sm bg-transparent border-b-[2px] focus:outline-0
            ${(!typeError && !requiredError) ? "border-gray focus:border-primary" : "border-red-600 focus:border-red-400"}`}
            />
        {(requiredError) ? <span id={`${formId}_error_empty`} className={`text-red-500 text-[14px]`}>{labelName} nie może być pusty</span> : ""}
        {(typeError) ? <span id={`${formId}_error_type`} className={`text-red-500 text-[14px]`}>Nieprawidłowy adres email</span> : ""}
      </div>
    </>
  )
}

export default Input