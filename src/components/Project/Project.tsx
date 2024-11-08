import { Container } from "./styles";
import githubIcon from "../../assets/github.svg";
// import DownloadApp from '../../assets/download.png'
import externalLink from "../../assets/external-link.svg";
import ScrollAnimation from "react-animate-on-scroll";
import youtubeIcon from "../../assets/youtube.svg";

export function Project() {
  return (
    <Container id="project">
      <h2>My Projects</h2>
      <div className="projects">
        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg
                width="50"
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#23ce6b"
                strokeWidth="1"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                {" "}
                <title>Folder</title>{" "}
                <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>{" "}
              </svg>
              <div className="project-links">
                <a
                  href="https://github.com/ohmvaghela/AutoBilling"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={githubIcon} alt="Visit site" />
                </a>
                {/* <a href="https://vote.vinayaksingh.com" target="_blank" rel="noreferrer">
                  <img src={externalLink} alt="Visit site" />
                </a>  */}
              </div>
            </header>
            <div className="body">
              <h3>Autobilling App</h3>
              <p>
                <p>
                  • Developed a comprehensive AutoBilling application using
                  Node.js, Express.js for the backend, React.js for the
                  frontend, and MongoDB as the database.
                </p>
                <p>
                  • Implemented order generation and automated email payment
                  links, integrating Razorpay for secure transactions.
                </p>
                <p>
                  • Added features for sending payment reminders via email to
                  customers with outstanding bills.
                </p>
                <p>
                  • Employed JWT for secure authentication and authorization.
                </p>
                <p>
                  • Utilised docker to containerise application and Kubernetes
                  for orchestrating and managing container
                </p>
              </p>
            </div>
            <footer>
              {" "}
              <ul className="tech-list">
                {" "}
                <li>Node.js</li> <li>Express.js</li> <li>React.js</li>{" "}
                <li>MongoDB</li> <li>Docker</li> <li>Kubernetes</li>{" "}
              </ul>{" "}
            </footer>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg
                width="50"
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#23ce6b "
                strokeWidth="1"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <title>Folder</title>{" "}
                <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>{" "}
              </svg>
              <div className="project-links">
                <a
                  href="https://github.com/ohmvaghela/MechSimVault"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={githubIcon} alt="Visit site" />{" "}
                </a>
                {/* <a
                  href="https://ai-chatbot-t8fn.onrender.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={externalLink} alt="Visit site" />
                </a> */}
              </div>
            </header>
            <div className="body">
              <h3>Mechanical Simulations Storage and Showcase App</h3>
              <p>• Developed a Mechanical Simulations Storage App to store and manage various mechanical simulation files.</p>
              <p>• Utilized ReactJS for the frontend to create an interactive and user-friendly interface.</p>
              <p>• Implemented Django as the backend framework to handle data storage and management.</p>
              <p>• Employed JWT for secure authentication and authorization.</p>
              <p>• Utilised docker to containerise application and Kubernetes for orchestrating and managing container</p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>Django</li>
                <li>React.js</li>
                <li>MySQL</li>
                <li>Docker</li>
                <li>Kubernetes</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg
                width="50"
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#23ce6b"
                strokeWidth="1"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <title>Folder</title>
                <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
              </svg>
              <div className="project-links">
                <a
                  href="https://www.youtube.com/watch?v=p6G3ub3R7Qo"
                  target="\_blank"
                  rel="noreferrer"
                >
                  <img src={youtubeIcon} alt="Visit site" />
                </a>
                {/* <a
                  href="https://www.youtube.com/watch?v=p6G3ub3R7Qo"
                  target="\_blank"
                  rel="noreferrer"
                >
                  <img src={externalLink} alt="Visit site" />
                </a> */}
              </div>
            </header>
            <div className="body">
              <h3>Flipkart Grid Robotics Challange</h3>
              <p>• Designed and implemented control systems for four autonomous robots using ROS, Arduinos, and RF modules.</p>
              <p>• Developed and executed image processing(OpenCV) techniques for localization of robots based on overhead camera feed.</p>
              <p>• Implemented and optimized Dijkstra algorithm for path generation in a swarm of robots.</p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>Python</li>
                <li>C++</li>
                <li>OpenCV</li>
                <li>Image Processing</li>
                <li>Robotics Operating System</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg
                width="50"
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#23ce6b "
                stroke-width="1"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <title>Folder</title>
                <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
              </svg>
              <div className="project-links">
                <a
                  href="https://www.youtube.com/watch?v=HKetiTpKIkg"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={youtubeIcon} alt="Visit site" />
                </a>
                {/* <a
                  href="https://medibook.vinayaksingh.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={externalLink} alt="Visit site" />
                </a> */}
              </div>
            </header>
            <div className="body">
              <h3>
              E-yantra IIT-B robotics competition
              </h3>
              <p>• Designed and simulated an autonomous self-balancing bike with an attached arm using SolidWorks in CoppeliaSim.</p>
              <p>• Developed and applied LQR controller for bike balance, utilising a disc attachment to establish an inverted pendulum setup.</p>
              <p>• Utilised Stanley predictive controller for autonomous steering</p>
              <p>• Implemented Inverse Kinematics Manipulator Control for 3-DOF arm.</p>
              <p>• Employed asynchronous programming techniques to efficiently manage multiple threads and ensure seamless operation of the autonomous system.</p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>PHP</li>
                <li>HTML</li>
                <li>CSS</li>
                <li>MySQL</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>

      </div>
    </Container>
  );
}
