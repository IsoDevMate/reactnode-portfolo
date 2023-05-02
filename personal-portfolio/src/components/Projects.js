import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import imagebkd from "../assets/img/imagebkd.jpeg";
import imagefro from "../assets/img/imagefro.jpeg";
import imagesrv from "../assets/img/imagesrv.jpeg";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "Server-side Rendering",
      description: "BACKEND DEVELOPMENT",
      imgUrl:imagebkd,
    },
    {
      title: "Learning MicrofrontEnd",
      description: "MPESA APP FRONTEND ",
      imgUrl: imagefro,
      link:"https//github.com/IsoDevMate/Mpesa-App",
    },
    {
      title: "API Intergation",
      description: "MICROSERVICES",
      imgUrl: imagesrv,
    },
  ];

  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p>Beginner PortFolio.</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Overview</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Blank</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">IntersectionObserver</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="section">
                      <p>Network Engineer looking to learn more</p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <p> intermediate level developer with a focus on server-side rendering.  passionate about building powerful web applications that can handle high traffic and complex business logic, and I believe that server-side rendering is the key to achieving this.

Over the years, I have honed my skills in server-side rendering, and I am now well-versed in technologies such as Node.js, Express, and React. </p>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
