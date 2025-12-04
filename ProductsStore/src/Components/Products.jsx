import { useState, useEffect } from "react";
import useProductsApi from "../Hooks/useProductsApi";

function Products()
{
    const {dataProds,refresh} = useProductsApi(); 
    const [ProductName,SetProductName] = useState("");
    const [editid,SetEditId] = useState(null);
    const [editName, setEditName] = useState("");
   

    const handleAddProduct = async ()=>{

        if(ProductName.trim() == ""){alert("product Name cannot be empty;");return;} ;


        const response = await fetch("http://localhost:8080/api/products",
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

    const handleEditClick = (product)=>
    {
           SetEditId(product.id);
           setEditName(product.name);
    }
    const handleUpdate = async () => {
         alert("handleUpdateClick");
        if (editName.trim() === "") {
            alert("Name cannot be empty");
            return;
        }

        const response = await fetch(`http://localhost:8080/api/products/${editid}`, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ id: editid, name: editName })
        });

        if (response.ok) {
            SetEditId(null);
            setEditName("");
            refresh();
        } else {
            alert("Update failed");
        }
    };

    const handleDelete = async (id) =>
        {
              alert("Delete Clicked");

            const response = await fetch(`http://localhost:8080/api/products/${id}`,

                {
                    "method":"DELETE",
                    "header":{"content-type":"application/json"}
                }

            )

            if(response.ok)
            {
                refresh();    
            }
            else
            {
                alert("Delete failed");
            }
        }

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
                       
                            //<tr><td style={{ border: "1px solid #ccc" }}><label> {products.name}</label></td></tr>  
                            <tr key = {products.id}>
                                <td style={{ border: "1px solid #ccc", padding:"8px" }}> 
                                    {
                                        editid == products.id ? (<input type="text" value={editName} onChange={(e) => setEditName(e.target.value)}/>):( <label>{products.name}</label>)
                                    }
                                </td>
                                <td>
                                    {
                                        editid == products.id ? (<button onClick={handleUpdate}>Save</button>):(<button onClick={()=>{handleEditClick(products)}}>Edit</button>)
                                    }
                                </td>
                                <td>
                                        <button onClick={()=>{handleDelete(products.id)}}>Delete</button>
                                </td>                                
                            </tr>                         
                    ))
                }
                </tbody>
            </table>
            </div>            
        </>      
    );

}

export default Products;