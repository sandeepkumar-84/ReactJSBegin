import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {
  
  /*
    let [data,setData] = useState([])   
  
    useEffect(()=>{

    fetch("https://api.github.com/users/sandeepkumar-84")
    .then((response)=>{return response.json()})
    .then((data)=>{setData(data)})

  },[])

  */

  const data = useLoaderData()
  return (
    <div className='bg-gray-600 text-white text-3xl p-4'>Github followers: {data.followers} 
    <img src={data.avatar_url} alt='Git Picture' width={200}></img>
    </div>
  )
}

export default Github

export const gitDataLoader = async () => {

    const response = await fetch('https://api.github.com/users/sandeepkumar-84') 

    return response.json()
}