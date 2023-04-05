import React from 'react'
import { Navbar, Footer, Hero } from '../components'
import Ingredients from '../components/sections/Ingredients'
import RandomPizzaRoller from '../components/sections/RandomPizzaRoller'


const Home = () => {


  return (
    <>
        <div >
            <Navbar />
            <Hero />
            <Ingredients />
            <RandomPizzaRoller />
            <Footer />
        </div>
    </>
  )
}

export default Home