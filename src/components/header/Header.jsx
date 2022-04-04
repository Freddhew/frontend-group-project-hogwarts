import React from 'react'
import ReactPlayer from 'react-player'
import './HeaderStyles.css'

import wandVideo from './Wand.mp4'

const Header = () => {
  return (
    <div className='hero'>
        <video loop muted autoPlay id='video'>
            <source src={wandVideo} type='video/mp4' />
        </video>
    <div className='content'>
        <h1>Hogwarts</h1>
        <p>Take your first step towards a magical future!</p>
    <div>
        <button to='/educations' className='btn'>Alohamora</button>
        <button to='/contact' className='btn btn-light'>Learn More</button>
    </div>
    </div>
    </div>
  )
}

export default Header