import {React, useState} from 'react'

const TelInput = ({forName, labelName, placeholderName, name, formId}) => {

    const [input, setInput] = useState("");
    const [typeError, setTypeError] = useState(false);
    const [isFocused,setIsFocused] = useState(false);
  
      function setValue(value){
        value = value.replace(/\D+/g, "");
        if(value.length>3)value = value.slice(0, 3) + " " + value.slice(3);
        if(value.length>7)value = value.slice(0, 7) + " " + value.slice(7);
        if(value.length>11)value = value.slice(0, 11);
        setInput(value)
      }
  
      function validate(e){
        if(input.length > 0 && input.length < 11)setTypeError(true);
        if(input.length == 11){
          setTypeError(false);
        }
      }

  return (
    <div className='flex flex-col my-3'>
        <label htmlFor={forName} 
            className={`block text-[18px] font-medium ${isFocused ? "text-primary" : "text-gray"}`}>
        {labelName} </label>
        <input 
            type="text" 
            placeholder={placeholderName}
            id={forName} 
            value={input} 
            onInput={e => setValue(e.target.value)} 
            onFocus={()=>setIsFocused(true)} 
            onBlur={e=>{setIsFocused(false);validate(e)}} 
            name={name} 
            className={`p-2 bg-transparent placeholder:text-sm focus:outline-0 border-b-[2px]
                       ${(!typeError) ? "border-gray focus:border-primary" : "border-red-600 focus:border-red-400"} 
                       `}
        />
        {(typeError) ? <span id={`${formId}_error_type`} className={`text-red-500 text-[14px]`}>Nieprawidłowy numer telefonu</span> : ""}
    </div>
  )
}

export default TelInput