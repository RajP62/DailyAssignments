import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { login, loginError, loginLoading, loginSuccess } from "../../Features/Auth/actions";
import { Input, Form } from "../FormComponents/components";

export const Login = ()=>{
    const [loginForm, setLogForm] = useState({});
    const changeHandler = ({target: {name,value}})=>{
        setLogForm({
            ...loginForm, [name]:value
        });
    }

    const {auth, error, loading} = useSelector(state=>({auth: state.token.auth, error: state.error, loading: state.loading}));
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const requestLogin = (e)=>{
        e.preventDefault();
        const valCheck = loginForm.username && loginForm.password;
        if(valCheck){
            dispatch(login(loginForm)); 
        }
        else{
            alert("Please ensure valid submission");
        }

    }
    useEffect(()=>{
        if(auth){
            navigate("/dashboard");
        }
    })
    return loading? <h1>Loading...</h1> : error? <h1>Something went wrong</h1> : <>
    <Form onSubmit={requestLogin}>
        <Input onChange={changeHandler} placeholder="Username" name="username"></Input>
        <Input onChange={changeHandler} placeholder="Password" name="password"></Input>
        <Input onChange={changeHandler} type="submit"></Input>
    </Form>
    </>
}