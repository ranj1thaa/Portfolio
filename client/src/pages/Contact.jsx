import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";
import { SiReact, SiJavascript, SiMongodb, SiNodedotjs, SiHtml5, SiCss3 } from "react-icons/si";
import emailJS from '@emailjs/browser';
import '../styles/contact.css';

const techIcons = [SiReact, SiJavascript, SiMongodb, SiNodedotjs, SiHtml5, SiCss3];

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const formRef = useRef();
  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });


  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.subject || !form.message) {
      alert("Please fill in all fields!");
      return;
    }
    const serviceID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    emailJS.sendForm(serviceID, templateID, formRef.current, publicKey)
      .then(() => {
        formRef.current.reset();
        setSubmitted(true);
        setForm({ name: "", email: "", subject: "", message: "" });
      })
      .catch((error) => alert("Error sending message: " + error.text));
  };

  return (
    <section id="contact" className="contact-section">
      {techIcons.map((Icon, index) => (
        <motion.div
          key={index}
          className="tech-icon"
          style={{
            top: `${Math.random() * 80}%`,
            left: `${Math.random() * 90}%`,
            fontSize: `${20 + Math.random() * 30}px`,
          }}
          animate={{ y: [0, 20, 0], rotate: [0, 360, 0] }}
          transition={{ repeat: Infinity, duration: 10 + Math.random() * 5, delay: Math.random() * 5 }}
        >
          <Icon />
        </motion.div>
      ))}

      <motion.h2
        className="contact-title"
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="h11">
          Get In Touch
        </h1>
        
      </motion.h2>

      <div className="contact-wrapper">
        <motion.form
          ref={formRef}
          className="contact-form"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          onSubmit={handleSubmit}
        >
          <input type="text" name="name" placeholder="Your Name" value={form.name} onChange={handleChange} required />
          <input type="email" name="email" placeholder="Your Email" value={form.email} onChange={handleChange} required />
          <input type="text" name="subject" placeholder="Subject" value={form.subject} onChange={handleChange} required />
          <textarea name="message" placeholder="Your Message" value={form.message} onChange={handleChange} rows={5} required />
          <motion.button type="submit" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            Send Message
          </motion.button>
          {submitted && <p className="success-msg">Message sent successfully!</p>}
        </motion.form>

        <motion.div
          className="contact-socials"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <a href="mailto:r.17ranjitha@email.com" target="_blank" rel="noopener noreferrer"><FaEnvelope /></a>
          <a href="https://www.linkedin.com/in/ranjitha-r-b76211306/" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
          <a href="https://github.com/ranj1thaa" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
