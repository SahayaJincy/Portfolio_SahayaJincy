import React from "react";
import "../styles/Common.css";
import "../styles/Skills.css";

const Skills = () => {
  const skillSections = [
    {
      skills: [
        { icon: "java-plain", name: "Java" },
        { icon: "javascript-plain", name: "JavaScript" },
        { icon: "react-original", name: "React.js" },
        { icon: "nextjs-original", name: "Next.js" },
       
      ],
    },
    {
      skills: [
        { icon: "typescript-plain", name: "TypeScript" },
        { icon: "html5-plain", name: "HTML5" },
        { icon: "typescript-plain", name: "TypeScript" },
        { icon: "html5-plain", name: "HTML5" },
        
      ],
    },
 
    {
      skills: [
        { icon: "css3-plain", name: "CSS3" },
        { icon: "bootstrap-plain", name: "Bootstrap" },
        { icon: "tailwindcss-plain", name: "Tailwind CSS" },
        { icon: "spring-plain", name: "Spring Boot" },
        
        
      ],
    },
    {
     
      skills: [
        { icon: "hibernate-plain", name: "Hibernate" },
        { icon: "mysql-plain", name: "MySQL" },
        { icon: "firebase-plain", name: "Firebase" },
        { icon: "git-plain", name: "Git" },
        
        
      ],
    },
     {
      skills: [
        { icon: "github-original", name: "GitHub" },
        { icon: "vscode-plain", name: "VS Code" },
        { icon: "postman-plain", name: "Postman" },
        { icon: "mysql-plain", name: "MySQL Workbench" },
        
      ],
    },
     {
      skills: [
        
       
        { icon: "eclipse-plain", name: "Eclipse" },
        { icon: "canva-original", name: "Canva" },
      ],
    },
  ];

  return (
    <div className="container-fluid min-vh-60 py-5 text-center bg-bg common-text">
      <h2 className="fw-bolder mb-10 fs-1">
        Professional <span className="common-head">Skillset</span>
      </h2>

      {skillSections.map((section, index) => (
      <div className="row justify-content-center g-1">
  {section.skills.map((skill, idx) => (
    <div key={idx} className="col-6 col-md-3 col-lg-2 d-flex justify-content-center">
      <div className="skill-icon">
        <i className={`devicon-${skill.icon} colored`}></i>
        <p>{skill.name}</p>
      </div>
    </div>
  ))}
</div>

      ))}
    </div>
  );
};

export default Skills;
