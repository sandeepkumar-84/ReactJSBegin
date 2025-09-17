
import { useState } from 'react'
function App() {
  const [color, setColor] = useState('lightgrey')

  return (
    <>
    <div style={{backgroundColor:color}}>
      <div>
        <table>
          <tbody>
          <tr>
            <td>
              <button id="blue" style={{padding:10}} onClick={()=>{setColor('blue')}}>Blue</button>
            </td>
            <td>
              <button id="red" style={{padding:10}} >Red</button>
            </td>
            <td>
              <button id="green" style={{padding:10}}>Green</button>
            </td>        
          </tr>      
          </tbody>
        </table>
      </div>
    </div>
    

    </>
  )
}

export default App
