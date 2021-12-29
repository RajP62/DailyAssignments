import React, { useRef, useState } from "react";
import '../components/employeestyle.css';
import Table from "./table"
import axios from "axios"

export default ({getEmployee})=>{
    
    const [form, setForm] = useState({});
    const inp_ref = useRef(null);
    const [img_url, setImage] = useState("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuIbv-7JSgC23hcGq8qDRBpFzdMBEw8urHdQ&usqp=CAU")

    const handleChange = (e)=>{
        let {name, value, checked,type} = e.target;
        if(name==='profile'){
            value = inp_ref.current.files[0].name;
            const img_url = URL.createObjectURL(inp_ref.current.files[0]);
           setImage(img_url)
        }
        value=type=='checkbox'? checked: value;
        setForm({
            ...form, [name]:value
        });
    }
    const saveTable = (e)=>{
        e.preventDefault();
        console.log(form)
        fetch("http://localhost:3000/employees",{
            method:"POST",
            body:JSON.stringify(form),
            headers:{
                "Content-Type":"application/json"
            }
        }).then(el=>el.json()).then(data=>{
            console.log(data)
        })
    }
    return <>
    <div className="formHolder">
    <form onSubmit={saveTable}>
        <input type="text" onChange={handleChange} placeholder="Name" name="username"/>
        <input type="number" onChange={handleChange} placeholder="Age" name="age"/>
        <input type="text" onChange={handleChange} placeholder="Address" name="address"/>
        <select type="text" onChange={handleChange} placeholder="Department" name="department">
            <option value="it">Information technology</option>
            <option value="sc">Science</option>
            <option value="none">None</option>
        </select>
        <input type="text" onChange={handleChange} placeholder="Salary" name="salary"/>
        <label>Marital Status</label>
        <input type="checkbox" onChange={handleChange} placeholder="Marital Status" name="marriage"/>
        <input ref={inp_ref} type="file" onChange={handleChange} placeholder="Profile pic" name="profile"/>
        <input type="submit"/>
    </form>
    <div style={{
        backgroundImage: `url(${img_url})`,
        backgroundSize: 'cover',
        marginTop: '20px'
    }} className="img_preview">
    </div>
    </div>
    </>
}