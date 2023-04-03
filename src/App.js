import React from 'react';
import './App.css';
import resume from './pdf/Resume-test-pdf.pdf'

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
              <p>Opening Master is a full-stack MERN application designed to assist chess enthusiasts in improving their opening strategies. The app features a chess board component that allows users to practice their openings, receive feedback on their moves, and save their progress. Users can save their openings to a database, enabling them to access their practice sessions from any device with internet access. By providing a user-friendly and engaging platform, Opening Master offers a valuable resource for chess enthusiasts seeking to enhance their skills and knowledge.</p>
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
                  <a href="https://brettbuhler.github.io/wordle-plus/" target='_blank'>View Project</a>
                  <a href="https://github.com/BrettBuhler/wordle-plus" target='_blank'>View Code</a>
                </div>
              </div>
              <p>Wordle Plus app is a fun and engaging game that challenges players to guess a mystery word by trying out different letter combinations. To enhance my skills as a software developer, I built the app from scratch using React and jQuery, with a focus on creating custom-built, reusable components. With Wordle Plus, players can enjoy an updated and enhanced version of the classic game, complete with sleek graphics, intuitive controls, and the ability to play an unlimited number of games per day.</p>
              <h4>Technologies Used</h4>
              <p>JavaScript, React, JQuery</p>
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
        <hr/>
        <section id="resume">
          <h2>Resume</h2>
          <a href={resume} download>Download</a>
        </section>
        <hr/>
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
        <a href="#" className='bottomLink'>LinkedIn</a>
        <a href="https://github.com/BrettBuhler" target='_blank' className='bottomLink'>GitHub</a>
        <p>&copy; Brett Buhler 2023. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;