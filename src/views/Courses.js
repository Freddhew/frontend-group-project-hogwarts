import { useEffect, useState } from "react";
import "./css/course.css";

const Course = () => {
  const [course, setCourse] = useState([]);
  const [name, setName] = useState();
  const [role, setRole] = useState();
  const [age, setAge] = useState();
  const [gender, setGender] = useState();
  const [deployDate, setDeployDate] = useState();

  const addCourse = (event) => {
    event.preventDefault();
    setCourse([
      ...course,
      {
        id: course.length,
        name: name,
        role: role,
        age: age,
        gender: gender,
        deployDate: deployDate
      }
    ]);
    setName("");
    setRole("");
    setAge(parseInt());
    setGender("");
    setDeployDate("");
};

  return (
    <div className="App">
      <h1 className="padding-top">Add Staff</h1>
      <div className="course-input-management container">
        <form onSubmit={addCourse}>
          <label>
            <input
              className="course-input-field"
              name="name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Course Name"/><br />

            <input
              className="course-input-field"
              name="role"
              type="text"
              value={role}
              onChange={(e) => setRole(e.target.value)}
              placeholder="Enter Role"/><br />

            <input
              className="course-input-field"
              name="age"
              type="date"
              value={age}
              onChange={(e) => setAge(e.target.value)}
              placeholder="Year of Birth"/><br />

            <input
              className="course-input-field"
              name="gender"
              type="text"
              value={gender}
              onChange={(e) => setGender(e.target.value)}
              placeholder="Enter Gender"/><br />

            <input
              className="course-input-field"
              name="deployDate"
              type="date"
              value={deployDate}
              onChange={(e) => setDeployDate(e.target.value)}
              placeholder="Date of deployment"/><br />
            
            <button className="add-course-btn" onClick={addCourse}>Add New Course</button>

          </label>
        </form>
      </div>
      <h1>Course List</h1>
      <div className="course-input-management container">
        <ul className="course-list">
          {course.map((course) => (
            <li className="course-list-item" key={course.id}>
              Course: {course.name}&nbsp;<br/>
              Role: {course.role}&nbsp;<br/>
              Age: {course.age}&nbsp;<br/>
              Gender: {course.gender}&nbsp;<br/>
              Deployment Date: {course.deployDate}&nbsp;&nbsp;&nbsp;&nbsp;
            </li>
          ))}
        </ul>
      </div><br /><br />
  </div>
  );
}
  
export default Course;