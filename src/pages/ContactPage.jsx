import {React, useEffect} from 'react'
import { Navbar, Footer, Contact, Map } from '../components'

const ContactPage = () => {

  useEffect(() => {
    document.title = `Kontakt - Pizza Eccezionale`;
  });

  return (
    <>
        <div className='bg-cream'>
            <Navbar />
            <Contact />
            <Map />
            <Footer />
        </div>
    </>
  )
}

export default ContactPage