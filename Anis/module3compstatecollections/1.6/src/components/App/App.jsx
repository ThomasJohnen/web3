
import React, { useState  } from 'react';

import Button from 'components/Button/Button'
import Stat from 'components/Stat/Stat'
import Display from 'components/Display/Display';





const App = () => {
  const [ good, setGood ] = useState(0)
  const [ neutral, setNeutral ] = useState(0)
  const [ bad, setBad ] = useState(0)
  
 
  const changeGood=()=>{
    
    setGood(good + 1)
   
    
   
  }
  const changeNeutral=()=>{
    
    setNeutral(neutral + 1)
   
    
   
  }
  const changeBad=()=>{
    
    setBad(bad + 1)
   
    
   
  }


    return (
    
      <div>
     
        <Display />
        <Button onClick={changeGood}  texte='good'/>
        <Button onClick={changeNeutral}  texte='neutral'/>
        <Button onClick={changeBad}  texte='bad'/>
        <Stat  {...{good,neutral,bad}}/>
        
      </div>
     
    )
  
 
  
 
}

export default App;
