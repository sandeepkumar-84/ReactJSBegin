import { useState } from 'react'
import './App.css'
import InputBox from './Components/InputBox';
import useCurrencyInfo from './hooks/useCurrencyInfo';

function App() {
  const [count, setCount] = useState(0)
  const [amount, setAmount] = useState(0)
  const [from, setFrom] = useState("usd")
  const [to, setTo] = useState("inr")
  const currencyInfo = useCurrencyInfo(from)
  const options = Object.keys(currencyInfo)

  return (
    <>      
    
    <div className="w-full">
    <div className="relative w-full h-0.5">
    <div className="w-full mb-1">
      <InputBox label="From" amount={amount} currencyOptions={options}/>
    </div>
    <div className="w-full mb-1">
      <InputBox label="To" amount={amount} currencyOptions={options}
      onCurrencyChange={(currency) => setAmount(amount)}
      />
    </div>
    </div>
    
    </div>
    </>
  )
}

export default App
