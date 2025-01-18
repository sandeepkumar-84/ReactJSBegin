import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div>
      <div><Card ProductName="Kids Jumpsuit" Price="$39.00" ImgSrc = "src/assets/kids-jumpsuit.jpg"></Card></div>
      <div><Card ProductName="Kids Cap" Price="$19.00" ImgSrc = "src/assets/kids-cap.jpg"></Card></div>
      <div><Card ProductName="Kids Shoes" Price="$49.00" ImgSrc = "src/assets/kids-shoes.jpg"></Card></div>
    </div>    
    </>
  )
}

export default App
