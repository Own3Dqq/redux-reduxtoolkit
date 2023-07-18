import {combineReducers} from "redux";
import counterReducer from "./reducers/reducers";


const rootReducer = combineReducers({
  counterReducer,
})

export default rootReducer;