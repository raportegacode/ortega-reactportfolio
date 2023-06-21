import React from 'react'
import './style/project.css'
import email from './images/email.png';
import linkedin from './images/linkedin.png';

import office from './images/office.png';
import js from './images/js.png';
import htmlpic from './images/html-5.png';
import csspic from './images/css-3.png';
import reactpic from './images/react.png';
import phppic from './images/php.png';
import sql from './images/sql-server.png';
import firebase from './images/firebase.png';
import python from './images/python.png';
import github from './images/github-icon.png';
import wordpress from './images/wordpress.png';
import filezilla from './images/filezilla.png';
// import nodejs from './images/node-js.png';


function project() {
    return (
        <div className='project' id='#project'>
            <div className='project-txt'>

                <h1 className='MyProject'>My Projects</h1>

                <p>Welcome to my portfolio showcasing a selection of projects I completed during my college years. For a more in-depth look at each project, please visit my dedicated <a className='intext-link' href={'project'}>project page</a>. These projects represent the culmination of my academic journey, highlighting my skills, creativity, and dedication to delivering high-quality work.</p>
            </div>
            <div className='project-details'>
                <div className="projectcol col1">

                    <div className='pic-col1'>
                        <a href="https://resiklo-b2417.web.app">
                            View Project
                        </a>
                    </div>
                </div>
                <div className="projectcol col2">
                    <div className="pic-col2">
                        <a href="https://dango-easykleta-casestudy.web.app">
                            View Project
                        </a>

                    </div>
                </div>
            </div>

            <div className="skills-cont">

                <h2>My skills</h2>
                <p>As an aspiring fresh graduate, I am deeply passionate about learning and embracing new technologies. I am highly motivated to continuously enhance my skills and stay informed about the latest advancements. For more information about my diverse range of abilities, please visit the <a className='intext-link' href={'about'}>about page</a>.</p>
                <div className="skills">
                    <div className="slide-track">
                        <div className="slide"><img src={office} alt="office" /></div>
                        <div className="slide"><img src={js} alt="js" /></div>
                        <div className="slide"><img src={htmlpic} alt="html" /></div>
                        <div className="slide"><img src={csspic} alt="css" /></div>
                        <div className="slide"><img src={reactpic} alt="react" /></div>
                        <div className="slide"><img src={phppic} alt="php" /></div>
                        <div className="slide"><img src={sql} alt="sql" /></div>
                        <div className="slide"><img src={firebase} alt="firebase" /></div>
                        <div className="slide"><img src={python} alt="python" /></div>
                        <div className="slide"><img src={github} alt="github" /></div>
                        <div className="slide"><img src={wordpress} alt="wordpress" /></div>
                        <div className="slide"><img src={filezilla} alt="filezilla" /></div>
                        {/* <div className="slide"><img src={nodejs} alt="node.js" /></div> */}

                        <div className="slide"><img src={office} alt="office" /></div>
                        <div className="slide"><img src={js} alt="js" /></div>
                        <div className="slide"><img src={htmlpic} alt="html" /></div>
                        <div className="slide"><img src={csspic} alt="css" /></div>
                        <div className="slide"><img src={reactpic} alt="react" /></div>
                        <div className="slide"><img src={phppic} alt="php" /></div>
                        <div className="slide"><img src={sql} alt="sql" /></div>
                        <div className="slide"><img src={firebase} alt="firebase" /></div>
                        <div className="slide"><img src={python} alt="python" /></div>
                        <div className="slide"><img src={github} alt="github" /></div>
                        <div className="slide"><img src={wordpress} alt="wordpress" /></div>
                        <div className="slide"><img src={filezilla} alt="filezilla" /></div>
                        {/* <div className="slide"><img src={nodejs} alt="node.js" /></div> */}

                    </div>
                </div>
            </div>

            <footer>

                <h4>© 2023 Raphael Ortega. All rights reserved.</h4>
                <div className='footer-img'>
                    <a href="mailto:raphaelmar.ortega@gmail.com">

                        <img src={email} alt="email" />
                    </a>
                    <a href="https://linkedin.com/in/raphael-ortega" target='_blank' rel="noreferrer" >

                        <img src={linkedin} alt="linkedin" />
                    </a>
                </div>
            </footer>
        </div>
    )
}

export default project
