import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  let arr = [1,2,3,4];

  return (
    <>
    <div class="card-list">
      <div class="card">Laptop</div>
      <div class="card">Mobile</div>
      <div class="card">Headphones</div>
      <div class="card">Charger</div>
    </div>  
      
    </>
  )
}

export default App
