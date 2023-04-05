import React from 'react'
import { pizza } from '../../assets'
import { useParallax, Parallax } from 'react-scroll-parallax';


const Hero = () => {
    const parallax = useParallax<HTMLDivElement>({
      rotate: [0, 360],
    });
  return (
    <div className='mt-20'>
      <Parallax speed={-10} />
        <div ref={parallax.ref} className=' absolute top-[-140px] right-[-400px]'>
          <img src={pizza} className='w-[900px]'/>
        </div>
      <div className='flex flex-col'>
        <h1 className='text-[68px] text-zinc-700 font-bold'>Inne pizze są dobre, <br />
            Nasza pizza jest <span className='text-gradient'>najlepsza</span>.</h1>
      </div>
      
    </div>
  )
}

export default Hero