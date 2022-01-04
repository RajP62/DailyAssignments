import { useContext } from "react";
import { AuthContext } from "../contexts/tokenContext";
import Style from "styled-components";

const StatusHolder = Style.div`
text-align: center; 
`;
export default ()=>{
    const {token} = useContext(AuthContext);
    return(
        <>
        <StatusHolder>
        <h1>Status: {token? "The user is logged in": "The user is not logged in"}</h1>
        <h1>Token: {token? token : "Not Available"}</h1>
        </StatusHolder>
        </>
    )
}