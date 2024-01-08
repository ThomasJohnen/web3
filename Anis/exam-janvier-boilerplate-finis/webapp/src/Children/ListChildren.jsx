import Context   from 'contexts/Contexte';
import { useContext } from 'react';
import Children from './Children';
import {Link} from 'react-router-dom';

const ListChildren=()=>{



   const { childrens } = useContext(Context);

    
    return childrens.map((children)=> ( <Link to={`/childrens/${children.id}`}> <Children  key={children.id} {... {children}} /> </Link>) ) 

  
}





export default ListChildren