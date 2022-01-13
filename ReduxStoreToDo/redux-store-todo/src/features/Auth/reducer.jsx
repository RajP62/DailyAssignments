import { loadData, saveData } from "../../utils/localstorage";
import {LOG_IN_SUCCESS, LOG_IN_ERROR, LOG_IN_LOADING} from "./actionTypes"

const initState = {
    loading: false,
    error: false,
    token: loadData("authToken") || {auth:false, token: ""}
}

export const AuthReducer = (state=initState, {type,payload})=>{
    switch(type){
        case LOG_IN_SUCCESS:
        const updated = {auth:true, token: payload.token}
        saveData("authToken", payload);
        return {
            ...state,
            token: updated,
            loading: false,
            error: false,
        }
        case LOG_IN_ERROR:
            return {
                ...state,error: true, loading: false
            }
        case LOG_IN_LOADING: 
            return {
                ...state, loading: true
            }
        
        default:
            return state
    }
}