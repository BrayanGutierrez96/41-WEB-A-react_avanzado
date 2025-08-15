
import {useState} from 'react'

function UseStateEjemplo() {
    const[color, setColor] = useState("red")
    const cambiarColor = () => {
      if(color !== "red"){
        setColor("red")
      }else{
        setColor("white")
      }
    }
    return (
      
      <div className='bg-black h-screen w-screen flex justify-center items-center flex-col gap-4 '>  
        <div className={`${color === "red" ? 'bg-red-500' : 'bg-green-500'} h-50 w-50`}></div>   
        <button className='border-1 p-2 rounded-md bg-blue-500 text-white cursor-pointer ' onClick={cambiarColor}>Cambiar Color</button>
      </div>
    )
}

export default UseStateEjemplo