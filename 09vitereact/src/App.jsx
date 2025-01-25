import { useCallback, useState,useEffect,useRef } from 'react'
import './App.css'

function App() {
  
let [length,setLength] = useState(8);
let [numAllowed,setNumAllowed] = useState(false)
let [scharAllowed,setScharAllowed] = useState(false)
let [password,setPassword] = useState("");
let passwordRef  = useRef(null);

const copyToClip = useCallback(()=>{  
    
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0,password.length)
    window.navigator.clipboard.writeText(password)
  },[password] )
const generatePassword = function generatePassword()
{
  let pwdStr = "ABCDEFGIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
  let userPwd = ""
  if(numAllowed)
  {
    pwdStr = pwdStr + "0123456789"
  }
  if(scharAllowed)
  {
    pwdStr = pwdStr + "!£$%^&*@_#"    
  }
  
  let randomNum;
  for(let i=0;i<length;i++)
  {
    randomNum = Math.floor(Math.random() * pwdStr.length)
    
    userPwd = userPwd + pwdStr.charAt(randomNum)
  }  
  setPassword(userPwd)
}

useCallback(generatePassword,[scharAllowed,numAllowed,length,setPassword])

useEffect(()=>{generatePassword()},[length,numAllowed,scharAllowed,setPassword])

  return (
    <>     
         <div className='text-2xl text-orange-700 text-center'>Password Generator !</div> 
      <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-orange-500 bg-gray-700'>
        
      <div className='flex shadow rounded-lg overflow-hidden mb-4'>
        
        <input 
          type="text"          
          value={password} 
          placeholder='Password' readOnly
          ref={passwordRef}
          className='ouline-none w-full py-1 px-3'>        
        </input>
        <button className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0' onClick={()=>{copyToClip()}}>          
        Copy
        </button>
      </div>
      <div className='flex text-sm gap-x-2'>
      <div className='flex items-center gap-x-1'>
        <input type='range' defaultValue={length} onChange={(e)=>{setLength(e.target.value)}} />
        <label>Length: {length}</label>
      </div>
      <div>
          <input type="checkbox"  id = "numberInput" onChange={()=>{setNumAllowed(true)}} ></input>
          <label htmlFor='numberInput'>Numbers</label>
        </div>
        <div>
          <input type="checkbox" id = "charactersInput" onChange={()=>{setScharAllowed(true)}}></input>
          <label htmlFor='numberInput'>Characters</label>
        </div>        
      </div>        
        </div>
    </>    
  )
}

export default App
