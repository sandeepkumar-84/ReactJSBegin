import Cards from './Components/Card';
import { useState } from 'react'
import './App.css'

function App() 
{  
  let [counter, setCounter] = useState(16);

    const AddValue = () => { setCounter(counter + 1); }
    const SubsValue = () => { setCounter(counter - 1) };

    function addVal()
    {
      setCounter(counter + 1)
    }

          
  return (
    <>
     <div id='div1'>
      <label id='label1'> Counter Value = {counter} </label></div>
      <div><button onClick={AddValue}>Add</button></div>
      <div><button onClick={SubsValue}>Substract</button></div>
      <div><textarea name="postContent" rows={4} cols={40} defaultValue={counter}></textarea></div>
     <Cards></Cards>
    </>
  )
}

export default App
