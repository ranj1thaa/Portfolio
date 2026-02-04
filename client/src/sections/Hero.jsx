import Nav from 'react-bootstrap/Nav'; 
const Hero = ({ref}) => { 
  return ( 
    <> 
      <Nav className="ms-auto" ref={ref}> 
        <Nav.Link href="#home">Home</Nav.Link>
        <Nav.Link href="#education">Education</Nav.Link> 
        <Nav.Link href="#skills">Skills</Nav.Link>
        <Nav.Link href="#projects">Projects</Nav.Link> 
        <Nav.Link href="#contact">Contact</Nav.Link>
      </Nav> 
    </> 
  ) 
} 
export default Hero

