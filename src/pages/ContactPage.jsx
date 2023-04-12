import React from 'react'
import { Navbar, Footer, Contact, Map } from '../components'

const ContactPage = () => {
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