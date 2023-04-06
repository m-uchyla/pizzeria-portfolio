import React, {useState} from 'react'
import { hamAndMushroms, meat, pepperoni, random, salami, tomato, vege } from '../../assets'
import { pizzaNames } from '../../constants';

const RandomPizzaRoller = () => {


const randomItems = [meat, vege, pepperoni, hamAndMushroms, salami, tomato];
const [rollPizza, setRollPizza] = useState(random);
const [rotatePizza, setRotatePizza] = useState(false);

const handleClick = () =>{
    setRotatePizza(current => !current);
}

const pizzaChange = () => {
    setRollPizza(randomItems[Math.floor(Math.random() * randomItems.length)]);
    
}


return (

<>
    <div className='flex flex-col items-center justify-between mt-[150px]'>
        <p className='text-[32px] font-semibold text-gradient'> Nie możesz się zdecydować? </p>
        <button onClick={() => handleClick()} className={`${!rotatePizza ? "rotate" : "nextRotate"}`}>
            <img src={rollPizza} onClick={() => setTimeout(() => { pizzaChange() }, 2000)} className={`h-[300px] w-[300px] duration-[2000ms]`}/>
        </button>
        
        {rollPizza !== random ? <div className='flex'><p className='text-[32px] font-semibold text-gradient mr-3'>Twoja pizza na dziś to:</p> <span className='text-[32px] font-semibold text-zinc-700'>{rollPizza}</span></div> : 
            <p className='text-[32px] font-semibold text-gradient'>Niech los zadecyduje za Ciebie!</p>
        }
    </div>
</>
  )
}

export default RandomPizzaRoller