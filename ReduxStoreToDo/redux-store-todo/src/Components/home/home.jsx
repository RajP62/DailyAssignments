import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom";
import { addToDoError, addToDoLoading, addToDoSuccess } from "../../features/Todo/actions";
import { DivInpHolder, InpToDo, BtnAddTodo, BtnEditTodo } from "./homeStyles";
import { Link } from "react-router-dom";

export default () => {
    const [text, setText] = useState("");
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { token: { auth, token }, todos, errorToDo, loadingToDo } = useSelector(state => ({ loading: state.AuthReducer.loading, error: state.AuthReducer.error, token: { auth: state.AuthReducer.token.auth, token: state.AuthReducer.token.token }, todos: state.TodoReducer.todos, errorToDo: state.TodoReducer.error, loadingToDo: state.TodoReducer.loading }));
    useEffect(() => {
        if (!auth) {
            navigate("/login")
        }
    }, []);

    const addToDo = () => {
        dispatch(addToDoLoading());
        const payload = { title: text, status: false };
        text ? dispatch(addToDoSuccess(payload)) : dispatch(addToDoError());
    }
    return errorToDo? <h1>Something went wrong</h1> : loadingToDo? <h1>Loading...</h1> : <>
        <div style={{ textAlign: "center" }}>
            <h1>Your Token is {token}</h1>

            <DivInpHolder>
                <InpToDo value={text} onChange={(e) => setText(e.target.value)} type="text" placeholder="Write Todo..." />
                <BtnAddTodo onClick={addToDo}>Submit</BtnAddTodo>
            </DivInpHolder>
        </div>
        <h1 style={{ textAlign: "center" }}>Your todos are </h1>
        <div style={{ textAlign: "center" }}>
            {todos.map((el, ind) => <Link style={{ display: "block", fontSize: "20px", color: "black", textDecoration: "none", marginBottom: "20px" }} to={`/todo/${ind}`}>{el.id}. Title is "{el.title}" status is "{(el.status).toString()}" <BtnEditTodo style={{
                color: "white",
                backgroundColor: "purple",
                borderRadius: "10px",
                padding: "5px"
            }}>Edit</BtnEditTodo></Link>)}
        </div>
    </>
}