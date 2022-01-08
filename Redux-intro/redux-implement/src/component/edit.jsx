import { toggleToDo, deleteToDo } from "../Redux/action";
import { useParams } from "react-router-dom";
import { AppContext } from "../Redux/AppContextProvider";
import { useContext } from "react";
export default ()=>{
    const {dispatch} = useContext(AppContext);
    const {title, status} = useParams();
    return <>
    <p>title : {title} , Status: <span> {status.toString()}</span></p>
    <button onClick={()=>{dispatch(toggleToDo({title, status})); 
    alert("Toggled the status")
}}>Toggle</button>
    <button onClick={()=>{dispatch(deleteToDo({title,status})); 
    alert("Deleted the todo");
}}>Delete</button>
    </>
}