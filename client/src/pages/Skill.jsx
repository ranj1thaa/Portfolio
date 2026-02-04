import {
  SiReact,
  SiJavascript,
  SiMongodb,
  SiNodedotjs,
  SiExpress,
  SiHtml5,
  SiCss3,
} from "react-icons/si";
import { ReactTyped } from "react-typed";
import assets from "../assets/assets";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useRef } from "react";
import "../styles/skills.css"

gsap.registerPlugin(ScrollTrigger);

const skills = [
  { name: "HTML5", icon: SiHtml5 },
  { name: "CSS3", icon: SiCss3 },
  { name: "JavaScript", icon: SiJavascript },
  { name: "React", icon: SiReact },
  { name: "Node.js", icon: SiNodedotjs },
  { name: "Express", icon: SiExpress },
  { name: "MongoDB", icon: SiMongodb },
];

export default function Skills() {
  const wrapper = useRef();
  const trackWrapper = useRef();
  const track = useRef();

  useGSAP(() => {
    const scrollAmount = track.current.scrollWidth - window.innerWidth;

    gsap.to(track.current, {
      x: -scrollAmount,
      ease: "none",
      scrollTrigger: {
        trigger: wrapper.current,
        start: "top center",  
        end: `+=${scrollAmount}`, 
        scrub: true,
      },
    });
  });

  return (
    <section id="skills" ref={wrapper} className="skills-section">
      <h1 className="skills-title">
        <ReactTyped
          strings={[
            "Technologies I Use...",
            "Frontend • Backend • Tools",
            "MERN Stack Developer",
          ]}
          typeSpeed={60}
          backSpeed={40}
          loop
        />
        <img src={assets.flair1} className="flair-img" alt="flair" />
      </h1>

      <div ref={trackWrapper} className="skills-track-wrapper">
        <div ref={track} className="skills-track">
          {skills.map((skill, i) => {
            const Icon = skill.icon;
            return (
              <div key={i} className="skill-card">
                <Icon size={45} className="skill-icon" />
                <p className="skill-name">{skill.name}</p>
              </div>
            );
          })}
        </div>
      </div>

      <p className="skills-description">
        I specialize in MERN development, building responsive, interactive frontends and robust backend APIs. I work with React, Node.js, Express, MongoDB, HTML, CSS, JS, and tools like Tailwind, Bootstrap, Framer Motion, GSAP, JWT, Bcrypt, EmailJS, Stripe, WebSockets, and Firebase. I also have experience with REST APIs, authentication, real-time apps, and basic DevOps, delivering clean, scalable, production-ready applications.
      </p>
    </section>
  );
}
