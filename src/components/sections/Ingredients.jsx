import React from 'react'
import { ingredients } from '../../constants'


const Ingredients = () => {
  return (
    <section className='md:mt-[200px] sm:mt-[120px] mt-[130px]'>
        <div className='flex sm:flex-row flex-col justify-between'>
            {ingredients.map((onePiece, index) => (
                <div key={onePiece.id} className='flex items-center sm:mb-0 mb-10'>
                    <img src={onePiece.img} className='md:w-[80px] sm:w-[50px] w-[60px] md:h-[80px] sm:h-[50px] h-[60px] sm:absolute relative md:top-[680px] sm:top-[745px] sm:ml-[-5px]'/>
                    <h2 className='z-10 md:mr-5 mr-0 md:ml-0 sm:ml-2 ml-0 md:w-[280px] sm:w-[160px] font-bold md:text-[38px] sm:text-[22px] text-[24px] text-zinc-600'>{onePiece.title}</h2>
                </div>
            ))}
        </div>
    </section>
  )
}

export default Ingredients