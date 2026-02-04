import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import assets from '../assets/assets';
import Hero from '../sections/Hero';
import gsap from 'gsap';
import { useGSAP } from "@gsap/react";
import { useRef } from 'react';
import '../styles/navBarPage.css'

function NavbarPage() {
  const heroRef = useRef();
  const flowerRef = useRef();

  useGSAP(() => {
    let tl = gsap.timeline({ defaults: { ease: "power3.out" } });

    tl.from("img", { opacity: 0, y: -60, duration: 0.6 });
    tl.from(".hero-img-name", { opacity: 0, y: -50, duration: 0.6 });
    tl.from(heroRef.current, { opacity: 0, y: -40, duration: 0.6, stagger: 0.15 });

    gsap.to(flowerRef.current, {
      x: 120,
      rotation: 120,
      duration: 5,
      repeat: -1,
      yoyo: true,
      transformOrigin: "50% 50%",
      ease: "power1.inOut",
      delay: 2
    });
  });

  return (
    <Navbar expand="lg" className="navbar-dark fixed-top w-100">
      <Container className="px-3 d-flex justify-content-between align-items-center">
        <Navbar.Brand href="#home" className="d-flex align-items-center fw-bold">
          <img src={assets.faviconImg} alt="Profile" width="35" height="35" />
          <div className="hero-img-name">
            <img
              src={assets.flowerImg}
              alt="Flower"
              width="35"
              height="20"
              className="flower"
              ref={flowerRef}
            />
            <span className="gradient-bottom">Ranjitha R</span>
          </div>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Hero ref={heroRef} />
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarPage;
