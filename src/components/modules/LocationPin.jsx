import React from 'react'
import {IoMdPin} from "react-icons/io"

const LocationPin = ({lat, lng, text}) => {
  return (
    <div>
      <IoMdPin size={50} className='text-primary' />
    </div>
  )
}

export default LocationPin