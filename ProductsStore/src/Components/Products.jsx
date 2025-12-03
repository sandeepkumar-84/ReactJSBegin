import { useState, useEffect } from "react";
import useProductsApi from "../Hooks/useProductsApi";

function Products()
{
    const {dataProds,refresh} = useProductsApi(); 

    const [ProductName,SetProductName] = useState("");
   

    const handleAddProduct = async ()=>{

        if(ProductName.trim() == ""){alert("product Name cannot be empty;");return;} ;


        const response = await fetch("https://localhost:7029/api/products",
            {
                method:"POST",
                headers:{"Content-Type": "application/json"},
                body:JSON.stringify({name:ProductName})
            }
            
        )
        if(response.ok)
        {
            SetProductName("");
            refresh();
        }
        else
        {
            alert("failed to add product");
        }
    };

    

    return(
        <>
            <h2> Product Lists</h2>
            <input 
                type="text" 
                value={ProductName} 
                onChange={(e)=>{ SetProductName(e.target.value) }} >
            </input>
            <button 
                id = "btnAddProduct"  
                onClick={handleAddProduct}>Add Product
            </button>
            <div>
             <table style={{ border: "1px solid #ccc" }}>
                <tbody>
                   
                {
                    dataProds && dataProds.map( 
                    products => 
                    (
                       
                            <tr><td style={{ border: "1px solid #ccc" }}><label> {products.name}</label></td></tr>  
                    ))

                }
                </tbody>
            </table>
            </div>            
        </>      
    );

}

export default Products;