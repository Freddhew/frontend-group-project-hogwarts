import React from 'react'
import ReactPlayer from 'react-player'
import './HeaderStyles.css'

// import wandVideo from './src/assets/Header.webm'

const Header = () => {
  return (
    <div className='hero'>
        <video loop autoPlay muted id='video'>
            <source src="./src/assets/Header.webm" type='video/webm' />
        </video>
    <div className='content'>
        <h1>Hogwarts</h1>
        <p>Take your first step towards a magical future!</p>
    <div>
        <button to='/educations' className='btn'>Allohamora</button>
        <button to='/contact' className='btn btn-light'>Learn More</button>
    </div>
    </div>
    </div>
  )
}

export default Header