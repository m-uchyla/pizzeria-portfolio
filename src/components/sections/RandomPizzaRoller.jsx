import React, {useState} from 'react'
import { random } from '../../assets'
import { pizzaNames } from '../../constants';
import Button from '../modules/Button';


const RandomPizzaRoller = () => {
const [rollPizza, setRollPizza] = useState(pizzaNames[0]);
const [rotatePizza, setRotatePizza] = useState(true);
const [blockPizza, setBlockPizza] = useState(false);

const handleClick = () =>{
    setRotatePizza(false);
    setBlockPizza(true);
}

const pizzaChange = () => {
    if(!blockPizza){
    setTimeout(() => {
        setRollPizza(pizzaNames[Math.floor(Math.random() * pizzaNames.length)]);
    }, 2000) 
    } else {
        return null;
    }
}

return (
<>
    <div className='flex flex-col items-center justify-between mt-[100px]'>
        {rollPizza !== pizzaNames[0] ?
            <div className='flex'>
                <p className='text-[42px] font-semibold text-gradient mr-3'>Twoja pizza na dziś to:</p> 
                <span className='text-[42px] font-semibold text-zinc-700'>{rollPizza.name.toUpperCase()} !</span>
            </div>
            : 
            <p className={`text-[42px] font-semibold text-gradient `}> Nie możesz się zdecydować? </p>
        }
        <button disabled={blockPizza} onClick={() => handleClick()} className={`${!rotatePizza ? "rotate" : "none"}`}>
            <img src={rollPizza.img} onClick={() => pizzaChange()} className={`h-[300px] w-[300px] duration-[2000ms]`}/>
        </button>
        
        {rollPizza !== pizzaNames[0] ?
        <div className='flex flex-col items-center'>
            
            <div className='w-[200px] mt-5'>
                <Button text="Zamów online" background={"bg-orange-gradient"} border={""} color={"text-white"} />
            </div>
        </div>
        : 
            <p className='text-[32px] font-semibold text-gradient'>Niech los zadecyduje za Ciebie!</p>
        }
        
    </div>
    
</>
  )
}

export default RandomPizzaRoller