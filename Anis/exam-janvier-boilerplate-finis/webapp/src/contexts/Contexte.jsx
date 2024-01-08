import { useState,useEffect } from "react";
import React  from "react";

import * as eventService from "services/eventsApi";
import * as childrenService from "services/childrenApi";


const Context=React.createContext(null);



const ProviderWrapper  =({children})=>{
 /*const [nameChildren, setNameChildrens] = useState('');
  const [birthDate, setBirthday] = useState('');
  const [gender, setGender] = useState('');
 
  const [date, setDate] = useState('');
  const [child, setChild] = useState('');
  const [nameEvent, setNameEvent] = useState('');*/
   
  const [childrens, setChildrens] = useState([]);
  const [events, setEvent] = useState([]);
  const [isLoaded,setIsloaded ] = useState(false);
 
   useEffect(()=>childrens.length && events.length ?setIsloaded(true):undefined ,[childrens,events]);
     const initialLoadEvent = () => {
      eventService.retrieveAll().then((es) => {
        setEvent(es);
       
      });
      
    };
    useEffect(initialLoadEvent,[]);

    const initialLoadChildren = () => {
      childrenService.retrieveAll().then((cs) => {
        setChildrens(cs);
       
      });
    };
    useEffect(initialLoadChildren,[]);


    const getChildWithEvents=(id)=>{
     
      const child= childrens.find(child=>child.id ===id );

      const childEvents = events.filter(event =>event.child ===id);
        
      //return [child,event];
      return {
        child,
        events: childEvents
      }



    }
    


    const deletEvent=(event)=>{
     // const eventToDelete=events.find((e)=>e.id===event.id);
      eventService.remove(event.id).then((r)=>console.log(r));
      setEvent(events.filter((e)=>e.id!==event.id))


    };
   


    const addEvent=(event)=>{
   //  eventService.create(event).then((resp)=>console.log(r));
     eventService.create(event).then(resp => setEvent([...events, resp.data]));
     let newEvent=[...events, event]
     setEvent(newEvent)

    }


    
    
    
    const exposedValue = {
      childrens,
      events,
      getChildWithEvents,
      deletEvent,
      addEvent,
      isLoaded,
     
      
     };
  
  
  return <Context.Provider value={exposedValue}>{children}</Context.Provider>
  
  
  }
  
  
  
  
  export{Context,ProviderWrapper}
  export default Context;