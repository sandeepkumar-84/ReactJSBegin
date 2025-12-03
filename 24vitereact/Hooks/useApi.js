import { useState, useEffect } from "react";

function useApi()
{
    const [data,SetData] = useState([]);

    useEffect
    ( 
        ()=>{ 
                fetch("https://localhost:7074/api/products")
                .then((data) => data.json())
                .then((data) => SetData(data));            
           },[]
    )
    
    console.log(data);
    return data;
    
}

export default useApi;