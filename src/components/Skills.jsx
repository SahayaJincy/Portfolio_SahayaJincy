import React from "react";
import "../styles/Common.css";
import "../styles/Skills.css";
import { motion } from "framer-motion";


const Skills = () => {
  const skillSections = [
    {
      skills: [
        { icon: "java-plain", name: "Java" },
        { icon: "javascript-plain", name: "JavaScript" },
        { icon: "react-original", name: "React.js" },
        { icon: "nextjs-original", name: "Next.js" },
        { icon: "typescript-plain", name: "TypeScript" },
        { icon: "html5-plain", name: "HTML5" },
        { icon: "css3-plain", name: "CSS3" },
        { icon: "bootstrap-plain", name: "Bootstrap" },
        { icon: "tailwindcss-plain", name: "Tailwind CSS" },
        { icon: "spring-plain", name: "Spring Boot" },
        { icon: "hibernate-plain", name: "Hibernate" },
        { icon: "mysql-plain", name: "MySQL" },
        { icon: "firebase-plain", name: "Firebase" },
        { icon: "git-plain", name: "Git" },
        { icon: "github-original", name: "GitHub" },
        { icon: "vscode-plain", name: "VS Code" },
        { icon: "postman-plain", name: "Postman" },
        { icon: "mysql-plain", name: "MySQL Workbench" }, 
        { icon: "eclipse-plain", name: "Eclipse" },
        { icon: "canva-original", name: "Canva" },
       
      ],
    },

  ];

  return (
    <div className="container-fluid min-vh-60 py-5 text-center bg-bg common-text">
      <p className="fw-bolder mb-50 fs-1 pt-3">
        Professional <span className="common-head fs-2">Skillset</span>
      </p>

      {skillSections.map((section, index) => (
<motion.div
  className="container-fluid text-center justify-content-center"
  initial={{ opacity: 0, y: 60 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: false, amount: 0.2 }}
  transition={{ duration: 1, ease: "easeOut" }}
>
  <div className="row justify-content-center">
    <div className="col-12 col-md-10">
      <div className="row justify-content-center gap-5">
        {section.skills.map((skill, idx) => (
          <div
            key={idx}
            className="col-6 col-md-4 col-lg-1 "
          >
            <div className="skill-icon">
              <i className={`devicon-${skill.icon} colored`}></i>
              <p>{skill.name}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
</motion.div>



      ))}
    </div>
  );
};

export default Skills;
