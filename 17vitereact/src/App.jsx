import { useState, useEffect } from 'react'
import './App.css'
import { InputBox } from './components';
import useCurrencyInfo from './hooks/useCurrencyInfo';
function App() {

  let [amount, setAmount] = useState(0)
  let [converterdAmount, setConverterdAmount] = useState(0)
  let [from, setFrom] = useState("usd")
  let [to, setTo] = useState("inr")
  let currencyInfo = useCurrencyInfo(from)

    let currObj = currencyInfo[from]    
  let options = Object.keys(currencyInfo[from] || {})
  //let options = ["test1","test2","test3"]


  let swap = ()=>{
    setFrom(to)
    setTo(from)
    setConverterdAmount(amount)
    setAmount(converterdAmount)
  }

const convert = () => {
  const mult = currencyInfo[from]?.[to] || 1
  setConverterdAmount(amount * mult)
}

useEffect(() => {
  const mult = currencyInfo[from]?.[to] || 1
  setConverterdAmount(amount * mult)
}, [amount, from, to, currencyInfo])

  return (
    <>
      <div
            className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat">
            <div className="w-full">
                <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
                    <form
                        onSubmit={(e) => {
                            e.preventDefault();
                            convert()
                           
                        }}
                    >
                        <div className="w-full mb-1">
                            <InputBox
                                label="From"
                                amount = {amount}
                                onAmountChange = {(amount)=>{setAmount(amount);}}
                                onCurrencyChange = {(currency)=>{setFrom(currency)}}
                                currencyOptions = {options}
                                selectCurrency = {from}
                                amountDisable = {false}
                                currencyDisable = {false}

                            />
                        </div>
                        <div className="relative w-full h-0.5">
                            <button
                                type="button"
                                className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                                onClick={swap}
                            >
                                swap
                            </button>
                        </div>
                        <div className="w-full mt-1 mb-4">
                            <InputBox
                                label="To"                             
                                amount = {converterdAmount}
                                onAmountChange = {(converterdAmount)=>{setAmount(converterdAmount)}}
                                onCurrencyChange = {(currency)=>{setTo(currency)}}
                                currencyOptions = {options}
                                selectCurrency = {to}
                                amountDisable = {false}
                                currencyDisable = {false}                                
                            />
                        </div>
                        <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg">
                            Convert {from.toUpperCase()} to {to.toUpperCase()}
                        </button>
                    </form>
                </div>
            </div>
        </div>
    </>
  )
}

export default App
