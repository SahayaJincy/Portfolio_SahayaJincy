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
    img: `${process.env.PUBLIC_URL}/Images/Portfolio.png`,
  },
  {
    title: "E-commerce Website",
    desc: "Built a fully responsive ReactJS e-commerce site featuring product listings, reviews, and search functionality using REST APIs.",
    tech: "ReactJS, JavaScript, REST API, HTML5, CSS3, Bootstrap",
    github: " https://sahayajincy.github.io/E_Commerce/",
    img: `${process.env.PUBLIC_URL}/Images/Ecommerce.png`,
  },
  {
    title: "Library Management System",
    desc: "Created a full-stack web app using Spring Boot, Hibernate, and MySQL with CRUD operations and role-based authentication.",
    tech: "ReactJS, Java, Spring Boot, Hibernate, MySQL",
    github: "#",
    img: `${process.env.PUBLIC_URL}/Images/Library.png`,
  },
];

const Projects = () => {
  return (
    <section className="projects-section section-spacing section-full text-center px-3 pt-5 bg-bg">
      <div className="container-fluid">
        <div className="row">
          <div className="col-12 d-flex justify-content-center">
            <div className="row">
              <div className="col-12">
                <p className="fw-bold mb-2 project-title common-head">
                  My Recent <span className="highlight">Works</span>
                </p>
                <p className="mb-5 fs-2 common-text">
                  Here are a few projects I've worked on recently.
                </p>
              </div>
            </div>
          </div>
          <div className="col-12">
            <div className="row justify-content-center">
              {projects.map((p) => (
                <div key={p.title} className="col-12 col-md-10 col-lg-3">
                  <motion.div
                    className="project-card p-4 rounded-4 shadow h-100"
                    initial={{ opacity: 0, y: 60 }}
                    whileInView={{ opacity: 2, y: 0 }}
                    transition={{ duration: 1, ease: "easeIn" }}
                    viewport={{ once: false }}
                  >
                    <img src={p.img} alt={p.title} className="project-img mb-3" />
                    <h2 className="fw-semibold fs-1 common-shead mb-3">
                      {p.title}
                    </h2>
                    <p className="common-text fs-3 small mb-3">{p.desc}</p>
                    <p className="text-tt small fs-3 mb-4">
                      <strong>Tech Stack:</strong> {p.tech}
                    </p>
                    <div className="d-flex justify-content-center">
                      <a
                        href={p.github}
                        className="btn btn-outline-light  rounded-pill"
                      >
                        <i className="bi bi-github me-2"></i>GitHub
                      </a>
                    </div>
                  </motion.div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
