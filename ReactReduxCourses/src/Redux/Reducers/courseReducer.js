import * as types from "../Actions/actionType";

export default function CourseReducer(state = [], action) {
  switch (action.type) {
    case types.CREATE_COURSE:
      return [...state, { ...action.course }];
    case types.DELETE_COURSE:      
      return state.filter(s=> s.title != action.course.title);
    default:
      return state;
  }
}
