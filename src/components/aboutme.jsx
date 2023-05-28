import React from 'react'
import './style/about.css';
import resume from './files/Ortega-Resume.pdf';


import email from './images/email.png';
import linkedin from './images/linkedin.png';
function aboutme() {
    return (
        <div className='about-container'>
            <div className="aboutme">
                <h2>About me</h2>
                <p>Raphael Mardean L. Ortega is a recent graduate from the University of Santo Tomas (UST), having pursued a Bachelor of Science degree in Information Technology. Residing in Taytay, Rizal, he is actively seeking full-time employment as a web developer or a role that aligns with his skill set. With a strong focus on web development, Raphael is enthusiastic about continuous learning and growth, striving to contribute his best to any company that welcomes him aboard.</p>
                <h4>My Resume</h4>
                <a href={resume} target="_blank" rel="noopener noreferrer">View Resume</a>


            </div>



            <footer>
                <h4>© 2023 Raphael Ortega. All rights reserved.</h4>
                <div className='footer-img'>
                    <a href="mailto:raphaelmar.ortega@gmail.com">

                        <img src={email} alt="email" />
                    </a>
                    <a href="https://linkedin.com/in/raphael-ortega" target='_blank' rel="noreferrer">

                        <img src={linkedin} alt="linkedin" />
                    </a>
                </div>
            </footer>

        </div>
    )
}

export default aboutme
