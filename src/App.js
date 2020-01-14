import React from 'react';
import git from './git.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="nav-div">
      <nav className="nav">
          <ul>
            <li><a href="index.html" className="nav-page current-page">Home</a></li>
            <li><a href="projects.html" className="nav-page">Projects</a></li>   
            <li><a href="contact.html" className="nav-page">Contact</a></li>   
          </ul>
      </nav>
      </div>
      <header className="App-header">
      <a 
        href="https://github.com/ValianaJosic" 
        target="_blank" 
        rel="noopener noreferrer" 
        className="git-link App-logo" >
        <img src={git} alt="github-logo" className="git-icon"/>
        </a>
        <p>
         
        </p>
        <a
          className="App-link"
          href="https://github.com/ValianaJosic"
          target="_blank"
          rel="noopener noreferrer"
        >
        </a>
      </header>
    </div>
  );
}

export default App;
