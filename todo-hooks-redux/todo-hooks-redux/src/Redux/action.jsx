import { ADD_TODO_ERROR, ADD_TODO_LOADING, ADD_TODO_SUCCESS, EDIT_TITLE_ERROR, EDIT_TITLE_LOADING, EDIT_TITLE_SUCCESS, GET_TODO_ERROR, GET_TODO_LOADING, GET_TODO_SUCCESS, REMOVE_TODO_ERROR, REMOVE_TODO_LOADING, REMOVE_TODO_SUCCESS, TOGGLE_TODO_ERROR, TOGGLE_TODO_LOADING, TOGGLE_TODO_SUCCESS} from "./actionTypes"

export const addToDoSuccess = (payload)=>{
    return {
        type: ADD_TODO_SUCCESS,
        payload
    }
}

export const addToDoError = (err)=>{
    return {type: ADD_TODO_ERROR, payload: err}
}

export const addToDoLoading = ()=>{
    return {type: ADD_TODO_LOADING}
}

export const getToDoLoading = ()=>{
    return {type: GET_TODO_LOADING}
}

export const getToDoSuccess = (payload)=>{
    return {type: GET_TODO_SUCCESS, payload}
}

export const getToDoError = ()=>{
    return {type: GET_TODO_ERROR}
}

export const editTitleSuccess = (payload)=>{
    return {type: EDIT_TITLE_SUCCESS, payload}
}

export const editTitleError = (payload)=>{
    return {type: EDIT_TITLE_LOADING, payload}
}

export const editTitleLoading = (payload)=>{
    return {type: EDIT_TITLE_ERROR}
}

export const toggleToDoLoading = (payload)=>{
    return {type: TOGGLE_TODO_LOADING}
}

export const toggleToDoSuccess = (payload)=>{
    return {type: TOGGLE_TODO_SUCCESS, payload}
}

export const toggleToDoError = (payload)=>{
    return {type: TOGGLE_TODO_ERROR}
}


export const removeToDoLoading = ()=>{
    return {type: REMOVE_TODO_LOADING}
}

export const removeToDoSuccess = (payload)=>{
    return {type: REMOVE_TODO_SUCCESS, payload}
}

export const removeToDoError = ()=>{
    return {type: REMOVE_TODO_ERROR}
}
