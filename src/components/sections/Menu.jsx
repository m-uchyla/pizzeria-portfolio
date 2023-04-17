import React from 'react'
import { menuList } from '../../constants'
import { motion } from "framer-motion";

const Menu = () => {
  return (
    <section>
        <h1 className='md:text-[68px] text-[60px] md:mt-0 sm:mt-5 mt-0 font-bold text-gradient text-center'>MENU</h1>
        <div className='w-full h-[1px] bg-orange-gradient-pizzaRoller mt-10 mb-5'/>
        <div className='text-center text-gray'>
          <h2 className='font-bold sm:text-[28px] text-[20px] text-gradient'>Zadźwoń i zamów:</h2>
          <h3 className='font-semibold'>(+48) 123 456 789</h3>
        </div>
        <div className='grid sm:grid-cols-2 grid-cols-1 gap-10 sm:mt-20 mt-5'>
          
            {menuList.map((item, index) => (
                <motion.div 
                key={item.id}
                className='flex flex-col items-center menu-border cursor-pointer'
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300, damping: 5 }}
                >
                    <div className='absolute w-[300px] h-[300px]'/>
                    <p className='text-zinc-700 text-hover md:text-[44px] text-[34px] z-10'>{item.name}</p>
                    <img src={item.img} className='w-[240px] z-10'/>
                    <p className='text-zinc-400 text-hover text-[10px] md:w-[400px] w-[230px] z-10'>{item.ingredients}</p>
                    <p className='text-zinc-700 sm:text-start text-center md:text-[18px] text-[15px] md:w-[400px] w-[260px] z-10'>{item.desc}</p>
                </motion.div>
            ))}
        </div>
    </section>
  )
}

export default Menu