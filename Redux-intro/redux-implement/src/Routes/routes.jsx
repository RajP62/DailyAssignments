import { Route, Routes } from "react-router-dom"
import Todo from "../component/todo"
import Edit from "../component/edit"

export default () =>{
    return (<Routes>
        <Route path="/" element={<Todo/>}></Route>
        <Route path="/extra/:title/:status" element={<Edit/>}></Route>
    </Routes>
    )
}