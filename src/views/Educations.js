import React from 'react'
import './css/EducationsStyles.css'
import { get, post, put, erase } from '../utility/fetchUtility.js'
import {useState, useEffect } from 'react'

    function Educations(props) {
        const [id, setId] = useState(Date.now());
        const [newId, setNewId] = useState(Date.now());
      
        const [leaders, setLeaders] = useState([]);
        const [courses, setCourses] = useState([]);
        const [eventLists, seteventLists] = useState([]);
      
        const [chooseCourse, setChooseCourse] = useState("");
        const [chooseEvent, setChooseEvent] = useState("");
        const [chooseLeader, setChooseLeader] = useState("");
        const [chooseDescription, setChooseDescription] = useState("");

        useEffect(() => {
            get("/Educations").then((response) => seteventLists(response.data));
            get("/Courses").then((response) => setCourses(response.data));
            get("/Staff").then((response) => setLeaders(response.data));
        }, []);

        // return (
//         <div>
//       {/* <Header setLoggInPage={(authorized) => setAuthorized(authorized)} /> */}

//       <div className="container">
//         <div className="staffList">
//           <h1 className="h1Staff">Utbildningslista</h1>
//           <div className="staffContainer staffContainer1">
//             <ul>
//               {eventLists.map((eventList) => {
//                 return (
//                   <div className="paragaraphBox">
//                     <li className="staffName textp" key={eventList.id}>
//                       {props.authorized ? (
//                         <p>
//                           <b>id:</b> {eventList.id}
//                         </p>
//                       ) : null}
//                       <p>
//                         {" "}
//                         <b>Utbildningsledare:</b> {eventList.Utbildningsledare}{" "}
//                       </p>{" "}
//                       <p>
//                         <b>Utbildning:</b> {eventList.Utbildning}
//                       </p>{" "}
//                       <p>
//                         <b>Kurs:</b> {eventList.Kursnamn}
//                       </p>{" "}
                       
//                       <p className="pDescription">
//                         <b>Beskrivning:</b> {eventList.Beskrivning}
//                       </p>
                    
//                     </li>
//                   </div>
//                 );
//               })}
//             </ul>
//           </div>
//         </div>

//         {props.authorized ? (
//           <div className="form">
//             <div className="createFormDiv">
//               <div className="input">
//                 <h2 className="h1Staff">Skapa Utbildning</h2>
                
                
                
//                 <select
//                   className="inputClass"
//                   value={eventLists.id}
//                   onChange={(event) => setId(event.target.value)}
//                  >
//                   <option value="" selected disabled hidden>
//                     Välj Id
//                   </option>
//                   {eventLists.map((eventList) => {
//                     return (
//                   <option className="option" key={eventList.id}>
//                         {`${eventList.id}  `}
//                   </option>
//                     );
//                   })}

//                 </select>
               
               
               
//                 <select
//                   className="inputClass"
//                   value={chooseLeader}
//                   onChange={(event) => setChooseLeader(event.target.value)}
//                  >
                  
//                   <option value="" selected disabled hidden>
//                     Välj Utbildningsledare
//                   </option>

//                     {leaders.map((leader) => {
//                     if (leader.profession === "Utbildningsledare") {
//                       return (

//                   <option className="inputClass" key={leaders.id}>
//                           {`${leader.firstName} ${leader.lastName} `}
//                   </option>
//                       );
//                     }
//                   })}

//                 </select>

               

//                 <select
//                   className="inputClass"
//                   value={chooseCourse}
//                   onChange={(event) => setChooseCourse(event.target.value)}
//                  >
                  
//                   <option value="" selected disabled hidden>
//                     Välj Kurs
//                   </option>
//                     {courses.map((course) => {
//                      return (

//                   <option className="option" key={course.id}>
//                     {` ${course.courseName}`}
//                   </option>
//                     );
//                   })}
//                 </select>

                
                
//                 <input
//                   className="inputClass"
//                   value={chooseEvent}
//                   onChange={(event) => setChooseEvent(event.target.value)}
//                   placeholder="Utbildningsnamn"
//                 ></input>

                
                
//                 <textarea
//                   className="beskrivningBox"
//                   value={chooseDescription}
//                   onChange={(event) => setChooseDescription(event.target.value)}
//                   rows="10"
//                   cols="30"
//                   >

//                 </textarea>
//               </div>
             
//               <button
//                 className="inputBtn"
//                 onClick={() => {
//                   post("/Education", {
//                     id: newId,
//                     Utbildningsledare: chooseLeader,
//                     Utbildning: chooseEvent,
//                     Kursnamn: chooseCourse,
//                     Beskrivning: chooseDescription,
//                   })
//                   setNewId(Date.now());
//                   get("/Education").then((response) =>
//                     seteventLists(response.data)
//                   );
//                   get("/Courses").then((response) => setCourses(response.data));
//                   get("/Staff").then((response) => setLeaders(response.data));
//                 }}
//                 >
//                 Lägg till
//               </button>

//               <div className="space"></div>
              
//               <button
//                 className="inputBtn"
//                 onClick={() => {
//                   put(`/Education/${id}`, {
//                     id: eventLists.id,
//                     Utbildningsledare: chooseLeader,
//                     Utbildning: chooseEvent,
//                     Kursnamn: chooseCourse,
//                     Beskrivning: chooseDescription,
//                   }).then((response) => get("/Education").then((response) =>
//                     seteventLists(response.data)
//                   ));
//                 }}
//                  >
//                 Uppdatera
//               </button>
              
//               <div className="space"></div>
              
//               <button
//                 className="inputBtn"
//                 onClick={() => {
//                   erase(`/Education/${id}`);
//                   {
//                     get("/Education").then((response) =>
//                       seteventLists(response.data)
//                     );
//                   }
//                 }}
//                 >
//                 Radera
//               </button>
            
//             </div>

//           </div>
//         ) : (

//         )}
      
//   );
// }

    return (
        <div className='educations'>
            <div className='education-list'>
                <div>
                    <h3>IS THIS WHAT YOU DESIRE?</h3>
                    <ul>
            {eventLists.map((eventList) => {
                    return (
                    <div>
                        <li className="staffName" key={eventList.id}>
                        {props.authorized ? (
                        <p>
                        <b>id:</b> {eventList.id}
                        </p>
                        ) : null}
                        <p>
                            {" "}
                            <b>Educator:</b> {eventList.Educator}{" "}
                        </p>{" "}
                        <p>
                            <b>Education:</b> {eventList.Education}
                        </p>{" "}
                        <p>
                            <b>Program:</b> {eventList.Program}
                        </p>{" "}
                        <p>
                            <b>Description:</b> {eventList.Description}
                        </p>{" "}
                        </li>
                            </div>
                            );
                        })}
                    </ul>
                </div>
            </div>
            
                <div className='card-container'>
                    <div className='card selectors'>
                        <p>Enter Course Information</p>
                        <select>
                            <option value="" disabled selected>Select your education</option>
                            <option value="">Defence against the Dark Arts</option>
                            <option value="">Potion Mastery</option>
                            <option value="">Forsight</option>
                        </select>
                        <p>- Education Leader -</p>
                        <select>
                            <option value="" disabled selected>Select your educator</option>
                            <option value=""></option>
                        </select>
                        <p>- Prerequisite Courses -</p>
                        <select>
                            <option value="" disabled selected>Select your program</option>
                            <option value=""></option>
                        </select>
                        <p>- Course Descriptions -</p>
                        <textarea>Please describe your program...</textarea>
                        <button className='btn'>Submit</button>
                    </div>
                </div>
            
        </div>
    )
}

export default Educations