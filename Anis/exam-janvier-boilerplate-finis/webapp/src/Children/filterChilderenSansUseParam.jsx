import ButtonDelete from 'Button/ButtonDelete';
import Context   from 'contexts/Contexte';
import AddEvent from 'Event/AddEvent';
import { useEffect, useState } from 'react';
import { useContext } from 'react';
import { useMatch, useParams } from 'react-router';




const FilterChildren=()=>{

   

   const { getChildWithEvents,isLoaded,events: allEvents,childrens } = useContext(Context);
   //const childId=useParams().id
   const match = useMatch("/childrens/:id");
   console.log(match)
   const childId = match?.params?.id;
  /*const childId = match
    ? childrens.find((children) => children.id === match.params.id)
    : undefined;*/
    console.log(childId)
   const [child, setChild] = useState(null);
   const [events,setEvents ] = useState([]);
   
   useEffect(()=>{ 
    const {child,events}= getChildWithEvents(childId)
   /* console.log(childEvent)
    const child=childEvent[0][0]
    const events=childEvent[1]*/
    const sortedEvents = events.sort((a, b) => {
      // Convertir les dates en format timestamp
      const dateA = new Date(a.date).getTime();
      const dateB = new Date(b.date).getTime();
      // Comparer les timestamps
      return dateA < dateB ? 1 : -1;
    });
    setChild(child)
    setEvents(sortedEvents)
   
   } ,[isLoaded])
   useEffect(()=>{ 
    const {events}= getChildWithEvents(childId)
    const sortedEvents = events.sort((a, b) => {
      // Convertir les dates en format timestamp
      const dateA = new Date(a.date).getTime();
      const dateB = new Date(b.date).getTime();
      // Comparer les timestamps
      return dateA < dateB ? 1 : -1;
    });
   
    setEvents(sortedEvents)

   },[allEvents])
 
  

  
  return (

    <div>
     <p>   {child?.name}</p>
     <p>   {child?.birthDate}</p>
     <p>   {child?.gender}</p>
     <AddEvent childId={childId} />
     <h2> Event</h2>
     {events?.map((event) => (
                <div key={event.id}>
                    <p>
                        {event.name}
                    </p>
                    <p>
                        {event.date}
                    </p>
                    <ButtonDelete {...{event}} />
                </div>
            ))}
    </div>

  )
  
}





export default FilterChildren