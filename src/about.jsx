import './App.css';
import Nav from './components/nav';
import Aboutme from './components/aboutme';


function About() {
    return (
        <div className="App" >
            <Nav ></Nav>
            <div className='App-Cont'>
                <Aboutme />

            </div>
        </div>
    );
}

export default About;
