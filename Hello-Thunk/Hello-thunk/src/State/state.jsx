import {createStore} from "redux";
import { AuthReducer } from "../Features/Auth/reducer";
import { applyMiddleware } from "redux";
import { compose } from "redux";
import Thunk from "redux-thunk";
// import { useNavigate } from "react-router-dom";

const middleware = (store)=> (next)=> (action)=>{
    if(typeof action === "function"){
        return action(store.dispatch);
    }
    next(action);
}

export const store = createStore(AuthReducer,compose(applyMiddleware(middleware), window.__REDUX_DEVTOOLS_EXTENSION__()));