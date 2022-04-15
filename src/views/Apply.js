

import {useState, useEffect} from 'react'
import { get, post } from "../utility/fetchUtility";
import "./css/applycss.css";

const Apply = () => {
  const [counter, setcounter] = useState(Date.now());
  const [apply, setApply] = useState([]);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [education, setEducation] = useState("");
  const [message, setMessage] = useState("");

  useEffect(() => {
    get("/apply").then((response) => setApply(response.data));
  }, []);

  let handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let res = await fetch("https://httpbin.org/post", 
      {
        method: "POST",
        body: JSON.stringify({
          firstName: firstName,
          lastName: lastName,
          email: email,
          education: education,
        }),
      });
      
      if (res.status === 200) 
      {
        setFirstName("");
        setLastName("");
        setEmail("");
        setEducation("");
        setMessage("Application successfull");
      } else {
        setMessage("Some error occured");
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="Apply"> 
    
      <form onSubmit={handleSubmit}>
      <h2>
      Apply Now!
    </h2>
    <br/>
        <input className="input1"
          type="text"
          value={firstName}
          placeholder="First Name"
          onChange={(e) => setFirstName(e.target.value)}
        />
        <input className="input1"
          type="text"
          value={lastName}
          placeholder="Last Name"
          onChange={(e) => setLastName(e.target.value)}
        />
        <input className="input1"
          type="text"
          value={email}
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        />

       
        <select 
        value={education}
        className="select1"
        onChange={(event) => {                        
          setEducation(event.target.value)
          console.log(event)}}
        >
          <option selected>Select Available Education</option>
          <option>Defence against the Dark Arts</option>
          <option>Potion Mastery</option>
          <option>Forsight</option>
        </select> 
        

        <button className="button1" 
        onClick={()=>{
          post("/apply", {
          id:counter,
          firstName: firstName,
          lastName: lastName,
          email: email,
          education: education,
          });
          setcounter(Date.now());
          get("/apply").then((response) => setApply(response.data));
        }}
        type="submit"
        >Apply</button>

        <div className="message1">{message ? <p>{message}</p> : null}</div>
      </form>

    

                <div className="eduList">
                <h4 className="allList">Application List</h4>
                <div>
                  {apply.map((applys)=>{
                  console.log("Rendred list")
                  return (
                      <div className="allListShown" key={applys.id}>
                      <li >
                        <p className="level">
                          id: {applys.id}
                        </p>
                        <p>
                      Name: {applys.firstName} {applys.lastName}
                        </p>
                        <p>
                      Email: {applys.email}
                        </p>
                        <p>
                      Education: {applys.education}
                        </p>
                        
                      </li>
                      </div>
                    );
                  })}
                </div>
                </div>




  </div>
  
  );
}

export default Apply;
