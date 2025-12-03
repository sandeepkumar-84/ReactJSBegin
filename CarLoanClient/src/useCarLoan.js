import { useState,useEffect } from "react";

function useCarLoan()
{
    let [data,SetData] = useState([]);
    
    useEffect
    (
    ()=>{

        fetch("https://localhost:7141/api/carloans")
        .then((data)=>data.json())
        .then((data)=>SetData(data));
    }   
    ,[])

    console.log(data);
    return data;
}

export default useCarLoan;