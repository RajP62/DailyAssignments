import {Route, Routes} from "react-router-dom";
import EditToDo from "../Components/EditTodo/EditToDo";
import Home from "../Components/home/home";
import Login from "../Components/Login/login";

export default ()=>{
    return (
        <Routes>
            <Route path={`/`} element={<Home/>}></Route>
            <Route path={`/login`} element={<Login/>}></Route>
            <Route path={`/todo/:id`} element={<EditToDo/>}></Route>
        </Routes>
    )
}