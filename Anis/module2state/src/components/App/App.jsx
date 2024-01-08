
import React, { useState,useEffect  } from 'react';
import Display from 'components/Display/Display'
import Button from 'components/Button/Button'





const App = () => {
  const [ counter, setCounter ] = useState( JSON.parse(localStorage.getItem("counter")))
  
 /* const inscreaseByOne=()=>{
    console.log('increasing, value before', counter)
     setCounter(counter+1)
    }
  
  const setToZero=()=>{
    console.log('resetting to zero, value before', counter)
    setCounter(0)
  }
  
  const decreaseByOne=()=>{
    console.log('decreasing, value before', counter)
    setCounter(counter-1)
  }*/
  const changeCount=(delta)=>{
    
    setCounter(counter + delta)
   
    
   
  }
  useEffect(
    () => localStorage.setItem("counter", JSON.stringify(counter))
  );
 
 
  return (
    
    <div>
      <Display  counter={counter}/>
      <Button changeCount={changeCount} delta={1} texte='plus'/>
      <Button changeCount={changeCount} delta={-counter} texte='zero'/>
      <Button changeCount={changeCount} delta={-1} texte='minus'/>
      
    </div>
   
  )
 
}

export default App;
