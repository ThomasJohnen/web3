
import React from 'react'
import StatisticLine from './StatisticLine';

const Stat=({good,neutral,bad})=>{
  const pos=" positive:modifier formule"
  const av="average:modifier formule"
  const stattt="average:modifier formule"

    if(good!==0 || neutral!==0 || bad!==0){
    return (
    
      
   <>
    
       {stattt}
      <StatisticLine text="good" value ={good} />
      <StatisticLine text="neutral" value ={neutral} />
      <StatisticLine text="bad" value ={bad} />
      
      {pos}
      {av}
      
      </>
  
      
       
      );
    };
    
        return (
    
            <div>
           
             <br></br>
              No FeedBack given
              
            </div>
           
          )
    

}





export default Stat;