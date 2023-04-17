import {React, useEffect} from 'react'
import { Navbar, Footer, Hero, Reviews } from '../components'
import Ingredients from '../components/sections/Ingredients'
import RandomPizzaRoller from '../components/sections/RandomPizzaRoller'

const Home = () => {

  useEffect(() => {
    document.title = `Pizza Eccezionale`;
  });

  return (
    <>
        <div >
            <Navbar />
            <Hero />
            <Ingredients />
            <RandomPizzaRoller />
            <Reviews />
            <Footer />
        </div>
    </>
  )
}

export default Home