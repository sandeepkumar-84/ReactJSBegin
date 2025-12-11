import * as types from "../Actions/actionType";


export default function CourseReducer(state = [], action) {
  switch (action.type) {
    case types.CREATE_COURSE:
      return [...state, { ...action.course }];
    case types.DELETE_COURSE:      
      return state.filter(s => s.id !== action.course.id);
    case types.LOAD_COURSES_SUCCESS:
      return action.courses;  // <-- fix here
    default:
      return state;
  }
}


