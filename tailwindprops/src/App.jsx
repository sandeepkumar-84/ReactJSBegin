import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Cards from './components/card'
function App() {
  const [count, setCount] = useState(0)

  let userObj1 = {userName : "Sandeep" , musicCategory : "Synth"}
  let userObj2 = {userName : "Jhon" , musicCategory : "rock"}

  return (
    <>
    <table>
      <tr>
        <td>
          <Cards {...userObj1} />
        </td>
        <td>
          <Cards {...userObj2} />
        </td>        
        </tr> 
    </table>    
     
    </>
    
  )
}

export default App
