import React from 'react'
import './css/EducationsStyles.css'
import { get, post, put, erase } from ''

const Educations = () => {
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