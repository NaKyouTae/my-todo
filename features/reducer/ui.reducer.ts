import {combineReducers} from "redux";
import {todoReducer} from "../slice/todo.slice";

export const uiReducer = combineReducers({
    todo: todoReducer
})