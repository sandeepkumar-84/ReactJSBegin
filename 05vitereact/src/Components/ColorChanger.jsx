import { useState } from 'react'

function ColorChanger(Props)
{ 
return(
    <div style={{backgroundColor:Props.TblColor,height:100}}>  
    <table id='tblColor'><tr><td></td></tr><tr><td></td></tr><tr><td></td></tr></table>     
    </div>
)
}

export default ColorChanger;
