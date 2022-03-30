import React, {useState} from 'react'
import { FaBars, FaFacebook, FaTimes, FaInstagram } from 'react-icons/fa'
import { GiFairyWand } from 'react-icons/gi'
import './NavbarStyles.css'

const Navbar = () => {
    const [nav, setNav] = useState(false)
    const [slide, setSlide] = useState(false)

    const handleNav = () => {
        setNav(!nav)
        setSlide(!slide)
    }

  return (
    <div className='navbar'>
        <div className="container">
            <ul className={nav ? 'nav-menu active' : 'nav-menu' }>
                    <li><a href='/'>Home</a></li>
                    <li><a href='/'>Education</a></li>
                    <li><a href='/'>Courses</a></li>
                    <li><a href='/'>Staff</a></li>

                    <div className='mobile-menu'>
                        <button>Log in</button>
                        <button>Apply</button>
                        <div className="social-icons">
                            <FaFacebook className='icon' />
                            <FaInstagram className='icon' />
                            <GiFairyWand className='icon' />
                        </div>
                    </div>
            </ul>

            <div className={slide ? 'logo slide-right' : 'logo'}>
                <h3>School of Magic</h3>
            </div>

            <ul className='nav-menu hide'>
                <li><a href='/'>Log In</a></li>
                <li><a href='/'>Apply</a></li>
            </ul>

            <div className="hamburger" onClick={handleNav}>
            {nav ? (<FaTimes size={20} style={{color: '#ffffff'}} />) : (<FaBars style={{color: '#ffffff'}} size={20} />)}            </div>

        </div>
    </div>
  )
}

export default Navbar