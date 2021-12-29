import React, { useState } from "react";
import '../components/employeestyle.css';
import Table from "./table"


export default ({getEmployee})=>{
    const [form, setForm] = useState({});

    const handleChange = (e)=>{
        let {name, value, checked,type} = e.target;
        value=type=='checkbox'? checked: value;
        setForm({
            ...form, [name]:value
        });
    }
    const saveTable = (e)=>{
        e.preventDefault();
        console.log(form)
        getEmployee(form);
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
        <input type="file" onChange={handleChange} placeholder="Profile pic" name="profile"/>
        <input type="submit"/>
    </form>
    </div>
    </>
}