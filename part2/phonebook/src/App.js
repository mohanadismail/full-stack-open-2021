import { useState } from 'react'

const Filter = ({filter, handleFilter}) => {
  return (
    <div>
        Filter shown with <input
        value = {filter}
        onChange = {handleFilter}/>
      </div>
  )
}

const PersonForm = ({newName, newNumber, handleNewPerson, handleNewNumber, handleClick}) => {
  return (
    <form>
        <div>
          name: <input 
          value = {newName}
          onChange = {handleNewPerson}/>
        </div>
        <div>
          number: <input
          value = {newNumber}
          onChange = {handleNewNumber}
          />
        </div>
        <div>
          <button type="submit" onClick={handleClick}>add</button>
        </div>
      </form>
  )
}

const Persons = ({persons, filterText}) => {
  return (
    persons.filter(person => person.name.toLowerCase().includes(filterText.toLowerCase())).map(person => <p>{person.name} {person.number}</p>)
  )
}

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filter, setFilter] = useState('')

  const handleNewPerson = (event) => {
    setNewName(event.target.value)
  }

  const handleNewNumber = (event) => {
    setNewNumber(event.target.value)
  }

  const handleFilter = (event) => {
    setFilter(event.target.value)
  }

  const handleClick = (event) => {
    event.preventDefault()
    if (persons.some(person => person.name === newName))
      alert(`${newName} is already added to phonebook`)
    else {
      setPersons(persons.concat({name: newName, number: newNumber}))
      setNewName('')
      setNewNumber('')
    }
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter filter={filter} handleFilter={handleFilter} />
      <h3>Add new contact</h3>
      <PersonForm newName={newName} handleNewPerson={handleNewPerson} newNumber={newNumber} handleNewNumber={handleNewNumber} handleClick={handleClick}/>
      <h3>Numbers</h3>
      <Persons persons={persons} filterText={filter}/>
    </div>
  )
}

export default App
