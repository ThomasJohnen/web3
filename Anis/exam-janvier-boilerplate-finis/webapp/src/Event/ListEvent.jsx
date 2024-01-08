import { Context } from 'contexts/Contexte';
import { useContext } from 'react';
import Event from 'Event/Event';



const ListEvent=()=>{

    const { events } = useContext(Context);
    return events.map((event)=>( <Event  key={event.id}  {... {event}} /> )); } ;

    






export default ListEvent