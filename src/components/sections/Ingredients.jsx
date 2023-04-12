import React from 'react'
import { ingredients } from '../../constants'


const Ingredients = () => {
  return (
    <section className='sm:mt-[200px] mt-[130px]'>
        <div className='flex sm:flex-row flex-col justify-between'>
            {ingredients.map((onePiece, index) => (
                <div key={onePiece.id} className='flex items-center sm:mb-0 mb-10'>
                    <img src={onePiece.img} className='sm:w-[80px] w-[60px] sm:h-[80px] h-[60px] sm:absolute relative md:top-[680px] sm:ml-[-40px]'/>
                    <h2 className='z-10 sm:mr-5 mr-0 sm:w-[280px] font-bold sm:text-[38px] text-[24px] text-zinc-600'>{onePiece.title}</h2>
                </div>
            ))}
        </div>
    </section>
  )
}

export default Ingredients