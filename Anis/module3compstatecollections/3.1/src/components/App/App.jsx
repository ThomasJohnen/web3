
import React, { useState  } from 'react';

import Button from 'components/Button/Button'
import Stat from 'components/Stat/Stat'
import Display from 'components/Display/Display';
import Loading from 'components/Loading/Loading';





const App = () => {
  const [ good, setGood ] = useState(0)
  const [ neutral, setNeutral ] = useState(0)
  const [ bad, setBad ] = useState(0)
  const [ loading, setLoading ] = useState(true)

  setTimeout(()=>setLoading(false),3000)
  
 
 
    if (loading){
      return <Loading />
      }
      const handleClick = (e) => {
        if (e.target.className === 'good') setGood(good + 1);
        else if (e.target.className === 'neutral') setNeutral(neutral + 1);
        else setBad(bad + 1);
      };
    

    return (
    
      <div>
     
        <Display />
        <Button onClick={handleClick}  value='good'/>
        <Button onClick={handleClick}  value='neutral'/>
        <Button onClick={handleClick}  value='bad'/>
        <Stat  {...{good,neutral,bad}}/>
        
      </div>
     
    )
  
  
 
  
 
}

export default App;
