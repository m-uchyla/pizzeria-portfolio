import {React, useEffect} from 'react'
import { Footer, Navbar, Promo } from '../components'

const PromoPage = () => {

  useEffect(() => {
    document.title = `Promocje - Pizza Eccezionale`;
  });

  return (
    <>
        <Navbar active={"promo"} />
        <Promo />
        <Footer />
    </>
  )
}

export default PromoPage