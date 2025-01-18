import { useState } from 'react'
import Card from './Components/Cards'

/* older way of manupulating the html where the ids of the elements are grabbed at all the places where the value is required to be updated. 

function App() {
  const [count, setCount] = useState(0)
  let count1 = 0
  return (
    <>    
      <div style={{padding:10}}>
        <button onClick={()=>{count1=iCount(count1)}} id="btnId"> Click to Add
        </button>
      </div>
      <div>
        <label id="lblCount"> </label>
      </div>
    </>
  )
}

let iCount = function (c)
{ 
  c = c+1
  setText(c)
  return c
}

let setText = function(c)
{
  let lblt = "Count is " 
  document.getElementById('lblCount').innerText  = lblt + c.toString()
  document.getElementById('btnId').innerText  = lblt + c.toString()
}
*/

/* useState is used to maintain the state of the count and changes reflects everywhere count is present

function App()
{
  let [count, setCount] = useState(0);

  return (
    <>
    <div style={{padding:10}}>
      <button onClick={()=>{setCount(count+1)}}> Click me to add - {count}

      </button>
      <div>
      <label>
        Current count value = {count} 
      </label>
      </div>
    </div>
    </>
  )  
}
 

function App()
{
  let [count,setCount] = useState(0)

  return (
    <>
      <table>
        <tr>
            <td>
            <div style={{padding:10, width:150, borderWidth:1, textAlign:'center'}}>
                  <span>
                  <button style={{color:'red'}} onClick={()=>{setCount(count-1)}} >Decrease by 1</button>
                  </span>       
                </div>                
            </td>
            <td>
            <td>
          <div style={{padding:10, width:150, borderColor:'black', borderWidth:1, borderStyle:'solid', textAlign:'center'}}>
          <label> Counter Values is {count} </label></div>
          </td>              
            </td>
            <td>
            <div style={{padding:10, width:150, borderWidth:1,  textAlign:'center'}}>
                  <span>
                  <button style={{color:'green'}} onClick={()=>{setCount(count+1)}}>Increase by 1</button>
                  </span>       
                </div>                
            </td>
          </tr>
      </table>

      
        
    </>
  )
}



function App()
{
   return(
    <>
    <div>
      <Card name="Sandeep" age = "38"></Card>
      <Card name="Ethen" age = "30"></Card>
    </div>
    </>
   )
}
 */





export default App
