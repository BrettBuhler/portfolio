import React, { useRef } from 'react';
import './App.css';
import emailjs from '@emailjs/browser'
import resume from './pdf/BrettBuhler.pdf'


function App() {

  const form = useRef()

  const sendEmail = (event) => {
    event.preventDefault()
    emailjs.sendForm('service_2t56uvn', 'template_l7r9ynn', form.current, 'm3y3Aer-9QJyYsjyA')
      .then((res) => {
        console.log(res.text, ",Email Sent")
        let resetForm = document.getElementById('emailForm')
        resetForm.reset()
      }, (err) => {
        console.log(err.text, ",ERROR")
      })
  }

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
          <p>I'm Brett Buhler, a full-stack software developer with expertise in the MERN stack. I hold a Master's degree in philosophy from the University of Waterloo and have previously worked as an Amazon Area Manager and a personal banker at the Bank of Montreal. My passion for formal logic led me to pursue a career in software development, where I combine my analytical and problem-solving skills with my love for coding.
My experience in different industries has given me a unique perspective on how technology can be utilized to improve processes and enhance user experiences. As a result, I approach software development with a holistic view, always striving to create high-quality, user-friendly applications that exceed client expectations.</p>
        </section>

        <section id="projects">
          <h2>Projects</h2>
          <ul>
            <li className='openingMaster'>
              <div className='liHeader'>
                <h3>Opening Master</h3>
                <div className='aContainer'>
                  <a href="https://brettbuhler.github.io/opening" target='_blank'>View Project</a>
                  <a href="https://github.com/BrettBuhler/opening" target='_blank'>View Code</a>
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
                  <a href="https://brettbuhler.github.io/react-dash/" target='_blank'>View Project</a>
                  <a href="https://github.com/BrettBuhler/react-dash" target = '_blank'>View Code</a>
                </div>
              </div>
              <p>React-Dash is a Front-End React application that I built to develop my skills in Front-End development, React knowledge, UI design, Component Libraries knowledge, and Data visualization abilities. To achieve this, I utilized production-ready components from Material-UI, FullCalendar, and Nivo.</p>
              <p>React-Dash is a modern, well-designed, and efficient React application that demonstrates my proficiency in Front-End development.</p>
              <h4>Technologies Used</h4>
              <p>JavaScript, React, React-Router, MUI, Formik, FullCalendar, Nivo</p>
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
          <form ref={form} onSubmit={sendEmail} id={'emailForm'}>
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="user_name" required />

            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="user_email" required />

            <label htmlFor="message">Message:</label>
            <textarea id="message" name="message" required></textarea>

            <button type="submit" value="Send">Submit</button>
          </form>
        </section>
      </main>

      <footer>
        <a href="https://www.linkedin.com/in/brett-buhler-a7522a1b6/" target={'_blank'} className='bottomLink'>LinkedIn</a>
        <a href="https://github.com/BrettBuhler" target='_blank' className='bottomLink'>GitHub</a>
        <p>&copy; Brett Buhler 2023. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;