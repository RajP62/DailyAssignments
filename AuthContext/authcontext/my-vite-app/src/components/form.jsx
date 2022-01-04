import { useContext, useState } from "react";
import Style from "styled-components";
import { AuthContext } from "../contexts/tokenContext";

const FormContainer = Style.div`
display: flex;
justify-content: center;
`;
const Form = Style.form`
display: block;
margin: auto;
`;
const Input = Style.input`
display:block;
margin: 10px;
`;

export default ()=>{
    const [form, setForm] = useState({});
    const {setToken} = useContext(AuthContext);


    const handler = (e)=>{
        let {name, value}  = e.target;
        setForm({
            ...form,[name]:value
        });
    }

    const handleClick = (e)=>{
        e.preventDefault();
        fetch('https://reqres.in/api/login',{
            method: "POST",
            body: JSON.stringify(form),
            headers: {
                'Content-Type':"application/json"
            }
        }).then(res=>res.json()).then(result=>{if(result.error) alert("Invalid email and password"); else {setToken(result.token)}});

    }
    return (
        <>
        <FormContainer>
        <Form onSubmit={handleClick}>
            <Input onChange={handler} type="text" placeholder="email" name="email"></Input>
            <Input onChange={handler} type="password" placeholder="password" name="password"></Input>
            <Input type="submit"></Input>
        </Form>
        </FormContainer>
        </>
    )
}