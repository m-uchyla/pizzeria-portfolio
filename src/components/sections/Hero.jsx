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
      <div className=' absolute md:top-[-140px] sm:top-[-90px] sm:right-[-300px] top-[20px] xs:right-[-240px] right-[-270px]'>
        <img src={pizza} className='xl:w-[800px] md:w-[770px] sm:w-[600px] w-[400px]'/>
      </div>  
      <div className='flex flex-col lg:max-w-[55%] max-w-[60%]'>
        <h1 className='xl:text-[72px] sm:text-[62px] xs:text-[40px] text-[32px] text-zinc-700 font-bold'>Inne pizze są dobre, <br />
            Nasza pizza jest <span className='text-gradient'>najlepsza</span>.</h1>
        <div className='sm:w-[500px] w-[200px] sm:flex-row flex-col mt-3 flex gap-x-2'>
          <Button text="Zamów online" background={"bg-orange-gradient"} border={""} color={"text-white"}/>
          <Button text="Rezerwuj stolik" background={""} border={"border-[2px] border-primary"} color={"text-primary"}/>
        </div>
      </div>
    </div>
  )
}

export default Hero