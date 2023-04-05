import React from 'react'
import { ingredients } from '../../constants'


const Ingredients = () => {
  return (
    <section className='mt-[200px]'>
        <div className='flex justify-around'>
            {ingredients.map((onePiece, index) => (
                <div className='flex '>
                    <img src={onePiece.img} className='h-[80px] md:absolute static md:top-[720px] ml-[-40px]'/>
                    <h2 className='z-10 mr-5 w-[280px] font-bold text-[38px] text-zinc-600'>{onePiece.title}</h2>
                </div>
            ))}
        </div>
    </section>
  )
}

export default Ingredients