import React from 'react'
import './Header.css'
import logo from '../logo.svg';

const Header = () => {
    return (
        <div className='header'>
            <div className='header_logo'>
                <img src={logo} className="Airbus-logo" alt="Airbus-logo" width="230" height="auto"/>
            </div>
            
        </div>
    )
}

export default Header
