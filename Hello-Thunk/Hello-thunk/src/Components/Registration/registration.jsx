import { useEffect, useState } from "react"
import { Input, Form } from "../FormComponents/components"
import {useDispatch, useSelector} from "react-redux";
import { regError, register, regLoading, regSuccess } from "../../Features/Auth/actions";
import { useNavigate } from "react-router-dom";

export const Registration = ()=>{
    const [regForm, setRegForm] = useState({});

    const {auth, error, loading} = useSelector(state=>({auth: state.token.auth, error: state.error, loading: state.loading}));

    const changeHandler = ({target: {name, value}})=>{
        setRegForm({
            ...regForm,[name]:value
        });
    }
    const navigate = useNavigate();

    const dispatch = useDispatch();

    const regRequest = (e)=>{
        e.preventDefault();
        let validCheck = regForm.name && regForm.email && regForm.password && regForm.username && regForm.mobile && regForm.description;
        if(validCheck){
           dispatch(register(regForm))
        }
        else{
            alert("Please ensure valid submission");
        }
    }
    useEffect(()=>{
        if(auth){
            navigate("/dashboard")
        }
    })
    return error? <h1>Something went wrong</h1> : loading? <h1>Loading...</h1> : <>
    <Form onSubmit={regRequest}>
        <Input onChange={changeHandler} placeholder="Name" name="name"></Input>
        <Input onChange={changeHandler} placeholder="Email" name="email"></Input>
        <Input onChange={changeHandler} placeholder="Password" name="password"></Input>
        <Input onChange={changeHandler} placeholder="Username" name="username"></Input>
        <Input onChange={changeHandler} placeholder="Mobile" name="mobile"></Input>
        <Input onChange={changeHandler} placeholder="Description" name="description"></Input>
        <Input onChange={changeHandler} type="submit"></Input>
    </Form>
    </>
}