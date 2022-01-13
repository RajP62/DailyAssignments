import { ButtonSubmit, InputToDo } from "./loginStyles"
import {useState} from 'react'
import { useDispatch, useSelector } from "react-redux";
import { loginUserLoading, loginUserSuccess,loginUserError } from "../../features/Auth/actions";
import { useNavigate } from "react-router-dom";

export default ()=>{
    const [form, setForm] = useState({});
    const dispatch = useDispatch();
    const { token,token:{auth}, loading, error} = useSelector(state=>({auth: state.AuthReducer.auth, token: state.AuthReducer.token, loading: state.AuthReducer.loading, error: state.AuthReducer.error}));
    const navigate = useNavigate();
    const changeHandler = ({target:{name, value}})=>{
        setForm({
            ...form,[name]:value
        });
    }

    const logIn = ()=>{
        dispatch(loginUserLoading());
       fetch("https://reqres.in/api/login",{
           method: "POST",
           body: JSON.stringify(form),
           headers: {
               "Content-Type":"application/json"
           }
       }).then(res=>res.json()).then(result=>dispatch(loginUserSuccess({auth:true,token:result.token}))).catch(e=>dispatch(loginUserError()));
       navigate("/");
    }
    return loading? <h1>Loading...</h1> : error? <h1>Something went wrong</h1> : auth? <h1>Logged in</h1> : <> 
    <InputToDo onChange={changeHandler} name="email" placeholder="Email"/>
    <InputToDo onChange={changeHandler} name="password" placeholder="Password"/>
    <ButtonSubmit onClick={logIn}>Submit</ButtonSubmit>
    </>
}