import { combineReducers } from "redux";
import visibilityFilter from "./visibilityFilter";
import todos from "./todos";
import students from "./student";//this name is picked as a key in the redux store

export default combineReducers({ todos, visibilityFilter, students });
