import { ADD_TODO, TOGGLE_TODO, SET_FILTER, ADD_STUDENT, TOGGLE_STUDENT } from "./actionTypes";

let nextTodoId = 0;

//these are action creatrers and not reducer
// it contains type of operation and payload 
export const addTodo = content => ({
  type: ADD_TODO,
  payload: {
    id: ++nextTodoId,
    content
  }
});

export const toggleTodo = id => ({
  type: TOGGLE_TODO,
  payload: { id }
});

export const setFilter = filter => ({ type: SET_FILTER, payload: { filter } });


export const addStudent = (student) => ({
  type: ADD_STUDENT,
  payload: student
});

export const toggleStudent = id => ({
  type: TOGGLE_STUDENT,
  payload: { id }
});