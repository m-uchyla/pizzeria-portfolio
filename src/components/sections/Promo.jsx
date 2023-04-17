import React, { useEffect } from 'react'
import { promo } from '../../constants'
import { motion } from "framer-motion";

const Promo = () => {
  
  return (
    <section>
        <h1 className='md:text-[68px] sm:text-[60px] text-[48px] font-bold text-gradient text-center'>PROMOCJE</h1>
        <div className='w-full h-[1px] bg-orange-gradient-pizzaRoller mt-10 mb-20'/>
        <div className='grid grid-cols-1 gap-10 mt-20'>
            {promo.map((item, index) => (
                <div key={item.id} className='flex sm:even:flex-row sm:odd:flex-row-reverse flex-col items-center justify-around'>
                  <div className='flex flex-col items-center'>
                    <p className='text-zinc-700 text-[44px] text-center font-semibold z-10'>{item.name}</p>
                    <p className={`text-white text-[50px] z-10 ${index % 2 ? "ml-[140px]" : "mr-[150px]"}`}>{item.amount}</p>
                    <div className='absolute promo-border w-[320px] h-[320px]'/>
                    <img src={item.img} className='max-w-[280px] max-h-[280px] mt-[-60px] z-10'/>
                  </div>
                  <div className={`sm:mt-0 ${index === promo.length - 1 ? "mt-2" : "mt-14"} sm:mb-0 mb-5`}>
                    <p className={`text-zinc-700 sm:text-[26px] text-[20px] font-light md:w-[400px] w-[300px] z-10`}>{item.desc}</p>
                  </div>
                </div>
            ))}
        </div>
    </section>
  )
}

export default Promo