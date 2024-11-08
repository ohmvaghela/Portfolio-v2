import { Container } from "./styles";
import githubIcon from "../../assets/github.svg"
// import DownloadApp from '../../assets/download.png'
import externalLink from "../../assets/external-link.svg"
import ScrollAnimation from "react-animate-on-scroll";
import blog1 from "../../assets/blog1.png"
import blog2 from "../../assets/blog2.png"
import blog3 from "../../assets/blog3.png"

export function Blog() {
  return (
    <Container id="blog">
      <h2>My Blogs</h2>
      <div className="blogs">

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <a href="https://medium.com/@vaghelaohm/a-step-by-step-guide-to-creating-a-django-web-application-with-mysql-database-31f87671ca43" target="_blank" rel="noreferrer">
                  <img src={blog3} alt="Visit site" /></a>

            </header>
            <div className="body">

              <h3>A Step-by-Step Guide to Creating a Django Web Application with MySQL Database</h3>
              <p> Build a test-level Django web application from scratch with this step-by-step guide. Learn how to set up a MySQL database, serve media files, and integrate a ReactJS frontend. Perfect for beginners, this tutorial covers essential Django concepts and configurations for a fully functional web app.</p>
            </div>
            {/* <footer> <ul className="tech-list"> <li>AWS Lambda</li> <li>API Gateway</li> <li>DynamoDB</li> </ul> </footer> */}
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <a href="https://medium.com/@vaghelaohm/django-app-deployment-testing-locally-on-minikube-and-deploying-the-same-on-google-kubernetes-79ee14289783" target="_blank" rel="noreferrer">
                  <img src={blog1} alt="Visit site" /></a>

            </header>
            <div className="body">

              <h3>Django App Deployment: Testing Locally on Minikube and Deploying the same on Google Kubernetes Engine</h3>
              <p>       Learn how to deploy a Django app with React frontend and Nginx, serving media and static files. This tutorial guides you through local testing on Minikube and deployment on Google Kubernetes Engine (GKE), covering key steps like reserving external IPs, Google-managed certificates, and Ingress configuration for a seamless production setup
.              </p>
            </div>
            {/* <footer> <ul className="tech-list"> <li>AWS Lambda</li> <li>API Gateway</li> <li>DynamoDB</li> </ul> </footer> */}
          </div>
        </ScrollAnimation>
        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <a href="https://medium.com/@vaghelaohm/containerizing-django-application-and-using-mysql-present-on-local-machine-1c3ee9a96271" target="_blank" rel="noreferrer">
                  <img src={blog2} alt="Visit site" /></a>

            </header>
            <div className="body">

              <h3>Containerizing Django Application and configuring MySQL for web-app</h3>
              <p>         Containerize your Django application with Docker and Docker Compose, and integrate it with a ReactJS frontend. Learn how to configure MySQL and Nginx for media file serving. This tutorial also highlights common challenges and solutions for creating efficient Django images, ensuring seamless containerization and local testing of your web app
.              </p>
            </div>
            {/* <footer> <ul className="tech-list"> <li>AWS Lambda</li> <li>API Gateway</li> <li>DynamoDB</li> </ul> </footer> */}
          </div>
        </ScrollAnimation>

      </div>

    </Container>
  );
}