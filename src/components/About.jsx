import React from "react";
import "../styles/Common.css";
import "../styles/About.css";

const About = () => {
  return (
    <div className="container-fluid section-spacing section-full d-flex align-items-center bg-bg py-5">
      <div className="row w-100 justify-content-center text-center px-3 px-lg-5">
        
        
        <div className="mt-4 mt-lg-0 about-img">
          <img
            src="/Images/Sahaya Jincy.jpg"
            alt="Sahaya Jincy"
            className="img-fluid shadow-lg about-img"
          />
        </div>
        

        
        <h2 className="fw-bolder fs-1 mb-4 text-center common-head">About Me</h2>

     
        <div className="about-text-container text-justify">
          <p className="fs-2 mb-3 common-text">
            Hi, I'm <span className="fw-semibold spcl">Sahaya Jincy</span>, a passionate 
            <span className="fw-semibold spcl"> Full Stack Developer</span> with a strong foundation 
            in <span className="fw-semibold spcl">Computer Science and Engineering</span>. I love 
            transforming creative ideas into functional, user-friendly, and visually appealing digital experiences.
          </p>

          <p className="fs-2 mb-3 common-text">
            With hands-on experience in technologies like <span className="fw-semibold spcl">ReactJS, Java, Spring Boot, MySQL, Firebase, and modern frontend frameworks</span>, 
            I’ve developed responsive web applications that blend performance, design, and usability.
          </p>

          <p className="fs-2 mb-3 common-text">
            I enjoy both the <span className="fw-semibold spcl">technical</span> and 
            <span className="fw-semibold spcl"> creative</span> sides of development — from writing clean, efficient code 
            to designing beautiful UIs. During my internship, I led my team, managed reports, and collaborated 
            using <span className="fw-semibold spcl">GitHub</span>, which strengthened my leadership and teamwork skills.
          </p>

          <p className="fs-2 mb-3 common-text">
            Beyond coding, I express my creativity through <span className="fw-semibold spcl">dancing, graphic designing (Canva)</span>, and 
            <span className="fw-semibold spcl"> gardening</span>, while music keeps me inspired and balanced.
          </p>

          <p className="fs-2 mb-3 common-text">
            Driven by curiosity and purpose, my goal is to continuously learn, innovate, and build impactful applications 
            that connect technology with creativity and make a positive difference.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
