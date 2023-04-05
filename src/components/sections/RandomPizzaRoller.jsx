import React, {useState} from 'react'
import { random } from '../../assets'

const RandomPizzaRoller = () => {
    
  const {rollPizza, setRollPizza} = useState([]);
  
  return (

    <>
        <div>
            <h2>
                Nie możesz się zdecydować? <br/>
                Niech los zadecyduje za Ciebie!
            </h2>
            <img src={random} onClick={() => { setRollPizza()}} className='h-[300px] duration-[2000ms] hover:rotate-180'/>
        </div>
    </>
  )
}

export default RandomPizzaRoller