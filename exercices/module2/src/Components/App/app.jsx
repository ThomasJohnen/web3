import { useState } from 'react'
import Button from '../Button/button.jsx'
import Display from '../Display/display.jsx'

const App = () => {
    const [counter, setCounter] = useState(0)
  
    console.log('rendering with counter value', counter)

    const changeCount = (delta) => {
        if(delta === 0) return setCounter(0)
        return setCounter(counter + delta)
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