import Style from "styled-components";
import { useContext } from "react";
import { AuthContext } from "../contexts/tokenContext";

const Navbar = Style.nav`
    height: 100px;
    border: 2px solid purple;
    background: black;
    display: flex;
    justify-content: center;
    align-items: center;  
    font-weight: bold;
    font-size: 30px;
    cursor: pointer;  
`;
const List = Style.li`
color: white;
list-style: none;
`;

export default ()=>{
    const {token} = useContext(AuthContext);
    return (<Navbar>
        <List>{token? "Logout":"Login"}</List>
    </Navbar>)
}