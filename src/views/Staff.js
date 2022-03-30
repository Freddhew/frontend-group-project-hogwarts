<<<<<<< HEAD
import { useEffect, useState } from "react";
import "./css/staff.css";
// import Database from "../database/Database.js"
import {slideUp, slideDown} from '../utility/slideFunctions';

const Staff = () => {
  const [staff, setStaff] = useState([]);
  const [name, setName] = useState();
  const [role, setRole] = useState();
  const [age, setAge] = useState();
  const [gender, setGender] = useState();
  const [deployDate, setDeployDate] = useState();

  let pageRefresh = true;

  const addStaff = (event) => {
    event.preventDefault();

    if (  name.length > 0 
      &&  role.length > 0 
      &&  age != NaN 
      &&  gender.length > 0 
      &&  deployDate != NaN){
      
      setStaff([
        ...staff,
        {
          id: staff.length,
          name: name,
          role: role,
          age: age,
          gender: gender,
          deployDate: deployDate
        }
      ]);
      setName("");
      setRole("");
      setAge("");
      setGender("");
      setDeployDate("");
    } else {
      console.log("Bla bla!")
    }
};


function showStaffManagement() {
  // slideDown(document.getElementById('staff-management'), 200);
}

  return (
    <div className="App">
      <div id="staff-management">
        <h1>Staff</h1>
        <div className="staff-input-management container">

          {/* <Database /> */}
          
          <ul>
            {staff.map((staff) => (
              <li className="staff-list-item" key={staff.id}>
                Staff: {staff.name}&nbsp;<br/>
                Role: {staff.role}&nbsp;<br/>
                Age: {staff.age}&nbsp;<br/>
                Gender: {staff.gender}&nbsp;<br/>
                Deployment Date: {staff.deployDate}&nbsp;<br />
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div id="staff-roster">
        <h1>Add Staff</h1>
        <div>
          <form onSubmit={addStaff}>
            <label>
              <input
                className="staff-input-field"
                name="name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Staff Name"/><br />

              <input
                className="staff-input-field"
                name="role"
                type="text"
                value={role}
                onChange={(e) => setRole(e.target.value)}
                placeholder="Enter Role"/><br />

              <input
                className="staff-input-field"
                name="age"
                type="date"
                value={age}
                onChange={(e) => setAge(e.target.value)}
                placeholder="Year of Birth"/><br />

              <input
                className="staff-input-field"
                name="gender"
                type="text"
                value={gender}
                onChange={(e) => setGender(e.target.value)}
                placeholder="Enter Gender"/><br />

              <input
                className="staff-input-field"
                name="deployDate"
                type="date"
                value={deployDate}
                onChange={(e) => setDeployDate(e.target.value)}
                placeholder="Date of deployment"/><br />
              
              <button className="add-staff-btn" onClick={addStaff}>Add New Staff</button>

            </label>
          </form>
              <button className="add-staff-btn" onClick={showStaffManagement}>Edit Staff</button>
        </div>
      </div>
  </div>
=======
const Staff = () => {
    return (
      <div className="App">
        <h1>Staff</h1>
        <p>
            Just a paragraph
        </p>
    </div>
>>>>>>> struc
  );
}
  
  export default Staff;