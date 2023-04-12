import React from 'react'
import { menuList } from '../../constants'
import { motion } from "framer-motion";

const Menu = () => {
  return (
    <section>
        <h1 className='text-[68px] font-bold text-gradient text-center'>MENU</h1>
        <div className='w-full h-[1px] bg-orange-gradient-pizzaRoller mt-10 mb-20'/>
        <div className='grid grid-cols-2 gap-10 mt-20'>
            {menuList.map((item, index) => (
                <motion.div 
                key={item.id}
                className='flex flex-col items-center menu-border cursor-pointer'
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300, damping: 5 }}
                >
                    <div className='absolute w-[300px] h-[300px]'/>
                    <p className='text-zinc-700 text-hover text-[44px] z-10'>{item.name}</p>
                    <img src={item.img} className='w-[240px] z-10'/>
                    <p className='text-zinc-400 text-hover text-[10px] w-[400px] z-10'>{item.ingredients}</p>
                    <p className='text-zinc-700 text-[18px] w-[400px] z-10'>{item.desc}</p>
                </motion.div>
            ))}
        </div>
    </section>
  )
}

export default Menu