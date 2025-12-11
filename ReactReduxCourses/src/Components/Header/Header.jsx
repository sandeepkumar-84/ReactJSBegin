import '../../index.css'
import {NavLink} from "react-router-dom"
export default function Header()

{
    return(
        <header>
            
            <nav>
                <NavLink to="/" >Home</NavLink>
                {" | "}
                <NavLink to="/about" className={({isActive})=>(isActive  ? "active":"")}>About</NavLink>
                {" | "}
                <NavLink to="/courses" className={({isActive})=>(isActive  ? "active":"")}>Courses</NavLink>                
            </nav>                   
        </header>
    )
}