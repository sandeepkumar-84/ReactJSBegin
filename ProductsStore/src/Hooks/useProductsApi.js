import { use } from "react";
import { useState, useEffect } from "react";

function useProductsApi()
{
    let [dataProds,SetData] = useState([])
    let [reload,SetReload] = useState(false);

    useEffect(
         ()=>{

            fetch("http://localhost:8080/api/products")
            .then(data=>data.json())
            .then(data=>SetData(data))
        },
        [reload]
    );

    console.log(dataProds);
    const refresh = ()=>{SetReload(prev=>!prev)};
    return {dataProds, refresh};
}




export default useProductsApi;