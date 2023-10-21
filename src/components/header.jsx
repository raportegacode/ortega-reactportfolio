import React, { Component } from 'react'
import './style/header.css';
import gradPic from './images/raphaelortega.png';
import anime from 'animejs/lib/anime.es.js';
import MoonLoader from 'react-spinners/MoonLoader';
export class header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: false
        };
        this.imageLoaded = this.imageLoaded.bind(this)
    }
    imageLoaded() {
        this.setState({
            loading: true
        })
    }
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
                    <div className='pic-cont'  >

                        {this.state.loading ?
                            null
                            :
                            <MoonLoader
                                color="rgba(124, 124, 124, 1)"
                                loading={this.state.loading}
                                size={40}

                            />
                        }

                        <img className='gradpic' style={this.state.loading ? {} : { display: 'none' }} onLoad={this.imageLoaded} src={gradPic} alt="gradpic"></img>




                    </div>
                </div>
            </div>
        )
    }
}

export default header
