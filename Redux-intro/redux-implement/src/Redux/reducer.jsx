import { ADD_TODO, DELETE_TODO, TOGGLE_TODO } from "./actionTypes"

const initState = {
    todo: []
}

export const reducer = (state = initState, {type, payload} )=>{
    switch(type){
        case ADD_TODO:
            return {
                ...state, todo: [...state.todo, payload]
            }
        case TOGGLE_TODO:
            return {
                ...state, todo: state.todo.map(el=>el.title===payload.title? {...el, status : el.status? false : true} : el)
            }
        case DELETE_TODO:
            return {
                ...state, todo: state.todo.filter(el=>el.title!==payload.title)
            }
        default:
            return state
    }
}