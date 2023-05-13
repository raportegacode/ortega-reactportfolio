import React, { Component } from 'react'
import './style/nav.css';
import ClearLogo from './images/RapLogo-clear.png';
import hamburger from './images/hamburger.png';
import anime from 'animejs/lib/anime.es.js';

export class nav extends Component {


    render() {
        anime({
            targets: '.nav-cont',
            translateY: 0,
        });


        var trigger = true;
        function onClick() {
            var width = window.innerWidth
            // nav is off
            if (trigger === false && width <= 600) {
                anime({
                    targets: '.nav-cont',
                    translateY: -500,
                    duration: 800,
                    easing: 'spring(1, 80, 10, 0)'
                });

                trigger = true;
                // nav is on
            } else if (trigger === true && width <= 600) {
                trigger = false;
                anime({
                    targets: '.nav-cont',
                    translateY: -10,
                    easing: 'spring(1, 80, 10, 0)',
                    duration: 800
                });

                // x.style.display = "block";
            }
        }
        return (
            <div className='nav'>
                <div className='fixedNav'>
                    <ul className='navlogo-cont'>

                        <li>
                            <img className='navlogo' src={ClearLogo} alt='logo' />
                        </li>
                        <li className='mobile-btn'>
                            <a id='nav-btn' href="#nav" onClick={onClick}>
                                <img src={hamburger} alt="hamburger" />
                            </a>
                        </li>
                    </ul>
                    <ul className='nav-cont' id='nav-cont'>
                        <li>
                            <a href='#home' onClick={onClick}>
                                Home
                            </a>
                        </li>
                        <li>
                            <a href='#about' onClick={onClick} >
                                About
                            </a>
                        </li>
                        <li>
                            <a href='#projects' onClick={onClick}>
                                Projects
                            </a>
                        </li>
                        <li>
                            <a href='#contact' onClick={onClick}>
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
