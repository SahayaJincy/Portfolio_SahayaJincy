import React from "react";
import "../styles/Common.css";
import "../styles/About.css";

const About = () => {
  return (
    <div className="container-fluid section-spacing section-full d-flex align-items-center bg-bg">
      <div className="row justify-content-center text-center px-3 px-lg-5">
        <div className="col-12 col-md-10 col-sm-6  mt-5 about-img">
          <img src={`${process.env.PUBLIC_URL}/Images/Sahaya Jincy.jpg`}
            alt="Sahaya Jincy"
            className="img-fluid shadow-lg about-img"
          />
        </div>
        
 
        
        <p className="fw-bolder mt-4 mb-2 text-center common-head">About Me</p>

     
        <div className="container col-10 text-justify-center">
          <p className="mb-3 lh-lg fs-2 common-text">
            Hi, I'm <span className="fw-semibold spcl">Sahaya Jincy</span>, a passionate <span className="fw-semibold spcl">Full Stack Developer</span> with a background in <span className="fw-semibold spcl">Computer Science and Engineering</span>. I love turning creative ideas into responsive, user-friendly, and visually engaging web applications.

I have hands-on experience with <span className="fw-semibold spcl"> ReactJS, Java, Spring Boot, MySQL, Firebase,</span> and <span className="fw-semibold spcl"> modern frontend frameworks</span>. During my internship, I led a team, managed reports, and collaborated on <span className="fw-semibold spcl">GitHub</span>, which strengthened my leadership and teamwork skills.

Beyond coding, I enjoy <span className="fw-semibold spcl">dancing, graphic designing (Canva), and gardening,</span> which fuel my creativity. I’m driven to learn, innovate, and build impactful applications that connect technology with creativity.
            </p>
        </div>
      </div>
    </div>
  );
};

export default About;
