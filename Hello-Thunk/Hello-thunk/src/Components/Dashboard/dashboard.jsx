import { GithubSearchBtn, GithubSearchInp } from "./dashboardStyles"
import { Form,Input } from "../FormComponents/components"
import { useState, useEffect } from "react"
import { getGithubUsers } from "../../Features/Auth/actions";
import { useDispatch, useSelector } from "react-redux";
import Matched from "./matched";
import { useNavigate } from "react-router-dom";


export const Dashboard = ()=>{
    const [name, setName] = useState("");
    const navigate = useNavigate();
    const {auth, error, loading} = useSelector(state=>({auth: state.token.auth, error: state.error, loading: state.loading}));
    const [page, setPage] = useState(1);
    const dispatch = useDispatch();
    const [usersData, setUsersData] = useState({items: []});
    const showGhUsers = (e)=>{
        let data = dispatch(getGithubUsers(name,page));
        data.then(res=>{
            console.log(res)
            setUsersData(res);
        })
    }
    useEffect(()=>{
        if(!auth){
            navigate("/registration");
        }
    })

    return <> 
    <div style={{display: "flex", alignItems: "center", justifyContent: "center"}}>
        <Input style={{width: "50%", display: "inline"}} onChange={(e)=>setName(e.target.value)} placeholder="Username" name="username"></Input>
        <button onClick={showGhUsers} type="submit">Submit</button>
        </div>
    <div style={{margin: "auto", textAlign: "center"}}>
    <h1 style={{color: "blue", fontSize: "30px"}}>Users</h1>
    <Matched page={page} name={name} showGhUsers={showGhUsers} data = {usersData} setPage={setPage}/>
    </div>
    </>
}