import { useEffect ,useState} from "react";
import { AuthContext } from "../Contexts/AuthContext";
import { TokenContext } from "../Contexts/TokenContext";
import { useContext } from "react";
import {Navigate, useNavigate} from "react-router-dom";
import Dashboard from "./Dashboard";
export default ()=>{
    const [form, setForm] = useState([]);

    const {setAuth} = useContext(AuthContext)

    const {setToken} = useContext(TokenContext);
    
    const changeHandler = ({target:{name, value}})=>{
        setForm({
            ...form,[name]:value
        });
    }

    const navigate = useNavigate();

    
    const submitHandler = (e)=>{
        try{
            e.preventDefault();
            fetch("https://reqres.in/api/login",{
                method:"POST",
                body: JSON.stringify(form),
                headers: {
                    'Content-Type':"application/json"
                }
            }).then(res=>res.json()).then(result=>{if(result.error){
                alert("Invalid Credentials");
            }
            else{
                setAuth(true);
                setToken(result.token);
                navigate("/dashboard");
            }
            })
        }
        catch(e){
            console.log(e);
        }
        
    }
    return <form onSubmit={submitHandler}>
        <h1>Login</h1>
        <input onChange={changeHandler} name="email" type="email" placeholder="Email" />
        <input onChange={changeHandler} name="password" type="password" placeholder="Password" />
        <input type="submit" />
    </form>
}