import { ADD_TODO_ERROR, ADD_TODO_LOADING, ADD_TODO_SUCCESS, DELETE_TODO_LOADING, DELETE_TODO_SUCCESS, DEL_TODO, EDIT_TITLE_ERROR, EDIT_TITLE_LOADING, EDIT_TITLE_SUCCESS, TOGGLE_TODO_LOADING, TOGGLE_TODO_SUCCESS } from "./actionTypes"

export const addToDoSuccess = (payload)=>{
    return {
        type: ADD_TODO_SUCCESS,
        payload
    }
}


export const addToDoLoading = (payload)=>{
    return {
        type: ADD_TODO_LOADING,
        payload
    }
}

export const addToDoError = (payload)=>{
    return {
        type: ADD_TODO_ERROR,
        payload
    }
}
export const delToDO = (payload)=>{
    return {
        type: DEL_TODO,
        payload
    }
}

export const editTitleSuccess = (payload)=>{
    return {type: EDIT_TITLE_SUCCESS, payload}
}

export const editTitleError = (payload)=>{
    return {type: EDIT_TITLE_ERROR, payload}
}

export const editTitleLoading = (payload)=>{
    return {type: EDIT_TITLE_LOADING}
}

export const toggleTodoSuccess = (payload)=>{
    return {type: TOGGLE_TODO_SUCCESS, payload}
}

export const toggleToDoLoading = ()=>{
    return {type: TOGGLE_TODO_LOADING}
}

export const deleteTodoSuccess = (payload)=>{
    return {type: DELETE_TODO_SUCCESS, payload}
}

export const deleteTodoLoading = (payload)=>{
    return {type: DELETE_TODO_LOADING, payload}
}