import { InpToDo,BtnAddTodo } from "../Home/HomeStyles";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { deleteTodoLoading, deleteTodoSuccess, editTitleError, editTitleLoading, editTitleSuccess, toggleToDoLoading, toggleTodoSuccess } from "../../features/Todo/actions";


export default ()=>{
    const navigate = useNavigate();
    const [texttochange,setTextToChange] = useState("");
    const {id} = useParams();
    const {todos } = useSelector(state => ({ todos: state.TodoReducer.todos }));
    const dispatch = useDispatch();
    const editHandler = ({target,target:{name}})=>{
        if(name==="changeTitle"){
            dispatch(editTitleLoading());
            texttochange? dispatch(editTitleSuccess({title:texttochange, id})) : dispatch(editTitleError());
        }
        else if(name==="removeToDo"){
            const payload = {id};
            dispatch(deleteTodoLoading());
            dispatch(deleteTodoSuccess(payload));
            navigate("/");

        }
        else if(name==="toggleStatus"){
            const payload = {id};
            dispatch(toggleToDoLoading());
            dispatch(toggleTodoSuccess(payload));
        }
    } 

    const {loading, todo, error} = useSelector(state=>({error: state.error, loading: state.loading, todo: state.todo}));
    
    return loading? <h1>Loading...</h1> : error? <h1>Something went wrong</h1> : <>
    <InpToDo value={texttochange} onChange={(e)=>setTextToChange(e.target.value)} placeholder="Enter the title to change..."></InpToDo>
    <BtnAddTodo name="changeTitle" onClick={editHandler}>Edit</BtnAddTodo>
    {todos.map((el,ind)=>ind==id?<> <h1>Title is {el.title} & Status is {(el.status).toString()}</h1> <button name="toggleStatus" onClick={editHandler}>Toggle status</button>
    <button name="removeToDo" onClick={editHandler}>Remove</button> </>  : null)}
    <button onClick={()=>navigate("/")}>GoToHomePage</button>
    </>
}