import * as types from "./actionType";

export function createCourse(course) {
  return { type: types.CREATE_COURSE, course };
}

export function deleteCourse(course) {
  return { type: types.DELETE_COURSE, course };
}

export function loadCoursesSuccess(courses)
{
  return {type:types.LOAD_COURSES_SUCCESS, courses};
}

export function loadCourses()
{
  return function(dispatch){
 return fetch("http://127.0.0.1:8080/api/products")
      .then(res => res.json())  // convert response to JSON
      .then(courses => dispatch(loadCoursesSuccess(courses)))
      .catch(error => console.error("Failed to load courses:", error));
  }
}