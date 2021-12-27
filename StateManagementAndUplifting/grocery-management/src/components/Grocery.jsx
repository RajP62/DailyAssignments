import { useState } from "react";
import GroceryInput from '../components/GroceryInput'
import GroceryItem from '../components/GroceryList'
import {v4 as uuidv4} from 'uuid'

function GroceryManagement(){
    let [list, setList] = useState([]);

    const handleClick = (data)=>{
        const payload = {
            title: data,
            id:uuidv4()
        }
        setList([...list, payload])
    }
    const handleDeletion = (id)=>{
        let updated =list.filter(el=> el.id!==id);
        setList(updated);
    }

    return <>
    <GroceryInput handleClick={handleClick}/>
    {list.map(e => <GroceryItem key={uuidv4()} {...e} handleDeletion={handleDeletion}/>)}
    </> 
}


export default GroceryManagement;