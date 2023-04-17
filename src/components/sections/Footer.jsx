import React from 'react'
import { privacy } from '../../constants'
import { GiFullPizza } from 'react-icons/gi'
import styles from '../../style';
import { WM } from '../../assets';

const Footer = () => {
  return (
    <div className='pt-[150px]'>
      <section id="footer" className='absolute bottom-0 left-0 w-full  bg-black-gradient'>
        <div className={`${styles.paddingX} ${styles.flexCenter}`}>
          <div className={`${styles.boxWidth}`}>
              <div className='flex flex-col md:flex-row items-center gap-4 justify-between my-4'>
                <a href='/'>
                  <div className='flex flex-row items-center'>
                    <p className='sm:text-[20px] text-[12px] text-white font-semibold mr-1'>Pizza</p>
                      <GiFullPizza className='sm:text-[40px] text-[22px] text-orange-500'/> 
                    <p className='sm:text-[20px] text-[12px] text-white font-semibold ml-1'>Eccezionale</p>
                  </div>
                </a>
                <ul className='flex items-center'>
                  {privacy.map((item, index) => (
                    <li key={item.id} className={`links-footer sm:text-[16px] text-[12px] ${index === privacy.length - 1 ? "mr-0" : "sm:mr-5 mr-2"} cursor-pointer`}>{item.title}</li>
                  ))}
                </ul>
                <a href="https://web-masters.pl">
                  <div className='flex items-center text-white'>
                    <h5 className='mr-2 sm:text-[16px] text-[10px]'>Zaprojektowane przez</h5>
                    <img src={WM} className='sm:w-[35px] sm:h-[35px] w-[15px] h-[15px]' />
                  </div>
                </a>
              </div>
            </div>
          </div>
      </section>
    </div>
  )
}

export default Footer