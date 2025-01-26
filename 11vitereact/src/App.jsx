import { useState } from 'react'

import './App.css'

import Login from './components/Login'
import UserConextProvider from './Context/UserContextProvider'
import Profile from './components/Profile'

function App() {
  const [count, setCount] = useState(0)

  return (
    <UserConextProvider>
      <Login></Login>
      <Profile></Profile>
    </UserConextProvider>
  )
}

export default App
