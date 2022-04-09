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

    return (
        <div className='educations'>
        {/* "Pop-up list" */}
            <div className='education-list'>
                <div>
                    <h3>Your magical journey:</h3>
                        <div>
                            <ul>
                                {eventLists.map((eventList) => {
                                    return (
                                        <div>
                                            <li className='educationTitle' key={eventList.id}>
                                                {props.authorized ? (
                                                    <p>
                                                        Title: {eventList.title}
                                                    </p>
                                                ) : null}
                                                    <p>
                                                        Leader: {eventList.leader}
                                                    </p>
                                                    <p>
                                                        Prerequisite: {eventList.prerequisite}
                                                    </p>
                                                    <p>
                                                        Description: {eventList.description}
                                                    </p>
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
                        <p>- Education -</p>
                        <select className='selection' value={eventLists.id} onChange={(event) => setId(event.target.value)}>
                            <option value="" disabled selected>Select your education</option>
                            {eventLists.map((eventList) => {
                                return (
                            <option className="option" key={eventList.id}>
                                {`${eventList.id}  `}
                            </option>
                                );
                            })}
                        </select>

                        <p>- Education Leader -</p>
                        <select className='selection' value={chooseLeader} onChange={(event) => setChooseLeader(event.target.value)}>
                            <option value="" disabled selected>Choose your professor</option>
                            {leaders.map((leader) => {
                            if (leader.profession === "Utbildningsledare") {
                                return (
                            <option className="selection" key={leaders.id}>
                                    {`${leader.firstName} ${leader.lastName} `}
                            </option>
                                );
                            }
                            })} 
                        </select>

                        <p>- Prerequisite Courses -</p>
                        <select className='selection' value={chooseCourse} onChange={(event) => setChooseCourse(event.target.value)}>
                            <option value="" disabled selected>Choose a course</option>
                            {courses.map((course) => {
                            return (
                            <option className="option" key={course.id}>
                            {` ${course.courseName}`}
                            </option>
                            );
                            })} 
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