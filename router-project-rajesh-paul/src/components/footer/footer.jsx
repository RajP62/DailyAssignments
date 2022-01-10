import { NavCont } from "../navbar/navComponents";
import {Link} from "react-router-dom";
import "../navbar/navbar.css";

export default ()=>{
    return <NavCont style={{position: "fixed", bottom:"0px", width:"100%"}}>
        <Link className="link" to={`/about`}>About us</Link>
        <Link className="link" to={`/faq`}>FAQ</Link>
        <Link className="link" to={`/contactus`}>Contact Us</Link>
    </NavCont>
}