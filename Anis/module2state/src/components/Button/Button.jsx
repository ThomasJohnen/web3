

import React from 'react'
const Button=({changeCount,texte,delta})=>{

    const handleClick=(e)=>{
        const deltaAttribute=e.target.dataset.delta;
        const delta=parseInt(deltaAttribute);
         changeCount(delta);
    }

    return (
      
        <button onClick={handleClick} data-delta={delta}>{texte}</button>


        



    )

}


export default Button;