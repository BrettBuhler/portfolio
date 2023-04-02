import React from 'react';
import './App.css';
import openingMaster from '../src/images/openingMaster.PNG'

function App() {
  return (
    <div className="App">
      <header>
        <nav>
          <ul>
            <li><a href="#about">About</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#resume">Resume</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </header>
      
      <main>
        <section id="hero">
          <div id="heroText">
            <h1 id="heroH1">Brett Buhler</h1>
            <p>Full-Stack Software Engineer</p>
          </div>
        </section>

        <section id="about">
          <h2>About</h2>
          <p>I'm Brett Buhler, a Full Stack Software Engineer with a unique background that includes a Master's degree in Philosophy from the University of Waterloo, as well as experience as an Area Manager at Amazon and as a Personal Banker at the Bank of Montreal.</p>
          <p>I made the transition into software engineering and now specialize in the MERN software stack. I've built numerous full stack web applications from scratch and am always eager to tackle new challenges.

If you're interested in discussing potential projects or opportunities, please feel free to reach out. Thank you for visiting my portfolio!</p>
        </section>

        <section id="projects">
          <h2>Projects</h2>
          <ul>
            <li className='openingMaster'>
              <div className='liHeader'>
                <h3>Opening Master</h3>
                <div className='aContainer'>
                  <a href="#">View Project</a>
                  <a href="#">View Code</a>
                </div>
              </div>
              <p>This MERN application lets users practice their chess openings using a chess board component and provides feedback on their moves. The app offers a user-friendly and engaging platform for chess enthusiasts to improve their opening strategies.</p>
              <h4>Technologies Used</h4>
              <p>JavaScript, MongoDB, Express, React, Node.js, React-Router, MUI, OAuth, Google App Engine</p>
            </li>
            <li className='reactDash'>
              <div className='liHeader'>
                <h3>React Dash</h3>
                <div className='aContainer'>
                  <a href="#">View Project</a>
                  <a href="#">View Code</a>
                </div>
              </div>
              <p>This MERN application lets users practice their chess openings using a chess board component and provides feedback on their moves. The app offers a user-friendly and engaging platform for chess enthusiasts to improve their opening strategies.</p>
              <h4>Technologies Used</h4>
              <p>JavaScript, MongoDB, Express, React, Node.js, React-Router, MUI, OAuth, Google App Engine</p>
            </li>
            <li className='wordlePlus'>
              <div className='liHeader'>
                <h3>Wordle Plus</h3>
                <div className='aContainer'>
                  <a href="#">View Project</a>
                  <a href="#">View Code</a>
                </div>
              </div>
              <p>This MERN application lets users practice their chess openings using a chess board component and provides feedback on their moves. The app offers a user-friendly and engaging platform for chess enthusiasts to improve their opening strategies.</p>
              <h4>Technologies Used</h4>
              <p>JavaScript, MongoDB, Express, React, Node.js, React-Router, MUI, OAuth, Google App Engine</p>
            </li>
            <li className='codeWars'>
              <div className='liHeader'>
                <h3>Code Wars</h3>
                <div className='aContainer'>
                  <a href="https://www.codewars.com/users/BrettBuhler" target='_blank'>View Project</a>
                  <a href="https://github.com/BrettBuhler/Code-Wars" target='_blank'>View Code</a>
                </div>
              </div>
              <p>This project focuses on improving my knowledge of data structures and algorithms by completing coding challenges on Code Wars. Code Wars is an excellent online platform that offers various programming challenges to practice different programming concepts. I commit my solutions to a GitHub repository to improve my understanding of version control and to keep track of my progress.
I regularly complete coding challenges on Code Wars, and my hard work has paid off. I rank in the top 1% on the Code Wars leaderboards. This success is a testament to my commitment to improving my programming skills.</p>
            </li>
          </ul>
        </section>

        <section id="resume">
          <h2>Resume</h2>
          <p>Include your resume in PDF format or link to it.</p>
        </section>

        <section id="contact">
          <h2>Contact</h2>
          <form>
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" required />

            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" required />

            <label htmlFor="message">Message:</label>
            <textarea id="message" name="message" required></textarea>

            <button type="submit">Submit</button>
          </form>
        </section>
      </main>

      <footer>
        <p>&copy; Brett Buhler 2023. All rights reserved.</p>
        <ul>
          <li><a href="#">LinkedIn</a></li>
          <li><a href="https://github.com/BrettBuhler">GitHub</a></li>
        </ul>
      </footer>
    </div>
  );
}

export default App;