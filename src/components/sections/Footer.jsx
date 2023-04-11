import React from 'react'
import { privacy } from '../../constants'
import { GiFullPizza } from 'react-icons/gi'
import styles from '../../style';

const Footer = () => {
  return (
    <div className='pt-[150px]'>
      <section id="footer" className='absolute bottom-0 left-0 w-full  bg-black-gradient'>
        <div className={`${styles.paddingX} ${styles.flexCenter}`}>
          <div className={`${styles.boxWidth}`}>
              <div className='flex justify-between my-3'>
                <a href='/'>
                  <div className='flex flex-row items-center'>
                    <p className='text-[20px] text-white font-semibold mr-1'>Pizza</p>
                      <GiFullPizza size={40} color='orange'/> 
                    <p className='text-[20px] text-white font-semibold ml-1'>Eccezionale</p>
                  </div>
                </a>
                <ul className='flex items-center'>
                  {privacy.map((item, index) => (
                    <li className={`links-footer ${index === privacy.length - 1 ? "mr-0" : "mr-5"} cursor-pointer`}>{item.title}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
      </section>
    </div>
  )
}

export default Footer