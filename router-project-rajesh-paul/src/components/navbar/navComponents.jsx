import Style from "styled-components";
import {TiShoppingCart} from "react-icons/ti";
import {Link} from "react-router-dom";
import "./navbar.css";

export const NavCont = Style.div`
background-color: #002E25;
height: 5rem;
display: flex;
justify-content: space-between;
align-items: center;
`;


export const NavContainer = () => {
    return <>
        <NavCont>
            <div><Link className="link" to={`/appearels`}>Appearels</Link>
                <Link className="link" to={`/cases&covers`}>Cases&Covers</Link>
                <Link className="link" to={`/mobile`}>Mobile</Link></div>
            <div style={{marginRight: "20px", display: "flex", alignItems: 'center'}} >
                <Link className="link" to={`/blu-ray`}>Blu-ray</Link>
                <Link className="link" to={`/computers`}>Computers</Link>
                <Link className="link" to={`/electronics`}>Electronics</Link>
                <TiShoppingCart style={{color: "white", width:"30px", height: "30px"}}/>
                </div>
        </NavCont>

    </>
}