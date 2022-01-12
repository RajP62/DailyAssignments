import { InpToDo,BtnAddTodo } from "../Home/HomeStyles";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { editTitleError, editTitleLoading, editTitleSuccess, removeToDoError, removeToDoLoading, removeToDoSuccess, toggleToDoError, toggleToDoLoading, toggleToDoSuccess } from "../../Redux/action";


export default ()=>{
    const navigate = useNavigate();
    const [texttochange,setTextToChange] = useState("");
    const {id} = useParams();
    const dispatch = useDispatch();
    const editHandler = ({target,target:{name}})=>{
        if(name==="changeTitle"){
            const payload = {title: texttochange}
            dispatch(editTitleLoading());
            fetch(`http://localhost:2000/todos/${id}`,{
                method:"PATCH",
                body: JSON.stringify(payload),
                headers:{
                    "Content-Type":"application/json"
                }
            }).then(res=>res.json()).then(result=>dispatch(editTitleSuccess(result))).catch(e=>dispatch(editTitleError()));
        }
        else if(name==="removeToDo"){
            dispatch(removeToDoLoading());
            fetch(`http://localhost:2000/todos/${id}`,{
                method:"DELETE",
            }).then(res=>res.json()).then(result=>{dispatch(removeToDoSuccess({id})); navigate('/home')}).catch(e=>dispatch(removeToDoError()));
        }
    } 
    
    const toggleHandler = (currentStat)=>{
        dispatch(toggleToDoLoading());
        const payload = {status: !currentStat};
        fetch(`http://localhost:2000/todos/${id}`,{
                method:"PATCH",
                body: JSON.stringify(payload),
                headers:{
                    "Content-Type":"application/json"
                }
            }).then(res=>res.json()).then(result=>dispatch(toggleToDoSuccess(result))).catch(e=>dispatch(toggleToDoError()));
    }

    const {loading, todo, error} = useSelector(state=>({error: state.error, loading: state.loading, todo: state.todo}));
    
    return loading? <h1>Loading...</h1> : error? <h1>Something went wrong</h1> : <>
    <InpToDo value={texttochange} onChange={(e)=>setTextToChange(e.target.value)} placeholder="Enter the title to change..."></InpToDo>
    <BtnAddTodo name="changeTitle" onClick={editHandler}>Edit</BtnAddTodo>
    {todo.map(el=>el.id==id?<> <h1>Title is {el.title} & Status is {(el.status).toString()}</h1> <button name="toggleStatus" onClick={()=>toggleHandler(el.status)}>Toggle status</button>
    <button name="removeToDo" onClick={editHandler}>Remove</button> </>  : null)}
    <button onClick={()=>navigate("/home")}>GoToHomePage</button>
    </>
}