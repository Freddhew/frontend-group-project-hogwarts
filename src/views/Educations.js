import React from 'react'
import './css/EducationsStyles.css'
import { get, post, put, erase } from '../utility/fetchUtility.js'
import {useState, useEffect } from 'react'

function Educations(props) {
    const [leaders, setLeaders] = useState([]);
    const [courses, setCourses] = useState([]);
    const [eventLists, seteventLists] = useState([]);
    
    const [chooseCourse, setChooseCourse] = useState("");
    const [chooseTitle, setChooseTitle] = useState("");
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
                                        <li className='educationTitle'>
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
<<<<<<< HEAD
    </div>

    <div className='card-container'>
        <div className='card selectors'>
            <h3>Enter Education Information</h3>
            <p>- Education -</p>
            <select className='selection' value={chooseTitle} onChange={(event) => setChooseTitle(event.target.value)}>
                <option value="" disabled selected>Select your education</option>
                {eventLists.map((eventList) => {
                return (
                <option className="option">
                    {`${eventList.title}`}
                </option>
                );
                })}
            </select>

            <p>- Education Leader -</p>
            <select className='selection' value={chooseLeader} onChange={(event) => setChooseLeader(event.target.value)}>
                <option value="" disabled selected>Choose your professor</option>
                {leaders.map((leader) => {
                if (leader.profession === "Leader") {
                return (
                <option className="selection">
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
                <option className="option">
                {` ${course.courseName}`}
                </option>
                );
                })} 
            </select>

            <p>- Education Descriptions -</p>
            <textarea value={chooseDescription} onChange={(event) => setChooseDescription(event.target.value)} placeholder='Share your thoughts with us...'></textarea>
            <button className='btn' onClick={() => {
            post("/Education", {
            Leader: chooseLeader,
            Title: chooseTitle,
            Prerequisite: chooseCourse,
            Description: chooseDescription,
            })
            get("/Education").then((response) =>
            seteventLists(response.data)
            );
            get("/Courses").then((response) => setCourses(response.data));
            get("/Staff").then((response) => setLeaders(response.data));
            }}>Submit</button>
        </div>
    </div>
    </div>
)}

=======
        </div>

        <div className='card-container'>
            <div className='card selectors'>
                <h3>Enter Education Information</h3>
                <p>- Education -</p>
                <select className='selection' value={chooseTitle} onChange={(event) => setChooseTitle(event.target.value)}>
                    <option value="" disabled selected>Select your education</option>
                    {eventLists.map((eventList) => {
                    return (
                    <option className="option">
                        {`${eventList.title}`}
                    </option>
                    );
                    })}
                </select>

                <p>- Education Leader -</p>
                <select className='selection' value={chooseLeader} onChange={(event) => setChooseLeader(event.target.value)}>
                    <option value="" disabled selected>Choose your professor</option>
                    {leaders.map((leader) => {
                    if (leader.profession === "Leader") {
                    return (
                    <option className="selection">
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
                    <option className="option">
                    {` ${course.courseName}`}
                    </option>
                    );
                    })} 
                </select>

                <p>- Education Descriptions -</p>
                <textarea value={chooseDescription} onChange={(event) => setChooseDescription(event.target.value)} placeholder='Share your thoughts with us...'></textarea>
                <button className='btn' onClick={() => {
                post("/Education", {
                Leader: chooseLeader,
                Title: chooseTitle,
                Prerequisite: chooseCourse,
                Description: chooseDescription,
                })
                get("/Education").then((response) =>
                seteventLists(response.data)
                );
                get("/Courses").then((response) => setCourses(response.data));
                get("/Staff").then((response) => setLeaders(response.data));
                }}>Submit</button>
            </div>
        </div>
    </div>
    )
}
>>>>>>> origin/Education-final-visual-fixes

export default Educations