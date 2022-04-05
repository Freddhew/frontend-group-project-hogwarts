import "./css/applycss.css";
import { useState } from "react";

function Apply() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [courseList, setCourseList] = useState("");
  const [message, setMessage] = useState("");

  let handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let res = await fetch("https://httpbin.org/post", {
        method: "POST",
        body: JSON.stringify({
          firstName: firstName,
          lastName: lastName,
          email: email,
          courseList: courseList,
        }),
      });
      let resJson = await res.json();
      if (res.status === 200) {
        setFirstName("");
        setLastName("");
        setEmail("");
        setCourseList("");
        setMessage("Application successfull");
      } else {
        setMessage("Some error occured");
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={firstName}
          placeholder="First Name"
          onChange={(e) => setFirstName(e.target.value)}
        />
        <input
          type="text"
          value={lastName}
          placeholder="Last Name"
          onChange={(e) => setLastName(e.target.value)}
        />
        <input
          type="text"
          value={email}
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        />

       
        <select>
        {/* <input
          type="text"
          value={courseList}
          placeholder="Select Course"
          onChange={(e) => setCourseList(e.target.value)}
        /> */}
          
          <option selected value="">Select Available Course</option>
          <option value="logicI">Logic I</option>
          <option value="logicII">Logic II</option>
          <option value="ibmSpace">IBM Space</option>
          <option value="ufo">UFO</option>
        </select> 
        

        <button type="submit">Apply</button>

        <div className="message">{message ? <p>{message}</p> : null}</div>
      </form>
    </div>
  );
}

export default Apply;
