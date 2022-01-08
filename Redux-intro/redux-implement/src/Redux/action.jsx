import { ADD_TODO, DELETE_TODO, TOGGLE_TODO } from "./actionTypes"

export const addToDo = (payload)=>{
    return {
        type:  ADD_TODO,
        payload
    }
}

export const toggleToDo = (payload)=>{
    return {
        type: TOGGLE_TODO,
        payload
    }
}

export const deleteToDo = (payload)=>{
    return {
        type: DELETE_TODO,
        payload
    }
}