import React, { Component } from 'react'
import './style/nav.css';
import ClearLogo from './images/RapLogo-clear.png';


export class nav extends Component {
    render() {
        return (
            <div className='nav'>
                <div className='fixedNav'>
                    <li>
                        <img className='navlogo' src={ClearLogo} alt='logo' />
                    </li>
                    <ul className='nav-cont'>
                        <li>
                            <a href='#home'>
                                Home
                            </a>
                        </li>
                        <li>
                            <a href='#about'>
                                About
                            </a>
                        </li>
                        <li>
                            <a href='#projects'>
                                Projects
                            </a>
                        </li>
                        <li>
                            <a href='#contact'>
                                Contact
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default nav
