import React, {useState} from 'react'
import { navLinks } from '../../constants'
import { GiFullPizza } from "react-icons/gi";
import styles from '../../style';


const Navbar = ({active}) => {
  const [openCloseNav, setOpenCloseNav] = useState(false);
  const [initNav, setInitNav] = useState(true);
  const [navbar, setNavbar] = useState(false);

  const changeBackground = () => {
    if(window.scrollY >= 30) {
      setNavbar(true)
    } else {
      setNavbar(false)
    }
      
  }

  window.addEventListener('scroll', changeBackground);

  if(openCloseNav){
    document.getElementsByTagName("body")[0].style.overflow = "hidden";
  }else{
    document.getElementsByTagName("body")[0].style.overflow = "auto";
  }

  return (
    <div className='sm:pb-10 pb-20'>
    <section id="navbar" className={`my-2 py-3 ${navbar ? "navbar-fixed active" : "navbar-absolute"} top-[-8px] left-0 w-full`}>
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <div className='flex justify-between'>
            <a href='/'>
              <div className='flex flex-row items-center'>
                  <p className={`text-[20px] ${navbar ? "navbar-text-white" : "navbar-text"} font-semibold mr-1`}>Pizza</p>
                  <GiFullPizza size={40} className={`${navbar ? 'icon-white' : 'icon-orange'}`}/> 
                  <p className={`text-[20px] ${navbar ? "navbar-text-white" : "navbar-text"} font-semibold ml-1`}>Eccezionale</p>
              </div>
            </a>
            <ul className='list-none sm:flex hidden justify-end items-center flex-1'>
                {navLinks.map((link, index) => (
                    <li key={link.id} className={`z-[99999] cursor-pointer text-[18px] ${navbar ? "navbar-text-white links-fixed" : "navbar-text links"} ${index === navLinks.length - 1 ? 'mr-0' : 'mr-5'}`} onClick={()=>handleClickScroll(link.id)}>
                      <a href={link.href} className={`${(link.id == active) ? "font-bold" : ""}`}>{link.title}</a>
                    </li>
                ))}
            </ul>
            <div className={`sm:hidden flex flex-1 justify-end items-center z-50`}>
                <div className={`${!openCloseNav ? 'menu_burger' : 'menu_burger open'}`}>
                    <div className={` ${navbar ? "menu_burger-btn-fixed" : "menu_burger-btn"}  ${openCloseNav ? "fixed z-10" : "static z-10"}`} 
                    onClick={() => {setOpenCloseNav((prev) => !prev);setInitNav(false)}} 
                    />
                </div>
                <div className={`-left-[100px] w-[200%] h-[200vh] absolute ${openCloseNav ? "bg-in" : "bg-out"}`}></div>
                <div className={`p-6 bg-primary fixed top-0 right-0 w-[70%] h-[100%] ${(initNav) ? "hidden" : "flex flex-col"} ${openCloseNav ? "sidebar" : "sidebar-out"}`}>
                  
                    <ul className='list-none flex-col justify-end items-center flex-1 mt-7'>
                        {navLinks.map((link, index)=>(
                        <div key={link.id}>
                          <li className={`font-poppins text-[24px] text-white font-normal cursor-pointer py-7`} onClick={()=>{handleClickScroll(link.id);setOpenCloseNav((prev) => !prev)}}>
                              <a href={link.href}>{link.title}</a>
                              
                          </li>
                          {((index+1) == navLinks.length) ? "" : <div className='w-full h-[1px] bg-white'/>}
                        </div>
                        ))}
                    </ul>
                    <div className='text-white border-2 border-cream rounded-xl p-4 mb-10'>
                      <h4 className='text-center font-semibold text-[16px] my-2'>Godziny otwarcia</h4>
                      <div className='flex justify-evenly gap-y-10'>
                        <ul>
                          <li>Pon</li>
                          <li>Wt</li>
                          <li>Śr</li>
                          <li>Czw</li>
                          <li>Pt</li>
                        </ul>
                        <ul>
                          <li>11:00 - 23:00</li>
                          <li>9:00 - 23:00</li>
                          <li>9:00 - 23:00</li>
                          <li>Nieczynne</li>
                          <li>9:00 - 0:00</li>
                        </ul>
                      </div>
                    </div>
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