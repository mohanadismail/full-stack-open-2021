import { useState, useRef } from 'react'

const Button = ({name, handler}) => {
  return <button onClick={handler}>{name}</button>
}

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.'
  ]
   
  //let votes = new Uint8Array(anecdotes.length)
  const [votes, setVotes] = useState(new Uint8Array(anecdotes.length))
  const [selected, setSelected] = useState(0)
  let mostVotesIndex = useRef(0)

  const voteHandler = () => {
    const copy = [...votes]
    copy[selected] += 1
    let max = 0
    copy.forEach((value, index) => {
      if (value > max) {
        max = value;
        mostVotesIndex.current = index
      }
    })
    setVotes(copy)
  }

  return (
    <div>
      <h1>Anecdote of the day</h1>
      <p>{anecdotes[selected]}</p>
      <p>has {votes[selected]} votes</p>
      <Button name="next anecdote" handler={() => setSelected(Math.floor(Math.random()*(anecdotes.length)))}/>
      <Button name="vote" handler={voteHandler}/>
      <h1>Anecdote with the most votes</h1>
      <p>{anecdotes[mostVotesIndex.current]}</p>
      <p>has {votes[mostVotesIndex.current]} votes</p>
    </div>
  )
}

export default App
