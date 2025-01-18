import { useState, useCallback, useEffect, useRef } from 'react'


function App() {
  const [count, setCount] = useState(0)
  let [length, setLength] = useState(8)
  let [numberAllowed, setNumberAllowed] = useState(false)
  let [charactersAllowed, setCharactersAllowed] = useState(false)
  let [password,setPassword] = useState("")
  let passwordRef  = useRef(null);

  const passwordGenerator = useCallback(()=>{

    let pwdString = ""
    let alphaString = "acdefghijklmnopqrstuvwxyz"
    if(numberAllowed) alphaString = alphaString + "1234567890"
    if(numberAllowed) alphaString = alphaString + "!@#%^&*()"
    
    for(let i = 0; i < length; i++)
    {
      let char = Math.floor(Math.random() * alphaString.length+1)
      pwdString = pwdString + alphaString.charAt(char); 
    }
    setPassword(pwdString);
  },[length,numberAllowed,charactersAllowed,setPassword])

  const copyToClipBoard = useCallback(()=>{
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0,40);
    window.navigator.clipboard.writeText(password)
  },[password])

  useEffect(()=>{passwordGenerator()},[length,numberAllowed,charactersAllowed,setPassword])

  return (
    <>
      <div className='text-2xl text-orange-700 text-center'>Password Generator !</div> 
      <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-orange-500 bg-gray-700'>
        
      <div className='flex shadow rounded-lg overflow-hidden mb-4'>
        
        <input 
          type="text" 
          value = {password} 
          className='ouline-none w-full py-1 px-3' 
          placeholder='Password' readOnly
          ref={passwordRef}
          >
        
        </input>
        <button className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'
        onClick={()=>{copyToClipBoard()}}
        >
          
        Copy
        </button>
      </div>
      <div className='flex text-sm gap-x-2'>
      <div className='flex items-center gap-x-1'>
        <input 
          type='range' 
          min={6} 
          max ={40} 
          value = {length} 
          className='cursor-pointer'
          onChange={(e) => {setLength(e.target.value)}} 
        />
        <label>Length: {length}</label>
      </div>
      <div>
          <input type="checkbox" defaultChecked = {numberAllowed} id = "numberInput" 
          onChange={()=>{setNumberAllowed((prev)=>!prev);}}></input>
          <label htmlFor='numberInput'>Numbers</label>
        </div>
        <div>
          <input type="checkbox" defaultChecked = {charactersAllowed} id = "charactersInput" 
          onChange={()=>{setCharactersAllowed((prev)=>!prev);}}></input>
          <label htmlFor='numberInput'>Characters</label>
        </div>        
      </div>
        
        </div>
    </>
  ) 
}

export default App
