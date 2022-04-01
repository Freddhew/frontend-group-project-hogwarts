import "./css/staffcss.css";
import {useState, useEffect} from 'react'
import { get, post, put, remove } from "../utility/fetchUtility";

const Staff = () => {

  const [counter, setcounter] = useState(Date.now());
  const [id,SetId] = useState()
  const [staff, setStaff] = useState([]);
  const [fn, setFn] = useState("");
  const [ln, setLn] = useState("");
  const [email, setEmail] = useState("");
  const [banknr, setBanknr] = useState("");
  const [yrke, setYrke] = useState("");
  
  useEffect(() => {
    get("/staff").then((response) => setStaff(response.data));
  }, []);


    return (
    <div className="Staff">
        <h1>Staff</h1>
          <p>
              Just a paragraph
          </p>
              <div className="blackbox">
                  <div className="formstaff">

                      
                  
                      <label/> Firstname:
                      <input
                      className="staff-input1"
                      name="firstname"
                      value={fn}
                      placeholder="Firstname"
                      onChange={(event) => setFn(event.target.value)}/>
                      
                      <br/>
                      <label/>Lastname:             
                      <input
                      className="staff-input2"
                      value={ln}
                      placeholder="Lastname"
                      onChange={(event) => setLn(event.target.value)}
                      />

                      <br/>
                      <label/>Email:             
                      <input
                      className="staff-input3"
                      value={email}
                      placeholder="Email"
                      onChange={(event) => setEmail(event.target.value)}
                      />
                      
                      <br/>
                      <label/>Bank account:             
                      <input
                      className="staff-input4"
                      value={banknr}
                      placeholder="Bank-acc-number"
                      onChange={(event) => setBanknr(event.target.value)}
                      />
                      
                      <br/>
                      <p/>Proffesion
                      <select 
                      className="staff-input5"
                      value={yrke}
                      onChange={(event) => setYrke(event.target.value)}
                      > 
                      <option></option>
                      <option>Teacher</option>
                      <option>Alternative</option>
                      </select>
                      <br/>

                      <label/>ID:             
                      <input
                      className="staff-input6"
                      value={id}
                      placeholder="snickesnack ID"                      
                      onChange={(event) => {
                        console.log(event.target.value);
                        SetId(event.target.value)
                      }}
                      /> 



                      <br/>
                      
                      <br/>
                      <button className="buttonstaffadd"
                      onClick={()=>{
                        post("/staff", {
                          id:counter,
                          fn:fn,
                          ln:ln,
                          email:email,
                          yrke:yrke,
                          banknr:banknr,
                        });
                        setcounter(Date.now());
                        get("/staff").then((response) => setStaff(response.data));
                      }}
                      >Add</button>
                      
                      <br/>
                      <button className="buttonstaffUpdate"
                      onClick={()=>{
                      put(`/staff/${id}`,{
                          id:staff.counter,
                          fn:fn,
                          ln:ln,
                          email:email,
                          yrke:yrke,
                          banknr:banknr,
                        }).then((response) => console.log(response));
                        get("/staff").then((response) => setStaff(response.data));
                      }}
                      >Update</button>

                      <br/>
                      <button className="buttonstaffdelete"
                      onClick={()=>{
                        remove(`/staff/${id}`);
                        get("/staff").then((response) => setStaff(response.data));
                      }}
                      >Delete</button>

                      

                      

                        <div className="testar">
                        <p/>test
                        </div>
                  </div>
                <br/>
              </div>
            
                <div className="two">
                En sida som hanterar personalen på skolan. 
                <br/>Man ska kunna lägga till och ta bort lärare och utbildningsledare på denna sida
                <br/>samt uppdatera information om en redan tillagd personal via APIet. 
                <br/> Följande information vill vi spara för all personal: 
                <br/>Förnamn, Efternamn, Email, Bankkontonummer.
                </div>

                

                <div className="personallistavisa">
                  <h4 className="listavisah1">Person</h4>
                  <div>
                    {staff.map((staffs)=>{
                     console.log(staffs.counter);
                     return (
                        <div className="listavisasteg">
                        <li key={staffs.id}>
                          <p className="steg1">
                            id: {staffs.id}
                          </p>
                          <p>
                         Name: {staffs.fn} {staffs.ln}
                          </p>
                          <p>
                         Email {staffs.email}
                          </p>
                          <p>
                         Bank number {staffs.banknr}
                          </p>
                          <p>
                         Proffesion {staffs.yrke}
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
  
  export default Staff;