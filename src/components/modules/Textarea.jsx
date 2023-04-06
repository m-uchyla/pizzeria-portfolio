import {React, useState} from 'react'

const Textarea = ({forName, labelName, placeholderName, name, isRequired, formId}) => {

  const [input, setInput] = useState("");
  const [requiredError, setRequiredError] = useState(false);
  const [isFocused,setIsFocused] = useState(false);

  function validate(e){
    if(isRequired && input.length === 0)setRequiredError(true);
    if(input.length > 0){
      setRequiredError(false);
    }
  }

  return (
    <div className="flex flex-col my-3">
        <label 
            htmlFor={forName}   
            className={`block text-[18px] font-medium ${isFocused ? "text-primary" : "text-gray"}`}>
                {labelName} {(isRequired) ? <span className='text-red-600'>*</span> : ""}
        </label>
        <textarea 
            id={forName} 
            placeholder={placeholderName}
            name={name} 
            value={input} 
            onInput={e => setInput(e.target.value)} 
            onFocus={()=>setIsFocused(true)} 
            onBlur={e=>{setIsFocused(false);validate(e)}} 
            rows="6" 
            className={`p-2 placeholder:text-sm rounded-md bg-transparent border-[2px] ${(!requiredError) ? "border-gray focus:border-primary" : "border-red-600 focus:border-red-400"} valid:bg-black-gradient focus:outline-none focus:ring-teal-500 block w-full p-2.5`}
        >
        </textarea>
        {(requiredError) ? <span id={`${formId}_error_empty`} className={`text-red-500 text-[14px]`}>To pole nie może być puste</span> : ""}
    </div>
  )
}

export default Textarea