import React from 'react'
import { privacy } from '../../constants'
import { GiFullPizza } from 'react-icons/gi'

const Footer = () => {
  return (
    <section id="footer" className='mt-20'>
      <div className=' w-full h-[1px] bg-orange-gradient-pizzaRoller mt-10 mb-5'/>
        <div className='flex items-center justify-around mb-5'>
          <div className='flex flex-row items-center'>
            <p className='text-[20px] text-zinc-700 font-semibold mr-1'>Pizza</p>
              <GiFullPizza size={40} color='orange'/> 
            <p className='text-[20px] text-zinc-700 font-semibold ml-1'>Eccezionale</p>
          </div>
          <ul className='flex items-center'>
            {privacy.map((item, index) => (
              <li className={`links ${index === privacy.length - 1 ? "mr-0" : "mr-5"} cursor-pointer`}>{item.title}</li>
            ))}
          </ul>
        </div>
    </section>
  )
}

export default Footer