
import React from 'react'
import StatisticLine from './StatisticLine';

const Stat=({good,neutral,bad})=>{

    if(good!==0 || neutral!==0 || bad!==0){
    return (
    
    <div>
    
       <h1>Statistics</h1>
      <StatisticLine text="good" value ={good} />
      <StatisticLine text="neutral" value ={neutral} />
      <StatisticLine text="bad" value ={bad} />
      average:modifier formule
      
      positive:modifier formule
     
  
    </div>
       
      )
    }
    
        return (
    
            <div>
           
             <br></br>
              No FeedBack given
              
            </div>
           
          )
    

}





export default Stat;