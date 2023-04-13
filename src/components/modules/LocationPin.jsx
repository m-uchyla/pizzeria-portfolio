import React from 'react'
import {IoMdPin} from "react-icons/io"

const LocationPin = ({lat, lng, text}) => {
  return (
    <div>
      <IoMdPin size={50} className='text-primary absolute -left-6 -top-11' />
    </div>
  )
}

export default LocationPin