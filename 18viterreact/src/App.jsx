import { useState } from 'react'
import './App.css'
import Header  from './Header/Header'
import Footer from './Footer/Footer'
import Home from './Home/Home'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <h1 className='text-3xml bg-red-500' > Router</h1>
    <home></home>
    </>
  )
}

export default App
