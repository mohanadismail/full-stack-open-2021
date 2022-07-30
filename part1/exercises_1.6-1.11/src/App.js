import { useState } from 'react'

const Button = ({name, handler}) => {
  return <button onClick={handler}>{name}</button>
}

const StatisticLine = ({name, value, append}) => {
  return <tr>
    <td>{name}</td>
    <td>{value}{append}</td>
  </tr>
}

const Statistics = ({good, neutral, bad}) => {
  if (good !== 0 || neutral !== 0 || bad !== 0) {
    return <div>
    <h1>statistics</h1>
    <table>
      <tbody>
        <StatisticLine name="good" value={good}/>
        <StatisticLine name="neutral" value={neutral}/>
        <StatisticLine name="bad" value={bad}/>
        <StatisticLine name="all" value={good + neutral + bad}/>
        <StatisticLine name="average" value={(good - bad)/(good + bad + neutral)}/>
        <StatisticLine name="positive" value={(good/(good + bad + neutral)) * 100} append="%"/>
      </tbody>
    </table>
  </div>
  }
  else return <div><h1>statistics</h1><p>No feedback given</p></div>
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
      <Statistics good={good} neutral={neutral} bad={bad}/>
    </div>
  )
}

export default App
