import {combineReducers} from "redux";
import apiReducer from "./home";
import NavigationReducer from "./navigation";


const AppReducer = combineReducers({
    apiReducer,
    NavigationReducer
});

export default AppReducer;