import React from 'react'
import { pizza } from '../../assets'
import { useParallax } from 'react-scroll-parallax';
import Button from '../modules/Button';



const Hero = () => {
    const parallax = useParallax<HTMLDivElement>({
      rotate: [0, 360],
    });
  return (
    <div className='mt-20'>
      <div className=' absolute top-[-140px] right-[-300px]'>
        <img src={pizza} className='xl:w-[800px] w-[770px]'/>
      </div>  
      <div className='flex flex-col max-w-[60%]'>
        <h1 className='xl:text-[72px] text-[62px] text-zinc-700 font-bold'>Inne pizze są dobre, <br />
            Nasza pizza jest <span className='text-gradient'>najlepsza</span>.</h1>
        <div className='w-[310px] mt-3'>
          <Button text="Menu"/>
        </div>
      </div>
    </div>
  )
}

export default Hero