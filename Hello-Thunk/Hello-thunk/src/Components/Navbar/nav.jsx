import { NavCont } from "./navStyles"
import { Link } from "react-router-dom"

export const Navbar = ()=>{
    return <>
    <NavCont>
    <Link style={{color: "white"}} to={`/registration`}>Registration</Link>
    <Link style={{color: "white"}} to={`/dashboard`}>Dashboard</Link>
    <Link style={{color: "white"}} to={`/login`}>Login</Link>
    </NavCont>
    </>
}
