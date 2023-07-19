import {combineReducers} from "redux";
import {todoReducer} from './todos/todos.reducers'
import {filters} from "./filters/filter.reducers";

export const rootReducer = combineReducers({
  todoReducer,
  filters,
})

