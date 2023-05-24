import React from 'react'
import Nav from './components/nav';
import Carousel from './components/project-carousel';
import './projectpage.css';
function Projectpage() {
    return (
        <div className="App" >
            <Nav ></Nav>
            <div className='App-Cont'>
                <Carousel></Carousel>
            </div>
        </div>
    );
}

export default Projectpage;
