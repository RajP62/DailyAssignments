import {useState} from "react"

function GroceryInput({handleClick}){
    const [item, setItem] = useState("");
    const handleChange = (e)=>{
        setItem(e.target.value);
    }

    const onSubmit = ()=>{
        handleClick(item);
    }
    return <>
    <input type="text" placeholder="Add Grocery" onChange={handleChange}/>
    <button onClick={onSubmit}>Submit</button>
    </>
}

export default GroceryInput;