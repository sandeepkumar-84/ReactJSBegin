import { useState } from 'react'
import './App.css'

import Products from './Components/Products'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <Products></Products>
      </div>     
    </>
  )
}

export default App
