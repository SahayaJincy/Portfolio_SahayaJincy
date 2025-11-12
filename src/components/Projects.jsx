import React from "react";
import "../styles/Common.css";
import "../styles/Project.css";
import "../styles/Home.css";
import { motion } from "framer-motion";

const projects = [
  {
    title: "Personal Portfolio Website",
    desc: "Developed a responsive portfolio using ReactJS and Bootstrap to showcase projects, skills, and achievements with smooth animations and modern UI.",
    tech: "ReactJS, JavaScript, Bootstrap, CSS3, HTML5",
    github: "https://sahayajincy.github.io/Portfolio_SahayaJincy/",
  },
  {
    title: "E-commerce Website",
    desc: "Built a fully responsive ReactJS e-commerce site featuring product listings, reviews, and search functionality using REST APIs.",
    tech: "ReactJS, JavaScript, REST API, HTML5, CSS3, Bootstrap",
    github: " https://sahayajincy.github.io/E_Commerce/",
  },
  {
    title: "Library Management System",
    desc: "Created a full-stack web app using Spring Boot, Hibernate, and MySQL with CRUD operations and role-based authentication.",
    tech: "ReactJS, Java, Spring Boot, Hibernate, MySQL",
    github: "#",
  },
];

const Projects = () => {
  return (
    <section className="projects-section section-spacing section-full min-vh-60 flex-column justify-content-center text-center px-3 pt-5 bg-bg">
      <h2 className="fw-bold mb-2 project-title common-head">
        My Recent <span className="highlight">Works</span>
      </h2>
      <p className="mb-5 common-text">
        Here are a few projects I've worked on recently.
      </p>

      <div className="container">
        <div className="row justify-content-center g-5">
          {projects.map((p) => (
            <div key={p.title} className="col-12 col-md-10 col-lg-10">
              <motion.div
                    className="project-card p-4 rounded-4 shadow h-100"
                    initial={{ opacity: 0, y: 60 }}
                    whileInView={{ opacity: 2, y: 0 }}
                    transition={{ duration: 0.5, ease: "easeIn" }}
                    viewport={{ once: false}}>
                <h2 className="fw-semibold fs-2 common-shead mb-3">{p.title}</h2>
                <p className="common-text fs-4 small mb-3">{p.desc}</p>
                <p className="text-tt small fs-3 mb-4">
                  <strong>Tech Stack:</strong> {p.tech}
                </p>
                <div className="d-flex justify-content-center">
                  <a
                    href={p.github}
                    className="btn custom-btn btn-sm rounded-pill"
                  >
                    <i className="bi bi-github me-2"></i>GitHub
                  </a>
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
