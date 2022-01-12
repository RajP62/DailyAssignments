import { useEffect, useState } from "react"
import { addToDoError, addToDoLoading, addToDoSuccess, getToDoError, getToDoLoading, getToDoSuccess } from "../../Redux/action";
import { BtnAddTodo, BtnEditTodo, DivInpHolder, InpToDo } from "./HomeStyles"
import { useDispatch, useSelector } from 'react-redux';
import { Link } from "react-router-dom";


export default () => {
    const [text, setText] = useState("");
    const dispatch = useDispatch();
    const { loading, error, todo ,total, completed} = useSelector(state => { return { loading: state.loading, error: state.error, todo: state.todo,total: state.total, completed: state.completed } });

    useEffect(el => {
        dispatch(getToDoLoading());
        fetch("http://localhost:2000/todos").then(res=>res.json()).then(result=>dispatch(getToDoSuccess(result))).catch(e=>dispatch(getToDoError()))
    },[]);

    const addToDo = () => {
        dispatch(addToDoLoading());
        fetch("http://localhost:2000/todos", {
            method: "POST",
            body: JSON.stringify({ title: text, status: false }),
            headers: {
                "Content-Type": "application/json"
            }
        }).then(res => res.json()).then(result => dispatch(addToDoSuccess(result))).catch(err => dispatch(addToDoError(err)));
    }
    return loading ? <h1>Loading...</h1> : error ? <div>Something went wrong</div> :
        <>
            <DivInpHolder>
                <InpToDo value={text} onChange={(e) => setText(e.target.value)} type="text" placeholder="Write Todo..." />
                <BtnAddTodo onClick={addToDo}>Submit</BtnAddTodo>
            </DivInpHolder>

            <h1>Your Todo's</h1>
            <h1>Completed : {completed} Total : {total}</h1>

            {todo.map(el => <Link style={{ display: "block", fontSize: "20px", color: "black", textDecoration: "none", marginBottom: "20px" }} to={`/todo/${el.id}`}>{el.id}. Title is "{el.title}" status is "{(el.status).toString()}" <BtnEditTodo style={{
                color: "white",
                backgroundColor: "purple",
                borderRadius: "10px",
                padding: "5px"
            }}>Edit</BtnEditTodo></Link>)}

        </>

}