import React from "react";
import { get, post, put, remove } from "../utility/fetchUtility";
import { useState, useEffect } from "react";
import "./css/courses.css";

function Courses() {
  const [id, setId] = useState("");
  const [counter, setCounter] = useState(Date.now());
  const [teacher, setTeacher] = useState([]);
  const [chooseTeacher, setChooseTeacher] = useState("");
  const [course, setCourse] = useState([]);
  const [courseName, setCourseName] = useState("");
  const [courseDescription, setCourseDescription] = useState("");
  const [courseLength, setCourseLength] = useState("");
  useEffect(() => {
    get("/Courses").then((response) => setCourse(response.data));
  }, []);
  useEffect(() => {
    get("/Staff").then((response) => setTeacher(response.data));
  }, []);

  return (
    <div>
      <div className='courses-grid'>
        <div className='courses-container'>
          <div className='course-list'>
            <input value={courseName} placeholder="Course Name" onChange={(e) => setCourseName(e.target.value)}></input>

            <input value={courseDescription} placeholder="Course Description" onChange={(e) => setCourseDescription(e.target.value)}></input>

            <select value={chooseTeacher} onChange={(event) => setChooseTeacher(event.target.value)}>
              <option value="" selected disabled hidden>Välj</option>
              {teacher.map((teachers) => {
                if (teachers.profession === "lärare") {
                  return (
                    <option key={teachers.id}>
                      {`${teachers.firstName} ${teachers.lastName}  `}
                    </option>
                  );
                }
              })}
            </select>

          <input value={courseLength} placeholder="Course Duration" onChange={(e) => setCourseLength(e.target.value)}></input>
          <input value={id} placeholder="Course ID" onChange={(e) => {
              console.log(e.target.value);
              setId(e.target.value);
            }}></input>

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

          <button onClick={() => {
            remove(`/Courses/${id}`);
            get("/Courses").then((response) => setCourse(response.data));
          }}>Remove Course by ID</button>

            <h2>Course List</h2>
            <ul>
              {course.map((courses) => {
                return (
                  <div className='course-card'>
                    <li key={courses.courseId}>
                      <p className='course-card-coloumn-3'>ID: {courses.courseId}</p>
                      <p className='course-card-coloumn-1'>Course: {courses.courseName}</p>
                      <p className='course-card-coloumn-2'>Description: {courses.courseDescription}</p>
                      <p className='course-card-coloumn-1 course-card-row-1'>Teacher: {courses.teacher} </p>
                      <p className='course-card-coloumn-2 course-card-row-2'>Duration: {courses.courseLength}</p>
                    </li>
                  </div>
                );
              })}
            </ul>

          </div>
        </div>
      </div>
    </div>
  );
}

export default Courses;
