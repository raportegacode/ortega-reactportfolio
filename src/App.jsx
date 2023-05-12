import './App.css';
import Nav from './components/nav';
import Header from './components/header';
import Projects from './components/project';
import { useRef } from 'react';
function App() {
  return (
    <div className="App" >
      <Nav ></Nav>
      <div className='App-Cont'>
        <Header></Header>
        <Projects></Projects>
      </div>
    </div>
  );
}

export default App;
