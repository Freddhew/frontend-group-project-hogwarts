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
            <div className='card-container'>
                <div className='card selectors'>
                    <p>Enter Course Information</p>
                    <select>
                        <option value="" disabled selected>Select your education</option>
                        <option value="">Defence against the Dark Arts</option>
                        <option value="">Potion Mastery</option>
                        <option value="">Forsight</option>
                    </select>
                    <span className='bar'></span>
                    <p>- Education Leader -</p>
                    <select>
                        <option value="" disabled selected>Select your educator</option>
                        <option value=""></option>
                    </select>
                    <p>- Prerequisite Courses -</p>
                    <select>
                        <option value="" disabled selected>Select your education</option>
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