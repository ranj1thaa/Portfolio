import Home from '../pages/Home';
import EducationCert from '../pages/Education';
import Skills from '../pages/Skill';
import Projects from '../pages/Projects';
import Contact from '../pages/Contact';
import '../styles/wrapper.css';

const Wraper = () => {
  return (
    <>
      <section id="home">
        <Home />
      </section>

      <section id="education">
        <EducationCert />
      </section>

      <section id="skills">
        <Skills />
      </section>

      <section id="projects">
        <Projects />
      </section>

      <section id="contact">
        <Contact />
      </section>
    </>
  );
};

export default Wraper;
