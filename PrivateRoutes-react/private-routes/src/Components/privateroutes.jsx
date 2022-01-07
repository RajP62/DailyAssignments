import { useContext } from "react"
import { Navigate } from "react-router-dom"
import { AuthContext } from "../Contexts/AuthContext"
export default ({children})=>{
    const {isAuth} = useContext(AuthContext);

    if(!isAuth){
        return <Navigate to={"/login"}></Navigate>
    }
    else{
        return children;
    }
}