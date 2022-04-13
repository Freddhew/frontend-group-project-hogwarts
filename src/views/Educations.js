import React from 'react'
import './css/EducationsStyles.css'
import { get, post, put, erase } from '../utility/fetchUtility.js'
import {useState, useEffect } from 'react'

function Educations(props) {

    const [courses, setCourses] = useState([]);
    const [eventLists, seteventLists] = useState([]);
    const [staff, setStaff] = useState([]);
    const [chooseCourse, setChooseCourse] = useState("");
    const [chooseTitle, setChooseTitle] = useState("");
    const [selectTeacher, setSelectTeacher] = useState("");
    const [chooseDescription, setChooseDescription] = useState("");
    const [fn, setFn] = useState("");
    const [ln, setLn] = useState("");

useEffect(() => {
    get("/Educations").then((response) => seteventLists(response.data));
    get("/Courses").then((response) => setCourses(response.data));
    get("/Staff").then((response) => selectTeacher(response.data));
}, []);

return (
    <div className='educations'>
    {/* "Pop-up list" */}
    <div className='education-list'>
        <div>
            <h3>Your Magical Journey</h3>
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
    </div>

    <div className='card-container'>
        <div className='card selectors'>
            <h3>Enter Education Information</h3>
            <p>- Select Your House -</p>
            <select className='selection'>
                <option value="" disabled selected>Select Your House</option>
                <option className="option">
                </option>
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

            <p>- Prerequisite Courses -</p>
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

            <p>- Education Descriptions -</p>
            <textarea value={chooseDescription} onChange={(event) => setChooseDescription(event.target.value)} placeholder='Share your thoughts with us...'></textarea>
            <button className='btn' onClick={() => {
            post("/Education", {
            Leader: selectTeacher,
            Title: chooseTitle,
            Prerequisite: chooseCourse,
            Description: chooseDescription,
            })
            get("/Education").then((response) =>
            seteventLists(response.data)
            );
            get("/Courses").then((response) => setCourses(response.data));
            get("/Staff").then((response) => selectTeacher(response.data));
            }}>Submit</button>
        </div>
    </div>
    </div>
)}


export default Educations