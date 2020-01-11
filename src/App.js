import React from 'react';
import git from './git.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <div class="nav-div">
      <nav class="nav">
          <ul>
            <li><a href="index.html" class="nav-page current-page">Home</a></li>
            <li><a href="projects.html" class="nav-page">Projects</a></li>   
            <li><a href="contact.html" class="nav-page">Contact</a></li>   
          </ul>
      </nav>
      </div>
      <header className="App-header">
      <a 
        href="https://github.com/ValianaJosic" 
        target="_blank" 
        rel="noopener noreferrer" 
        class="git-link App-logo" >
        <img src={git} alt="github-logo" class="git-icon"/>
        </a>
        <p>
         
        </p>
        <a
          className="App-link"
          href="https://github.com/ValianaJosic"
          target="_blank"
          rel="noopener noreferrer"
        >
          Github
        </a>
      </header>
    </div>
  );
}

export default App;
