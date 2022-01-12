import { ADD_TODO_ERROR, ADD_TODO_LOADING, ADD_TODO_SUCCESS, EDIT_TITLE_ERROR, EDIT_TITLE_LOADING, EDIT_TITLE_SUCCESS, GET_TODO_ERROR, GET_TODO_LOADING, GET_TODO_SUCCESS, REMOVE_TODO_ERROR, REMOVE_TODO_LOADING, REMOVE_TODO_SUCCESS, TOGGLE_TODO_ERROR, TOGGLE_TODO_LOADING, TOGGLE_TODO_STATUS, TOGGLE_TODO_SUCCESS } from "./actionTypes";

const initState = {
    error: false,
    loading: false,
    total: 0,
    completed: 0,
    todo: []
}

export const reducer = (state=initState, {type, payload})=>{
    switch(type){
        case ADD_TODO_SUCCESS:
            return {...state,todo :[...state.todo,payload], loading: false, error: false, total: state.total + 1}
        case ADD_TODO_LOADING:
            return {...state, loading:true}
        case ADD_TODO_ERROR:
            return {...state,error: true, loading: false}
        case EDIT_TITLE_SUCCESS:
            return {
                ...state,todo:state.todo.map(el=>el.id==payload.id?payload : el),error:false,loading:false
            }
        case EDIT_TITLE_LOADING:
            return {
                ...state, loading:true
            }
        case EDIT_TITLE_ERROR:
            return {
                ...state,loading:false, error:true
            }
        case GET_TODO_SUCCESS:
            return {
                ...state, todo:payload, error: false, loading: false
            }
        case GET_TODO_LOADING:
            return {
                ...state, loading: true
            }
        case GET_TODO_ERROR:
            return {
                ...state,error: true,loading: false
            }
        case TOGGLE_TODO_SUCCESS:
            return {
                ...state,todo:state.todo.map(el=>el.id==payload.id?payload : el),error:false,loading:false, completed: payload.status? state.completed+1 : state.completed-1
            }
        case TOGGLE_TODO_LOADING:
            return {
                ...state,loading: true
            }
        case TOGGLE_TODO_ERROR:
            return {
                ...state, error: true, loading: false
            }
        case REMOVE_TODO_SUCCESS:
            let statusTrue = false;
            return {
                ...state,todo:state.todo.filter(el=>{if(el.id==payload.id){
                    if(el.status){
                        statusTrue = true;
                    }
                    return false;
                }}),loading: false, completed: statusTrue? state.completed-1 : state.completed, total: state.total-1
            }
        case REMOVE_TODO_LOADING:
            return{
                ...state, loading: true
            }
        case REMOVE_TODO_ERROR:
            return {
                ...state, error: true, loading: false
            }
        default:
            return state;
    }
}