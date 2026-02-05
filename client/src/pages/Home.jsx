import { Container, Row, Col, Button } from "react-bootstrap";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import assets from "../assets/assets";
import { ReactTyped } from "react-typed";
import { SiReact, SiJavascript, SiMongodb, SiNodedotjs, SiHtml5, SiCss3, SiLinux, SiExpress, SiPostman, SiFigma } from "react-icons/si";
import { motion } from "framer-motion";
import "../styles/home.css";

function Home() {
  const techIcons = [SiReact, SiJavascript, SiLinux, SiMongodb, SiNodedotjs, SiHtml5, SiCss3, SiExpress, SiPostman, SiFigma];

  return (
    <section id="home">
      {techIcons.map((Icon, index) => (
        <motion.div
          key={index}
          style={{
            position: "absolute",
            top: `${Math.random() * 80}%`,
            left: `${Math.random() * 90}%`,
            fontSize: `${20 + Math.random() * 30}px`,
            zIndex: 0,
            color: "#3b82f6",
          }}
          animate={{ y: [0, 20, 0], rotate: [0, 360, 0] }}
          transition={{
            repeat: Infinity,
            duration: 10 + Math.random() * 5,
            delay: Math.random() * 5,
          }}
        >
          <Icon />
        </motion.div>
      ))}

      <Container>
        <Row className="align-items-center">
          <Col className="text-center text-md-start mb-5 mb-md-0 position-relative">
            <motion.h1
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              Hi, I’m <span className="text-info">Ranjitha</span>
            </motion.h1>

            <motion.h3
              className="mt-3"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              <ReactTyped
                strings={[
                  "Full-Stack Developer",
                  "Frontend-Focused Full-Stack Developer",
                  "Realtime Web Apps",
                  "From Backend APIs to Frontend Animations",
                  "MERN Developer",
                ]}
                typeSpeed={60}
                backSpeed={40}
                backDelay={1600}
                loop
              />
            </motion.h3>

            <div className="mt-4">
              <Button variant="info" href="#projects" className="me-3 fw-bold">
                View My Work
              </Button>
              <Button variant="outline-light" href="/Ranjitha_CV.pdf" target="_blank">
                Download CV
              </Button>
            </div>

            <div className="mt-4 d-flex justify-content-center justify-content-md-start">
              <a href="https://github.com/ranj1thaa" className="me-3 text-white" target="__blank">
                <FaGithub size={28} />
              </a>
              <a href="https://www.linkedin.com/in/ranjitha-r-b76211306/" className="me-3 text-white" target="__blank">
                <FaLinkedin size={28} />
              </a>
              <a href="mailto:r.17ranjitha@email.com" className="text-white" target="__blank">
                <FaEnvelope size={28} />
              </a>
            </div>
          </Col>

          <Col md={5} className="text-center mt-4 mt-md-0">
            <motion.img
              src={assets.faviconImg}
              alt="Profile"
              className="img-fluid rounded-3"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.8 }}
            />
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Home;
