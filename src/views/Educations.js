import React from 'react'
import './css/EducationsStyles.css'
import { get, post } from '../utility/fetchUtility.js'
import {useState, useEffect } from 'react'

function Educations(props) {

    const [counter, setcounter] = useState(Date.now());
    const [courses, setCourses] = useState([]);
    const [eventLists, setEventLists] = useState([]);
    const [chooseCourse, setChooseCourse] = useState("");
    const [selectTeacher, setSelectTeacher] = useState("");
    const [selectHouse, setSelectHouse] = useState("");

useEffect(() => {
    get("/Educations").then((response) => setEventLists(response.data));
    get("/Courses").then((response) => setCourses(response.data));
    get("/Staff").then((response) => selectTeacher(response.data));
}, []);

return (
<div className='educations'>
<div className='education-list'>
    <div>
    <h3>Your Magical Journey</h3>

        <div>
        <ul>
            {eventLists.map((eventList) => {
                console.log(eventList)
            return (
                <div>
                <li className='educationTitle'>
                    {props.authorized ? (
                        <p>
                            Course: {eventList.chooseCourse}
                        </p>
                        ) : null}
                        <p>
                            Professor: {eventList.selectTeacher}
                        </p>
                        <p>
                            House: {eventList.selectHouse}
                        </p>
                        {/* <p>
                            Duration: {eventList.duration}
                        </p>
                        <p>
                            Description: {eventList.description}
                        </p> */}
                </li>
                </div>
            );
            })}
        </ul>
        </div>
    </div>
</div>

    <div className='card-container'>
        <div className='card selectors'>

            <h3>Enter Education Information</h3>
            <p>- Select Your House -</p>
            <select className='selection' value={selectHouse}
                    onChange={(event) => setSelectHouse(event.target.value)}>
                <option value="" disabled selected>Select Your House</option>
                <option>Gryffindor</option>
                <option>Hufflepuff</option>
                <option>Ravenclaw</option>
                <option>Slytherin</option>
                );
            </select>

            <p>- Education Leader -</p>
            <select className='selection' value={selectTeacher} 
                    onChange={(event) => setSelectTeacher(event.target.value)}>
            <option value="" 
                    selected hidden>Select Your Professor</option>
            {courses.map((teacher) => {
                return (
                    <option key={teacher.id}>
                    {`${teacher.teacher}  `}
                    </option>
                );
            })}
            </select>

            <p>- Courses -</p>
            <select className='selection' value={chooseCourse} onChange={(event) => setChooseCourse(event.target.value)}>
                <option value="" disabled selected>Choose a Course</option>
                {courses.map((course) => {
                return (
                <option className="option">
                {` ${course.courseName}`}
                </option>
                );
                })} 
            </select>

            <p>- Your Comments -</p>
            <textarea placeholder='Share your thoughts with us...'></textarea>
            
            <button className='btn' onClick={()=>{
                        post("/Educations", {
                        course:chooseCourse,
                        professor:selectTeacher,
                        house:selectHouse,
                        // duration:duration,
                        // description:description,
                        });
                        setcounter(Date.now());
            get("/Educations").then((response) => setEventLists(response.data));
            get("/Courses").then((response) => setCourses(response.data));
            get("/Staff").then((response) => selectTeacher(response.data));
            }}>Submit</button>
        </div>
    </div>
    </div>
)}


export default Educations
