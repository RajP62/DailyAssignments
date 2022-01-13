import { ADD_TODO_LOADING, DELETE_TODO_LOADING, DELETE_TODO_SUCCESS, EDIT_TITLE_ERROR, EDIT_TITLE_LOADING, EDIT_TITLE_SUCCESS, TOGGLE_TODO_LOADING, TOGGLE_TODO_SUCCESS } from "./actionTypes";
import { loadData, saveData } from "../../utils/localstorage";
import { ADD_TODO_ERROR, ADD_TODO_SUCCESS } from "./actionTypes";
const initState = {
    error: false,
    loading: false,
    todos: loadData("todos") || []
}

export const TodoReducer = (state = initState, {type, payload})=>{
    switch(type){
        case ADD_TODO_SUCCESS:
            const updated = [...state.todos, payload];
            saveData("todos", updated);
            return {
                ...state,
                todos: updated,
                error: false, 
                loading: false
            }
        case ADD_TODO_LOADING:
            return {
                ...state, loading: true
            }
        case ADD_TODO_ERROR: 
            return {
                ...state, error: true, loading: false
            }
        case EDIT_TITLE_SUCCESS:
            console.log(payload)
            const updated_EDIT = state.todos.map((el,ind)=>ind==payload.id? {title: payload.title, status:el.status} : el);
            saveData("todos", updated_EDIT)
            return{
                ...state, todos: updated_EDIT, error: false, loading: false
            }
        case EDIT_TITLE_LOADING:
            return{
                ...state, loading: true
            }
        case EDIT_TITLE_ERROR: 
            return {
                ...state,loading: false, error: true
            }
        case TOGGLE_TODO_SUCCESS:
            const updated_TOGGLE = state.todos.map((el,ind)=>ind==payload.id? {title: el.title, status: !el.status} : el);
            saveData("todos", updated_TOGGLE);
            return {
                ...state, todos: updated_TOGGLE,loading: false
            }
        case TOGGLE_TODO_LOADING:
            return{
                ...state,loading: true
            }
        case DELETE_TODO_SUCCESS:
            const updated_DEL = state.todos.filter((el,ind)=>ind!=payload.id )
            saveData("todos", updated_DEL);
            return {
                ...state, todos: updated_DEL,loading: false
            }
        case DELETE_TODO_LOADING:
            return{
                ...state, loading: true
            }
        default :
        return state;
    }
}