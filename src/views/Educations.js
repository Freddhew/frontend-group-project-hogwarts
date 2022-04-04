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
          get("/Education").then((response) => seteventLists(response.data));
          get("/Courses").then((response) => setCourses(response.data));
          get("/Staff").then((response) => setLeaders(response.data));
        }, []);

    return (
        <div className='educations'>
            <div className='card-container'>
                <div className='card'>
                    <h3>- Subject -</h3>
                    <span className='bar'></span>
                    <p>- Education Leader -</p>
                    <p>- Prerequisite Courses -</p>
                    <p>- Course Descriptions -</p>
                    <button className='btn'>Submit</button>
                </div>
            </div>
        </div>
    )
}

export default Educations