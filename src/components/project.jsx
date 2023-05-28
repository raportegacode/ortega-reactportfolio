import React from 'react'
import './style/project.css'
import email from './images/email.png';
import linkedin from './images/linkedin.png';

function project() {
    return (
        <div className='project' id='#project'>
            <div className='project-txt'>

                <h1 className='MyProject'>My Projects</h1>

                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Est esse cupiditate amet id odio, molestias nisi nihil alias, debitis et ipsum nam
                    repellendus voluptas illo eaque voluptates, voluptate pariatur perferendis?</p>
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
            <footer>

                <h4>© 2023 Raphael Ortega. All rights reserved.</h4>
                <div className='footer-img'>
                    <a href="mailto:raphaelmar.ortega@gmail.com">

                        <img src={email} alt="email" />
                    </a>
                    <a href="linkedin.com/in/raphael-ortega279836240">

                        <img src={linkedin} alt="linkedin" />
                    </a>
                </div>
            </footer>
        </div>
    )
}

export default project
