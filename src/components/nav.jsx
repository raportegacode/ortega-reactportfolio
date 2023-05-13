import React, { Component } from 'react'
import './style/nav.css';
import ClearLogo from './images/RapLogo-clear.png';
import hamburger from './images/hamburger.png';
import anime from 'animejs/lib/anime.es.js';

export class nav extends Component {


    render() {
        // document.getElementById('nav-btn').onClick = slideIn.play;


        function onClick() {


            var x = document.getElementById("nav-cont");
            if (x.style.display === "block") {
                anime({
                    targets: '.nav-cont',
                    translateY: -550,

                    // backgroundColor: '#FFF',
                    duration: 800
                });
                setTimeout(() => {
                    x.style.display = "none";
                }, 800);
            } else {
                anime({
                    targets: '.nav-cont',
                    translateY: 1,

                    duration: 800
                });
                x.style.display = "block";
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
