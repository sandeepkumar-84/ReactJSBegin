import React, {useState,useEffect } from "react";
import {createCourse, deleteCourse, loadCourses} from '../../Redux/Actions/courseActions';
import { useDispatch, useSelector } from "react-redux";


export default function CoursePage()
{
const courses = useSelector(state=>state.courses);
const dispatch = useDispatch();

const [course, setCourse] = useState({name:""});
const [courseTitle, setCourseTitle] = useState("");

const handleOnChange = event => { setCourse({ ...course, name: event.target.value });
}

useEffect(() => {
    dispatch(loadCourses());
  }, [dispatch]);

const handleDelete = (courseToDelete) => 
{     

    dispatch(deleteCourse(courseToDelete));
}

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(createCourse(course));
    setCourse({ name: "" });
  };


    return(   
        <>
            <form onSubmit={handleSubmit}>
            <h2>Courses</h2>
            <h3>Add Courses</h3>
            <input type="text"  onChange={handleOnChange} value={course.name}></input>
            <input type="submit" value="Save"></input>            
            </form>      
            <hr/>
            <h3>Existing Courses</h3>
            {
                courses.map(c=> 
                (                
                    <div key={c.id}>
                        {c.name}
                    <button onClick={()=>{handleDelete(c)}}> Delete</button>    
                    </div>) 
                )
            }              
        </>   
        
    )
}