



import { useState } from "react"
      
        const Person=()=> {
        
        
          const [persons, setPersons] = useState([
          { name: 'Arto Hellas',number:'0487652326' }
        ]) 
        
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
        if(persons.find(person => person.name === newName)) {
         alert(`${newName} is already added to phonebook`)
         } else {
              setPersons(persons.concat({ name: newName, number: newNumber }))
               setNewName('')
               setNewNumber('')
        }
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
       
        <h2>Numbers</h2>
            {persons.map(person => <p key={person.name}>{person.name} {person.number}</p>)}
    
    
    </div>
    
    
    
    )
    

        
       
    }









      export default Person