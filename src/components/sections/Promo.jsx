import React from 'react'
import { promo } from '../../constants'
import { motion } from "framer-motion";

const Promo = () => {
  return (
    <section>
        <h1 className='text-[68px] font-bold text-gradient text-center'>PROMOCJE</h1>
        <div className='w-full h-[1px] bg-orange-gradient-pizzaRoller mt-10 mb-20'/>
        <div className='grid grid-cols-1 gap-10 mt-20'>
            {promo.map((item, index) => (
                <div key={item.id} className='flex even:flex-row odd:flex-row-reverse items-center justify-around'>
                  <div className='flex flex-col items-center '>
                    <p className='text-zinc-700 text-[44px] font-semibold z-10'>{item.name}</p>
                    <p className='text-white text-[50px] z-10 ml-[140px]'>{item.amount}</p>
                    <div className='absolute promo-border w-[320px] h-[320px]'/>
                    <img src={item.img} className='max-w-[280px] max-h-[280px] mt-[-70px] z-10'/>
                  </div>
                  <div>
                    <p className='text-zinc-700 text-[26px] font-light w-[400px] z-10'>{item.desc}</p>
                  </div>
                </div>
            ))}
        </div>
    </section>
  )
}

export default Promo