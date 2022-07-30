import { useState } from 'react'

const Button = ({name, handler}) => {
  return <button onClick={handler}>{name}</button>
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <h1>give feedback</h1>
      <Button name="good" handler={() => setGood(good + 1)}/>
      <Button name="neutral" handler={() => setNeutral(neutral + 1)}/>
      <Button name="bad" handler={() => setBad(bad + 1)}/>
      <h1>statistics</h1>
      <p>good {good}</p>
      <p>neutral {neutral}</p>
      <p>bad {bad}</p>
      <p>all {good + neutral + bad}</p>
      <p>average {(good - bad)/(good + bad + neutral)}</p>
      <p>positive {(good/(good + bad + neutral)) * 100}%</p>
    </div>
  )
}

export default App
