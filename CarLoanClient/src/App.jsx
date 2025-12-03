import { useState } from 'react'
import './App.css'
import DisplayCarLoan from './DisplayCarLoan'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <DisplayCarLoan></DisplayCarLoan>
       </div>
    </>
  )
}

export default App
