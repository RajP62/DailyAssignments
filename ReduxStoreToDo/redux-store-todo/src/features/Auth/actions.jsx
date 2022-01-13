import { LOG_IN_SUCCESS,LOG_IN_ERROR, LOG_IN_LOADING } from "./actionTypes"

export const loginUserSuccess = (payload)=>{
    return {
        type: LOG_IN_SUCCESS,
        payload
    }
}

export const loginUserLoading = (payload)=>{
    return {
        type: LOG_IN_LOADING,
        payload
    }
}

export const loginUserError = (payload)=>{
    return {
        type: LOG_IN_ERROR,
        payload
    }
}

export const logOutUser = (payload)=>{
    return {
        type: LOG_OUT
    }
}