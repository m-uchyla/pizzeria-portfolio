import React from 'react'
import { navLinks } from '../../constants'
import { logo } from '../../assets'

const Navbar = () => {
  return (
    <section id="navbar" className='mt-2'>
      <div className='flex justify-between'>
          <div className='flex flex-row items-center'>
            <span className='text-[28px]'> Pizza </span> 
            <img src={logo} className='w-[50px]'/> 
            <span className='text-[28px]'> Fun </span>
          </div>
          <ul className='flex justify-between items-center z-10'>
            {navLinks.map((link, index) => (
              <li key={link.id} className='mr-4 text-[20px] links'> {link.title} </li>
            ))}
          </ul>
        </div>
    </section>
  )
}

export default Navbar