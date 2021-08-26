import React, { useState } from 'react'
import { useWeek } from './Api'
import './App.css'

function App() {
  const {loading, res: week, error} = useWeek()
  if(loading || !week) return "loading"

  if (error) {
    return (
      <>
        <h2>An error occured 😟</h2>
        <p>{error}</p>
      </>
    )
  }
  console.log({loading, week})
  return (
    <ul>
        {Object.keys(week).map(d => <li>{d}: <ul><li>{week[d].morning}</li><li>{week[d].afternoon}</li></ul></li>)}
      </ul>
  )
}

export default App
