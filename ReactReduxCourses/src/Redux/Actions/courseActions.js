import * as types from "./actionType";

export function createCourse(course) {
  return { type: types.CREATE_COURSE, course };
}

export function deleteCourse(course) {
  return { type: types.DELETE_COURSE, course };
}
