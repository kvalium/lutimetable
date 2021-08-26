import React, { useState } from 'react'
import { useWeek } from './Api'
import './App.css'

function App() {
  const {loading, res: week, error} = useWeek()
  if(loading || !week) return <p>loading</p>

  if (error) {
    return (
      <>
        <h2>An error occured 😟</h2>
        <p>{error}</p>
      </>
    )
  }

  return (
    <ul>
        {Object.keys(week).map(d => <li>{d}: <ul><li>{week[d].morning}</li><li>{week[d].afternoon}</li></ul></li>)}
      </ul>
  )
}

export default App
