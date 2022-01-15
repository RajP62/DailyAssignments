import { loadData, saveData } from "../../utils/localstorage";
import { LOGIN_FAILURE, LOGIN_LOADING, LOGIN_SUCCESS, REG_ERROR, REG_LOADING, REG_SUCCESS } from "./actionTypes";

const initState = {
    error: false,
    login: false,
    token: loadData("auth_HelloThunk")
}

export const AuthReducer = (state= initState, {type, payload})=>{
    switch(type){
        case REG_SUCCESS:
            return {...state, loading: false, error: false}
        case REG_LOADING:
            return {...state, loading: true}
        case REG_ERROR:
            return {...state, error: true, loading: false}
        case LOGIN_SUCCESS:
            console.log("entered success route")
            const updated = {auth: true, token: payload.token};
            saveData("auth_HelloThunk", updated);
            return {
                ...state, token: updated, auth: true, loading: false, error:false
            }
        case LOGIN_LOADING:
            return {
                ...state, loading: true
            }
        case LOGIN_FAILURE:
            alert(payload.message); 
            return {
                ...state, error: true, loading: false
            }
        default :
        return state;
    }
}