import React, { Component } from 'react'
import './style/header.css';
import gradPic from './images/raphaelortega.png';
// import anime from 'animejs/lib/anime.es.js';
export class header extends Component {


    render() {
        // anime({
        //     // targets: 'div',
        //     // translateX: 250,
        //     // rotate: '1turn',
        //     // backgroundColor: '#FFF',
        //     // duration: 800
        // });
        return (
            <div className='header'>
                <div className='header-cont' >

                    <div className='header-subtxt'>
                        <h1 className='name'>Hi, <br />I'm Raphael<br />Ortega</h1>
                        <p>Web Developer</p>
                        <button className='contact-btn'>Contact me!</button>
                    </div>
                    <img className='gradpic' src={gradPic} alt="gradpic"></img>
                </div>
            </div>
        )
    }
}

export default header
