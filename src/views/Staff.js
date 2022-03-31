import "./css/staffcss.css";
import {useState, useEffect} from 'react'
import { get, post, put, remove } from "../utility/fetchUtility";

const Staff = () => {

  const [id, setId] = useState(0);
  const [counter, setcounter] = useState(Date.now());
  const [staff, setStaff] = useState([]);
  const [fn, setFn] = useState("");
  const [ln, setLn] = useState("");
  const [email, setEmail] = useState("");
  const [banknr, setBanknr] = useState("");
  const [yrke, setYrke] = useState("");
  
  useEffect(() => {
    get("/Staff").then((response) => setStaff(response.data));
  }, []);

    return (
    <div className="Staff">
        <h1>Staff</h1>
          <p>
              Just a paragraph
          </p>
              <div className="blackbox">
                  <div className="formstaff">

                      
                  
                      <label/> Förnamn:
                      <input
                      className="staff-input1"
                      name="firstname"
                      type="text"
                      value={fn}
                      placeholder="Förnamn"
                      onChange={(event) => setFn(event.target.value)}/>
                      
                      <br/>
                      <label/>Efternamn:             
                      <input
                      className="staff-input2"
                      type="text"
                      value={ln}
                      placeholder="Efternamn"
                      onChange={(event) => setLn(event.target.value)}
                      />

                      <br/>
                      <label/>Email:             
                      <input
                      className="staff-input3"
                      type="text"
                      value={email}
                      placeholder="Email"
                      onChange={(event) => setEmail(event.target.value)}
                      />
                      
                      <br/>
                      <label/>Bankkontonummer:             
                      <input
                      className="staff-input4"
                      type="text"
                      value={banknr}
                      placeholder="Bank-acc-number"
                      onChange={(event) => setBanknr(event.target.value)}
                      />
                      
                      <br/>
                      <p/>Yrke
                      <select 
                      className="staff-input5"
                      value={yrke}
                      onChange={(event) => setYrke(event.target.value)}
                      placeholder="Välj"> Titel:
                      <option>Teacher</option>
                      <option>Alternative</option>
                      </select>
                      <br/>



                      <br/>
                      <button className="buttonstaffread"
                      onClick={()=>{
                        get('/staff').then((response)=>console.log(response))
                      }}
                      >Read</button>

                      <br/>
                      <button className="buttonstaffadd"
                      onClick={()=>{
                        post('/staff', {
                          id:counter,
                          fn:fn,
                          ln:ln,
                          email:email,
                          yrke:yrke,
                          banknr:banknr,
                        });
                        setcounter(Date.now())

                        .then((response)=>console.log(response))
                        get("/Staff").then((response) => setStaff(response.data));
                      }}
                      >Add</button>
                      
                      <br/>
                      <button className="buttonstaffUpdate"
                      onClick={()=>{
                      put(`/staff/update/${id}`,{
                        id:counter,
                          fn:fn,
                          ln:ln,
                          email:email,
                          yrke:yrke,
                          banknr:banknr,
                      }).then((response)=>console.log(response))
                      }}
                      >Update</button>

                      <br/>
                      <button className="buttonstaffdelete"
                      onClick={()=>{
                        remove(`/Staff/:staffId${id}`)
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
        
    </div>
    
  );
}
  
  export default Staff;