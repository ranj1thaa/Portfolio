import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import projects from '../utils/projects';
import '../styles/projects.css';

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
};

const card = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0 },
};

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section id="projects" className="projects-section">
      <h2 className="projects-title">My Projects</h2>

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="projects-grid"
      >
        {projects.map((project) => (
          <motion.div
            key={project.id}
            variants={card}
            whileHover={{ scale: 1.05, boxShadow: "0 8px 20px rgba(0,0,0,0.2)" }}
            className="project-card"
            onClick={() => setSelectedProject(project)}
          >
            <img
              src={project.img}
              alt={project.title}
              className="project-img"
            />
            <div className="project-info">
              <h4>{project.title}</h4>
              <p>{project.category}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>

      <AnimatePresence>
        {selectedProject && (
          <motion.div
            key="backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="project-modal-backdrop"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              key="modal"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: "spring", stiffness: 120 }}
              className="project-modal"
              onClick={(e) => e.stopPropagation()}
            >
              <h2>{selectedProject.title}</h2>
              <div className="project-links">
                <a href={selectedProject.github} target="_blank" rel="noopener noreferrer">
                  GitHub
                </a>
                <a href={selectedProject.live} target="_blank" rel="noopener noreferrer">
                  Live Demo
                </a>
              </div>
              <div className="project-screenshots">
                {selectedProject.screenshots.map((img, i) => (
                  <img key={i} src={img} alt={`screenshot ${i}`} />
                ))}
              </div>
              <p className="project-description">{selectedProject.description}</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;
