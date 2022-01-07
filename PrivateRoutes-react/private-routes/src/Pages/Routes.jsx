import {Route, Routes} from "react-router-dom";
import Home from "../Components/Home";
import Login from "../Components/Login";
import Dashboard from "../Components/Dashboard";
import Settings from "../Components/Settings";
import Privateroutes from "../Components/privateroutes";

export default ()=>{
    return (
    <Routes>
    <Route path={`/`} element={<Home/>}></Route>
    <Route path={`/login`} element={<Login/>}></Route>
    <Route path={`/dashboard`} element={<Privateroutes><Dashboard/></Privateroutes>}></Route>
    <Route path={'/dashboard/settings'} element={<Privateroutes><Settings/></Privateroutes>}></Route>
    <Route path={`/dashboard`} element={<Dashboard/>}></Route>
    <Route path={`/settings`} element={<Settings/>}></Route>
    <Route path={`*`} element={<h1>Unauthorised request</h1>}></Route>
    </Routes>
    )
}