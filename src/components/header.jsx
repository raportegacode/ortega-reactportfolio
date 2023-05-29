import React, { Component } from 'react'
import './style/header.css';
import gradPic from './images/raphaelortega.png';
import anime from 'animejs/lib/anime.es.js';
export class header extends Component {


    render() {
        var width = window.innerWidth;
        if (width <= 600) {
            setTimeout(() => {
                anime({
                    targets: '.gradpic',
                    keyframes: [
                        { translateY: -580 },
                        { translateY: 0 },

                    ],
                    duration: 3500,
                    easing: 'easeOutElastic(1, .8)'
                });
                anime({
                    targets: '.header-anchor',
                    keyframes: [
                        { translateY: 130 },
                        { translateX: 30 },
                        { translateY: 0 },
                        { translateX: -30 },
                        { translateX: 0 }
                    ],
                    duration: 2500,
                    easing: 'steps(6)'
                });
                anime({
                    targets: '.name',
                    keyframes: [
                        { translateX: -570 },
                        { translateY: -170 },
                        { translateX: 0 },
                        { translateY: 0 },
                    ],
                    duration: 2500,
                    easing: 'steps(6)'
                });

            }, 500);
        }
        return (
            <div className='header'>
                <div className='header-cont' >

                    <div className='header-subtxt'>
                        <h1 className='name'>Hi, <br />I'm Raphael<br className='remove' /> Ortega</h1>
                        <p>Web Developer</p>
                        <a className='header-anchor' href={'contact'}>
                            <button className='contact-btn'>Contact me!</button>
                        </a>
                    </div>
                    <div className='pic-cont'>
                        <img className='gradpic' src={gradPic} alt="gradpic"></img>
                    </div>
                </div>
            </div>
        )
    }
}

export default header
