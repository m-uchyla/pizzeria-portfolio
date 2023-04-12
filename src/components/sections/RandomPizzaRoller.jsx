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
        setRollPizza(pizzaNames[Math.floor(Math.random() * (pizzaNames.length-1))+1]);
    }, 2000) 
    } else {
        return null;
    }
}

return (
<>
    <div className='w-full h-[1px] bg-orange-gradient-pizzaRoller mt-20 mb-10'/>
    <div className='flex sm:flex-row flex-col items-center justify-between'>
        <div className='sm:w-[600px]'>
        {rollPizza !== pizzaNames[0] ?
            <div className='flex flex-col justify-center items-center'>
                <p className='sm:text-[42px] text-[28px] font-semibold text-gradient'>Twoja pizza na dziś to:</p> 
                <span className='sm:text-[42px] text-[25px] font-semibold text-zinc-700'>{rollPizza.name.toUpperCase()}</span>
            </div>
            : 
            <p className={`sm:text-[42px] text-[25px] sm:mb-5 font-semibold text-gradient`}> Nie możesz się zdecydować? </p>
        }
        {rollPizza !== pizzaNames[0] ?
        <div className='flex flex-col items-center'>
            
            <div className='w-[210px] sm:mt-7 mb-5'>
                <Button text="Zamów online" background={"bg-orange-gradient"} border={""} color={"text-white"} />
            </div>
        </div>
        : 
            <p className='sm:text-[42px] text-[23px] sm:mb-0 mb-5 font-semibold text-gradient'>Niech los zadecyduje za Ciebie!</p>
        }
        </div>
        <div className='sm:w-[360px]'>
            <div className='bg-white w-[360px] h-[360px] rounded-full flex items-center justify-center menu-border-roller'>
                <button disabled={blockPizza} onClick={() => handleClick()} className={`${!rotatePizza ? "rotate" : "none"}`}>
                    <img src={rollPizza.img} onClick={() => pizzaChange()} className={`h-[300px] w-[300px] duration-[2000ms]`}/>
                </button>
            </div>
        </div>
    </div>
</>
  )
}

export default RandomPizzaRoller