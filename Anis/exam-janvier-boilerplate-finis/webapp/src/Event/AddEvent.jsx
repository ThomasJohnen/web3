import { useContext, useState } from 'react';

import { Context } from 'contexts/Contexte';

 



const AddEvent = ({childId}) => {
   
    
    
  
    const [nameEvent, setNameEvent] = useState('');


  const { addEvent } = useContext(Context);

  const handleOnChangeName = (e) => setNameEvent(e.target.value);
  const now = new Date();
  const nowISO = now.toISOString();
  

  const handleOnSubmit = (e) => {

    const event= {
      "date":nowISO,
      "child":childId,
      "name":nameEvent
    }
    e.preventDefault();
    addEvent(event);
    setNameEvent('');
  };

  return (
    <form onSubmit={handleOnSubmit}>
      <input
        placeholder="enter the name "
        value={nameEvent}
        onChange={handleOnChangeName}
        required
      />
     



      <input type="submit" value="Add event" />
    </form>
  );
};

export default AddEvent;