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
    <div id="course-main" className="courses-bg">

      {/* Course List */}
      {/* Course List */}
      {/* Course List */}
      {/* Course List */}
      <div className="course-object-list">
              <h2 className="course-h2">Available Courses</h2>
              <ul>
                {course.map((courses) => {
                  return (
                    <div className="course-object">
                      <li key={courses.courseId}>
                        
                        <h3>COURSE &nbsp; {courses.courseName}</h3>
                        <br/>
                        <h3 className="course-h3">Description</h3>
                        <p>{courses.courseDescription}</p>
                        <br/>
                        <h4>Teacher</h4>
                        <h3 className="course-h3 course-teacher-highligt">{courses.teacher}</h3>
                        <br/>
                        <p>Duration {parseInt(courses.courseLength)} weeks</p>
                        

                        <p>
                        <br/>
                        <button className="course-remove-by-id-btn" 
                                onClick={() => {
                          remove(`/Courses/${courses.courseId}`);
                          get("/Courses").then((response) => setCourse(response.data));
                        }}>Remove Course with ID: {courses.courseId}</button></p>
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
            <input value={courseLength} placeholder="Course Duration" onChange={(e) => setCourseLength(e.target.value)}></input>
          </li>
          <li>
            <button className="course-add-new-course-btn"
                    onClick={() => {
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
        </ul>
      </div>
    </div>
  );
}

export default Courses;
