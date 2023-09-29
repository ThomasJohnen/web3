import { useState } from 'react'
import Button from '../Button/button.jsx'
import Display from '../Display/display.jsx'

const App = () => {

    const [counter, setCounter] = useState(JSON.parse(localStorage.getItem("counter")) || 0)
  

    const changeCount = (delta) => {
        if(delta === 0){
            localStorage.setItem("counter", JSON.stringify(0));
            setCounter(0)
        } 
        else {
        localStorage.setItem("counter", JSON.stringify(counter +delta));
        setCounter(counter + delta);
        
        }
    }

  
    return (
      <div>
        <Display counter={counter} />
        <Button changeCount={changeCount} delta={1} text="Incrémenter" />
        <Button changeCount={changeCount} delta={-1} text="Décrémenter" />
        <Button changeCount={changeCount} delta={0} text="Reset" />
      </div>
    )
  } 

    export default App