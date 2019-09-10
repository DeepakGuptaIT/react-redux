import { ADD_STUDENT, TOGGLE_STUDENT } from "../actionTypes";

const initialState = {
    studentList : [],
    newStudent : {}
}

export default function(state = initialState, action) {
    switch (action.type) {
      case ADD_STUDENT: {
        // const { id, name } = action.payload;
        let nextState = {
            ...state,
            studentList: [...state.studentList, {...action.payload, completed : false}],
            newStudent: {
              ...state.newStudent,
              newStudent: action.payload
            },
            failed : []
          };
        return nextState;

      }

        case TOGGLE_STUDENT :  {
          const { id } = action.payload;
  
          let nextState = {
            ...state,
            studentList : [...state.studentList]
          }
          nextState.studentList.filter(e => e.id === id).forEach(e => e.completed = !e.completed);
          return nextState;

        }
      
      
      default:
        return state;
    }
  }