import { useState } from "react";
import Style from "styled-components";
import { addToDo, deleteToDo, toggleToDo } from "../Redux/action";
import { useContext } from "react";
import { AppContext } from "../Redux/AppContextProvider";
import {Link} from "react-router-dom";

const DivFlex = Style.div`
display: flex; 
`;
const Div = Style.div`
`;
export default ()=>{
    const [toggle, setToggle] = useState(0);
    const [inp, setInput] = useState("");
    const handleInp = ({target:{value}})=>{
        setInput(value);
    }

    const {dispatch, getState} = useContext(AppContext);
    const {todo} = getState();
    return <>
    <DivFlex>
        <Div>
            <h1>Your todo's</h1>
            {todo.map(el=><>
            <p>title : {el.title} , Status: <span> {el.status.toString()}</span></p>
            <Link to={`/extra/${el.title}/${el.status}`}>Edit</Link>
            </>)}

        </Div>
        <Div>
            <input onChange={handleInp} type="text" placeholder="Write Todo" />
            <button onClick={()=>dispatch(addToDo({title: inp, status: false}))}>Add</button>
        </Div>
    </DivFlex>
    </>
}