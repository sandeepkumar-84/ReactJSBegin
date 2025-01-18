
function Card({name,age})
{
    return(
    
        <>
            <div style={{borderStyle:'solid', width:250, padding:10}}>
                <label> Name: {name} </label><br></br>
                <label> Age: {age} </label><br></br>
            </div>        
        </>
    )
}

export default Card