import { Route ,Routes} from "react-router-dom";
import { Dashboard } from "../Components/Dashboard/dashboard";
import { Login } from "../Components/Login/login";
import { Registration } from "../Components/Registration/registration";

export default ()=>{
    return <Routes>
        <Route path={`/registration`} element={<Registration/>}></Route>
        <Route path={`/login`} element={<Login/>}></Route>
        <Route path={`/dashboard`} element={<Dashboard/>}></Route>
    </Routes>
}