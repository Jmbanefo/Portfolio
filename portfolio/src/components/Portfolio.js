import Carousel from 'react-bootstrap/Carousel';
import React from 'react';
import '../styles/Portfolio.css';


function Portfolio() {


  return (
    <section className="portfolio">
      <Carousel>
        <Carousel.Item>
          <a href="https://aliyajeylani.github.io/job_finder/">
            <img
              className="d-block w-50"
              src="itakeoff_webpage.png"
              alt="iTakeoff Webpage"
            />
          </a>
          <Carousel.Caption>
            <h3>iTakeOff</h3>
            {/* <p style={styles.text}>I created a job explorer website called iTakeoff for people who are new to tech and would like to learn more about some of the most popular jobs in the tech industry.</p> */}
            <a href="https://github.com/aliyajeylani/job_finder">
            <img src="git_hub_logo_white.png" alt="Git Hub Logo" className="gitHub_logo"/>
            </a>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <a href="https:">
            <img
              className="d-block w-50"
              src="code_quiz.png"
              alt="Code Quiz Challenge"
            />
          </a>
          <Carousel.Caption>
            <h3>Code Quiz</h3>
            {/* <p style={styles.text}>I created a timed quiz that will ask user code-related questions.</p> */}
            <a href="https://github.com/">
            <img src="git_hub_logo_white.png" alt="Git Hub Logo" className="gitHub_logo"/>
            </a>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <a href="https://drive.google.com/file/d/1c_6ipJ8W3_3FVSShYrbeHjrQTMELGq8k/view">
            <img
              className="d-block w-50"
              src="team_profile.png"
              alt="Team Profile Challenge"
            />
          </a>
          <Carousel.Caption>
            <h3>Team Profile</h3>
            {/* <p style={styles.text}>My application will prompt the user for information about his team (name, id, email, etc.) to generate a team profile webpage.</p> */}
            <a href="https:">
            <img src="git_hub_logo_white.png" alt="Git Hub Logo" className="gitHub_logo"/>
            </a>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <a href="https://">
            <img
              className="d-block w-50"
              src="note_taker.png"
              alt="Note Taker Challenge"
            />
          </a>
          <Carousel.Caption>
            <h3>Note Taker </h3>
            {/* <p style={styles.text}>This application allows a user to create and save notes to help them keep track of the tasks they need to complete.</p> */}
            <a href="https://">
            <img src="git_hub_logo_white.png" alt="Git Hub Logo" className="gitHub_logo"/>
            </a>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <a href="https:">
            <img
              className="d-block w-50"
              src="fitness_talks.png"
              alt="Fitness Talks Webpage"
            />
          </a>
          <Carousel.Caption>
            <a href="https://github.com">
              <h3>Fitness Talks</h3>
            </a>
            {/* <p style={styles.text}>I created Fitness Talks to inspire people to share their favorite fitness exercises to help users achieve their fitness goals.</p> */}
            <a href="https:">
            <img src="git_hub_logo_white.png" alt="Git Hub Logo" className="gitHub_logo"/>
            </a>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <a href="https://drive.google.com/file/d/1rGNjNo4OUdLZRgpyQ6H6_VZ1Hb-J_Lv9/view?usp=sharingLinks">
            <img
              className="d-block w-50"
              src="readme_generator.png"
              alt="ReadMe Generator Challenge"
            />
          </a>
          <Carousel.Caption>
            <h3>ReadMe Generator</h3>
            {/* <p style={styles.text}>My application will prompt the user for information about their project that will encompass all of the elements needed (title, description, installation, usage, credits, tests and license) in order to generate a professional ReadME file.</p> */}
            <a href="https://github.">
            <img src="git_hub_logo_white.png" alt="Git Hub Logo" className="gitHub_logo"/>
            </a>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>


    </section>

  );
}

export default Portfolio;