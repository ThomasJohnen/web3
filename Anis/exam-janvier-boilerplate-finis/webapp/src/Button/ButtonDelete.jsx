import { useContext } from "react";


import { Context  } from 'contexts/Contexte';


const ButtonDelete = ({event}) => {

    const { deletEvent } = useContext(Context);

    const handleClick = (e) => {
        const deltaAttribute = e.target.dataset.delta;
        const delta = parseInt(deltaAttribute);
        deletEvent(event);
    }


   
    return <button onClick={handleClick}>Supprimer Evenement</button>;
  };
  
  export default ButtonDelete;
  