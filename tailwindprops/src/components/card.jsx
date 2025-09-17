import React from "react";

function Cards({userName, musicCategory})
{
    return(
      
     <div className="flex flex-col items-center p-7 rounded-2xl">
      <div>
        <img className="size-48 shadow-xl rounded-md" alt="" src="src/assets/pic-2.png" />
      </div>
      <div className="flex">        
        <span className="font-medium text-sky-500">User: </span>
        <span className="font-medium text-sky-500">{userName}</span>                  
      </div>  
      <div className="flex">        
        <span className="font-medium text-sky-500">Music: </span>
        <span className="font-medium text-sky-500">{musicCategory}</span>                  
      </div>        
  </div>  
    )
}

export default Cards;