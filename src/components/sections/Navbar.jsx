import React, {useState} from 'react'
import { navLinks } from '../../constants'
import { GiFullPizza } from "react-icons/gi";
import styles from '../../style';


const Navbar = () => {
  const [openCloseNav, setOpenCloseNav] = useState(false);
  const [initNav, setInitNav] = useState(true);

  return (
    <div className='pb-10'>
    <section id="navbar" className='my-2 py-3 absolute top-[-8px] left-0 w-full'>
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <div className='flex justify-between'>
              <div className='flex flex-row items-center'>
                <p className='text-[20px] text-zinc-700 font-semibold mr-1'>Pizza</p>
                <GiFullPizza size={40} color='orange'/> 
                <p className='text-[20px] text-zinc-700 font-semibold ml-1'>Eccezionale</p>
              </div>
              
              <ul className='list-none sm:flex hidden justify-end items-center flex-1'>
                {navLinks.map((link, index) => (
                    <li key={link.id} className={`z-[999] links cursor-pointer text-[18px] text-white ${index === navLinks.length - 1 ? 'mr-0' : 'mr-5'}`} onClick={()=>handleClickScroll(link.id)}>{link.title}</li>
                ))}
            </ul>
            <div className={`sm:hidden flex flex-1 justify-end items-center z-50`}>

                <div className={`${!openCloseNav ? 'menu_burger' : 'menu_burger open'}`}>
                    <div className={`menu_burger-btn ${openCloseNav ? "fixed z-10" : "static z-10"}`} 
                    onClick={() => {setOpenCloseNav((prev) => !prev);setInitNav(false)}} 
                    />
                </div>
                <div className={`p-6 bg-orange-gradient fixed top-0 right-0 w-[100%] h-[50%] ${(initNav) ? "hidden" : "flex"} ${openCloseNav ? "sidebar" : "sidebar-out"}`}>
                    <ul className='list-none flex-col justify-end items-center flex-1 mt-10'>
                        {navLinks.map((link, index)=>(
                        <li key={link.id} className={`font-poppins text-[30px] text-white font-normal cursor-pointer`} onClick={()=>{handleClickScroll(link.id);setOpenCloseNav((prev) => !prev)}}>
                            {link.title}
                        </li>
                        ))}
                    </ul>
                </div>
            </div>
            </div>
          </div>
        </div>
    </section>
    </div>
  )
}

export default Navbar