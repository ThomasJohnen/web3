import { useState } from 'react'
import './App.css'

import Button from '../Button/Button.jsx'
import Statistics from '../Statistics/Statistics.jsx'
import Loading from '../Loading/loading.jsx'


function App() {
  const [good, setGood] = useState(0)
  const [bad, setBad] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [all, setAll] = useState(0)
  const [average, setAverage] = useState(0)
  const [positive, setPositive] = useState(0)

  const [loading, setLoading] = useState(true)

  setTimeout(() => {setLoading(false)}, 3000)

  if(loading) {
    return (
      <Loading />
    )
  }


const handleBadClick = () => {
  const updatedBad = bad + 1
  setBad(updatedBad)
  setAll(good + updatedBad + neutral)
  setAverage((good - updatedBad)/(good + updatedBad + neutral))
  setPositive((good/(updatedBad + good + neutral)) * 100)

}

const handleGoodClick = () => {
  const updatedGood = good + 1
  setGood(updatedGood)
  setAll(updatedGood + bad + neutral)
  setAverage((updatedGood - bad)/(updatedGood + bad + neutral))
  setPositive((updatedGood/(bad + updatedGood + neutral)) * 100)
}

  const handleNeutralClick = () => {
    const updatedNeutral = neutral + 1
    setNeutral(updatedNeutral)
    setAll(good + bad + updatedNeutral)
    setAverage((good - bad)/(good + bad + updatedNeutral))
    setPositive((good/(bad + good + updatedNeutral)) * 100)
  }

if(all === 0) {
  return (
    <div>
      <Button handleClick={handleGoodClick}  text="Good" />
      <Button handleClick={handleNeutralClick} text="Neutral" />
      <Button handleClick={handleBadClick} text="Bad" />
      <p>No feedback given</p>
    </div>
  )
}

return (
  <div>
    <Button handleClick={handleGoodClick}  text="Good" />
    <Button handleClick={handleNeutralClick} text="Neutral" />
    <Button handleClick={handleBadClick} text="Bad" />
    <Statistics good={good} neutral={neutral} bad={bad} all={all} average={average} positive={positive} />
  </div>
  )
}

export default App
