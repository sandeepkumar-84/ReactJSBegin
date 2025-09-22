import { useState } from 'react'
import './App.css'
import UserContextprovider from './Context/UserContextProvider'
import Profile from './Components/Profile'
import Login from './Components/Login'


function App() {

  return (
    <UserContextprovider>
      <h1 className='text-3xl bg-orange-500'>Context API</h1>     
      <Login/>
      <Profile/>
    </UserContextprovider>
  )
}

export default App
