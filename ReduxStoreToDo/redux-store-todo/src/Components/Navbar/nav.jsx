import { NavBarContainer } from "./navStyle"
import {Link} from "react-router-dom"

export const Navbar = ()=>{
    return <>
    <NavBarContainer>
        <Link style={{color: "white", marginLeft: "40px", fontWeight: "bold"}} to={`/`}>Home</Link>
        <Link style={{color: "white", marginRight:"40px", fontWeight: "bold"}} to={`/login`}>Login</Link>
    </NavBarContainer>
    </>
}