import React from "react";
import { get, post, put, remove } from "../utility/fetchUtility";
import { useState, useEffect } from "react";
import "./css/courses.css";

function Courses() {
  const [id, setId] = useState("");
  const [counter, setCounter] = useState(Date.now());
  const [teacher, setTeacher] = useState([]);
  const [chooseTeacher, setChooseTeacher] = useState("");
  const [courseName, setCourseName] = useState("");
  const [courseDescription, setCourseDescription] = useState("");
  const [courseLength, setCourseLength] = useState("");
  const [course, setCourse] = useState([]);

  useEffect(() => {
    get("/Courses").then((response) => setCourse(response.data));
    get("/Staff").then((response) => setTeacher(response.data));
    console.log(`Course: ${course}`);
    scrollToSection();
  }, []);

  function scrollToSection(){
    const viewPort = document.getElementById("course-main");
    viewPort.scrollIntoView({behavior: 'smooth'});
  }


  return (
    <div id="course-main">

      {/* Course List */}
      {/* Course List */}
      {/* Course List */}
      {/* Course List */}
      <div className="course-object-list">
              <h2 className="course-h2">Course List</h2>
              <ul>
                {course.map((courses) => {
                  return (
                    <div className="course-object">
                      <li key={courses.courseId}>
                        <p>ID: {courses.courseId}</p>
                        <p>Course: {courses.courseName}</p>
                        <p>Description: {courses.courseDescription}</p>
                        <p>Teacher: {courses.teacher} </p>
                        <p>Duration: {courses.courseLength}</p>
                      </li>
                    </div>
                  );
                })}
              </ul>
      </div>

      {/* Course Settings */}
      {/* Course Settings */}
      {/* Course Settings */}
      {/* Course Settings */}
      <div className="course-object-settings">
        <ul>
          <li>
          <input    className='' 
                      value={courseName} 
                      placeholder="Course Name" 
                      onChange={(e) => setCourseName(e.target.value)}></input>
          </li>
          <li>
            <select className='' 
                      value={chooseTeacher} 
                      onChange={(event) => setChooseTeacher(event.target.value)}>
              <option value="" 
                      selected hidden>Välj</option>
              {teacher.map((teachers) => {
                if (teachers.profession === "teacher") {
                  return (
                    <option key={teachers.id}>
                      {`${teachers.firstName} ${teachers.lastName}  `}
                    </option>
                  );
                }
              })}
            </select>
          </li>
          <li>
            <input value={courseDescription} placeholder="Course Description" onChange={(e) => setCourseDescription(e.target.value)}></input>
          </li>
          <li>
            <button onClick={() => {
                post("/Courses", {
                  id: counter,
                  courseName: courseName,
                  teacher: chooseTeacher,
                  courseLength: courseLength,
                  courseDescription: courseDescription,
                });
                setCounter(Date.now());
                get("/Courses").then((response) => setCourse(response.data));
              }}>Create New Course</button>
          </li>
          <li>
            <input value={courseLength} placeholder="Course Duration" onChange={(e) => setCourseLength(e.target.value)}></input>
          </li>
          <li>
            <button onClick={() => {
                put(`/Courses/${id}`, {
                    id: id,
                    courseName: courseName,
                    teacher: chooseTeacher,
                    courseLength: courseLength,
                    courseDescription: courseDescription,
                }).then((response) => console.log(response));
                get("/Courses").then((response) => setCourse(response.data));
              }}>Update</button>
          </li>
          <li>
            <input value={id} placeholder="Course ID" onChange={(e) => {
                console.log(e.target.value);
                setId(e.target.value);
              }}></input>
          </li>
          <li>
            <button onClick={() => {
              remove(`/Courses/${id}`);
              get("/Courses").then((response) => setCourse(response.data));
            }}>Remove Course by ID</button>
          </li>
        </ul>
            
            
            

            
            
      
            
            

            
            
      </div>
    </div>
  );
}

export default Courses;
