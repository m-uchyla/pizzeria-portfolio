import {React, useEffect} from 'react'
import { Navbar, Menu, Footer } from '../components'

const MenuPage = () => {

  useEffect(() => {
    document.title = `Menu - Pizza Eccezionale`;
  });

  return (
    <>
        <Navbar />
        <Menu />
        <Footer />
    </>
  )
}

export default MenuPage