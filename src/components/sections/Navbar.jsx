import React from 'react'
import { navLinks } from '../../constants'
import { GiFullPizza } from "react-icons/gi";

const Navbar = () => {
  return (
    <section id="navbar" className='mt-2'>
      <div className='flex justify-between'>
          <div className='flex flex-row items-center'>
            <p className='text-[20px] text-zinc-700 font-semibold mr-1'>Pizza</p>
            <GiFullPizza size={40} color='orange'/> 
            <p className='text-[20px] text-zinc-700 font-semibold ml-1'>Eccezionale</p>
          </div>
          <ul className='flex justify-between items-center z-10'>
            {navLinks.map((link, index) => (
              <li key={link.id} className={`${index !== navLinks.length - 1 ? 'mr-10' : 'mr-0'} text-[20px] links`}> {link.title} </li>
            ))}
          </ul>
        </div>
    </section>
  )
}

export default Navbar