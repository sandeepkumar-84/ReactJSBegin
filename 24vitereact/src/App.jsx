import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './Components/Card'


function App() {
  const [count, setCount] = useState(0);


  return (
    <>
      <div>
        <h1>Vite Project for APIs</h1>
        <Card></Card>
      </div>
    </>
  )
}

export default App
