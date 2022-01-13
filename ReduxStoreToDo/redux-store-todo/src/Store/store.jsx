import {createStore} from "redux";
import {AuthReducer} from "../features/Auth/reducer";
import {TodoReducer} from "../features/Todo/reducer";
import {combineReducers} from 'redux'
const rootsReducer = combineReducers({
    AuthReducer,
    TodoReducer
});

export const store = createStore(rootsReducer,window.__REDUX_DEVTOOLS_EXTENSION__());