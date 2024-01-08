
import { useState } from "react"

const AddPerson=(persons,setPersons)=>{
  
    const [newName, setNewName] = useState('')
    const [newNumber, setNewNumber] = useState('')
    const handleNameChange = event => {
        setNewName(event.target.value)
        
      }
      const handleNumberChange = event => {
        setNewNumber(event.target.value)
        
      }
      
      const addPerson = (event) => {
        event.preventDefault()
   //   // if(persons.find(person => person.name === newName)) {
       //   alert(`${newName} is already added to phonebook`)
   //   } else {
          setPersons({ name: newName, phone: newNumber })
           setNewName('')
           setNewNumber('')
  //  }
      }
return(
<div>
    <form onSubmit={addPerson}>
      <div>
           name: <input value={newName} onChange={handleNameChange} />
         
        </div>
      <div> 
           number: <input value={newNumber} onChange={handleNumberChange} />
        </div>
      <div>
          <button type="submit">add</button>
        </div>
    </form>



</div>



)

}





export default AddPerson