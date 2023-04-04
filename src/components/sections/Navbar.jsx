import React from 'react'
import { navLinks } from '../../constants'
import { logo } from '../../assets'

const Navbar = () => {
  return (
    <section id="navbar">
      <div className='flex justify-between'>
          <div className='flex flex-row items-center ml-16'>
            <span className='text-[28px]'> Pizza </span> 
            <img src={logo} className='w-[50px]'/> 
            <span className='text-[28px]'> Fun </span>
          </div>
          <ul className='flex justify-between items-center mr-16'>
            {navLinks.map((link, index) => (
              <li key={link.id} className='mr-4'> {link.title} </li>
            ))}
          </ul>
        </div>
    </section>
  )
}

export default Navbar