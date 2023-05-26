import './App.css';
import './components/style/contacts.css';
import Nav from './components/nav';
import loc from './components/images/pin.png';
import phone from './components/images/phone.png';
import email from './components/images/email.png';
import github from './components/images/github.png';
import linkedin from './components/images/linkedin.png';

// import { useRef } from 'react';
function App() {
    return (
        <div className="App" >
            <Nav ></Nav>
            <div className='contact-pageCont'>
                <h1>Contact me</h1>
                <p>Get in touch with me!</p>
                {/* <div className="contact-cont"> */}
                <div className="column1">
                    <div className='contact-details'>
                        <img src={loc} alt="Pin Icon" />
                        <p>Taytay, Rizal</p>
                    </div>
                    <a href='tel:09053248135' className='contact-details'>
                        <img src={phone} alt="Pin Icon" />
                        <p>09053248135</p>
                    </a>
                    <a href='mailto:raphaelmar.ortega@gmail.com' className='contact-details'>
                        <img src={email} alt="Pin Icon" />
                        <p>raphaelmar.ortega@gmail.com</p>
                    </a>
                    <a href='https://github.com/raportegacode' className='contact-details'>
                        <img src={github} alt="Pin Icon" />
                        <p>Go to my Github</p>
                    </a>
                    <a href='linkedin.com/in/raphael-ortega279836240' className='contact-details'>
                        <img src={linkedin} alt="Pin Icon" />
                        <p>Go to my Linkedin</p>
                    </a>
                </div>


            </div>
        </div>
        // </div>
    );
}

export default App;
