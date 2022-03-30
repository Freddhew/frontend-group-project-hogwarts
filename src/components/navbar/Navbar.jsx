import React, {useState} from 'react'
import { FaBars, FaFacebook, FaTimes, FaInstagram } from 'react-icons/fa'
import { GiCarWheel } from 'react-icons/gi'
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
                    <li><a href='/'>Education</a></li>
                    <li><a href='/'>Staff</a></li>
                    <li><a href='/'>Administration</a></li>
                    <li><a href='/'>Apply</a></li>

                    <div className='mobile-menu'>
                        <button>Shop</button>
                        <button>Account</button>
                        <div className="social-icons">
                            <FaFacebook className='icon' />
                            <FaInstagram className='icon' />
                            <GiCarWheel className='icon' />
                        </div>
                    </div>
            </ul>

            <div className={slide ? 'logo slide-right' : 'logo'}>
                <h3>School of Magic</h3>
            </div>

            <ul className={nav ? 'nav-menu active' : 'nav-menu' }>
                <li><a href='/'>Log In</a></li>
                <li><a href='/'>Register</a></li>
            </ul>

            <div className="hamburger" onClick={handleNav}>
            {nav ? (<FaTimes size={20} style={{color: '#ffffff'}} />) : (<FaBars style={{color: '#ffffff'}} size={20} />)}            </div>

        </div>
    </div>
  )
}

export default Navbar