import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div>Router</div>
    <h1 classname="text-3xl font-bold underline">
    Hello world!
  </h1>
    </>
  )
}

export default App
