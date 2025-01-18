import { useState } from 'react'
import ColorChanger from './Components/ColorChanger';

function App() {
   
   
  let [counter,setCounter] = useState(0);
  let [color,setColor] = useState('white');

  return (
    <>
      <div class="flex-none w-64 ..." style={{width:400 ,height:200,borderStyle: 'solid',borderColor:'black', position:'absolute', left:'40%'  }}>   
        <ColorChanger TblColor={color}></ColorChanger>
        <table style={{width:400 ,height:100,borderStyle: 'solid',borderColor:'black'}}>
          <tr>            
            <td style={{backgroundColor:'green'}}>
            <button onClick={()=>{setColor('green')}} style={{backgroundColor:'green',borderColor:'black'}}></button>
            </td>
            <td style={{backgroundColor:'red'}}>
            <button onClick={()=>{setColor('red')}} style={{backgroundColor:'red',borderColor:'black'}}></button>
            </td>
            <td style={{backgroundColor:'blue'}}>
            <button onClick={()=>{setColor('blue')}} style={{backgroundColor:'blue',borderColor:'black'}}></button>
            </td>
          </tr>
        </table>        
      </div>
      
      
    </>
  )
}

export default App
