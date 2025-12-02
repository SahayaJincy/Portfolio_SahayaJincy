import React from "react";
import "../styles/Common.css";
import "../styles/Skills.css";
import { motion } from "framer-motion";


const Skills = () => {
  const skillSections = [
    {
      skills: [
        { icon: "java-plain colored", name: "Java" },
        { icon: "javascript-plain colored", name: "JavaScript" },
        { icon: "react-original colored", name: "React.js" },
        { icon: "nextjs-plain", name: "Next.js" },
        { icon: "typescript-plain colored", name: "TypeScript" },
        { icon: "html5-plain colored", name: "HTML5" },
        { icon: "css3-plain colored", name: "CSS3" },
        { icon: "bootstrap-plain colored", name: "Bootstrap" },
        { icon: "tailwindcss-plain colored", name: "Tailwind CSS" },
        { icon: "spring-plain colored", name: "Spring Boot" },
        { icon: "hibernate-plain colored", name: "Hibernate" },
        { icon: "mysql-plain colored", name: "MySQL" },
        { icon: "firebase-plain colored", name: "Firebase" },
        { icon: "git-plain colored", name: "Git" },
        { icon: "github-original", name: "GitHub" },
        { icon: "postman-plain colored", name: "Postman" },
        { icon: "mysql-plain colored", name: "MySQL Workbench" }, 
        { icon: "eclipse-plain colored", name: "Eclipse" },
        { icon: "canva-original colored", name: "Canva" },
       
      ],
    },

  ];

  return (
    <div className="container-fluid py-5 text-center bg-bg common-text">
      <p className="fw-bolder fs-1 mb-50 common-head pt-3">
        Professional <span className=" highlight common-head">Skillset</span>
      </p>

      {skillSections.map((section, index) => (
<motion.div
  className="container-fluid text-center justify-content-center"
  initial={{ opacity: 1, y: 60 }}
  whileInView={{ opacity: 2, y: 0 }}
  viewport={{ once: false, amount: 0.2 }}
  transition={{ duration: 1, ease: "easeIn" }}
      
>
  <div className="row justify-content-center">
    <div className="col-12 col-md-10">
      <div className="row justify-content-center gap-3">
        {section.skills.map((skill, idx) => (
          <div
            key={idx}
            className="col-3 col-md-3 col-lg-2 col-xl-1"  
          > 
         
            <div className="skill-icon">
              <i className={`devicon-${skill.icon} `}></i>
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
