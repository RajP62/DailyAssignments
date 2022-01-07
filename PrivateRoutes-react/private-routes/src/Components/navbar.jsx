import { Link } from "react-router-dom"

export default ()=>{
    return <>
    <Link style={{display: "block"}} to={'/'}>Home</Link>
    <Link style={{display: "block"}} to={'/login'}>Login</Link>
    <Link style={{display: "block"}} to={'/dashboard'}>Dashboard</Link>
    <Link style={{display: "block"}} to={'/dashboard/settings'}>Settings</Link>
    </>

}