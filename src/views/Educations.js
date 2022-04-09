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
                                            <li className='educationTitle' key={eventList.course}>
                                                {props.authorized ? (
                                                    <p>
                                                        Education Title: {eventList.course}
                                                    </p>
                                                ) : null}
                                                    <p>
                                                        Leader: {eventList.leader}
                                                    </p>
                                                    <p>
                                                        Prerequisite Courses: {eventList.prerequisite}
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
                        <p>Enter Education Information</p>
                        <select>
                            <option value="" disabled selected>Select your education</option>
                            <option value="">Defence against the Dark Arts</option>
                            <option value="">Potion Mastery</option>
                            <option value="">Forsight</option>
                        </select>
                        <p>- Education Leader -</p>
                        <select>
                            <option value="" disabled selected>Select your professor</option>
                            <option value=""></option>
                        </select>
                        <p>- Prerequisite Courses -</p>
                        <select>
                            <option value="" disabled selected>Select a course</option>
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