import React from 'react'
import './Header.css'
import logo from '../logo.svg';

const Header = () => {
    return (
        <div className='header'>
            <div className='header_logo'>
                <img src={logo} className="Airbus-logo" alt="Airbus-logo" width="230" height="auto"/>
            </div>

            <div className='header_center'>
                <p>A350-800</p>
                <p>A350-900</p>
                <p>A350-1000XWB</p>
            </div>
            
            <div className='header_right'>
                <p>Specifications</p>
                <p>Airbus account</p>
            </div>

        </div>
    )
}

export default Header
