import React from "react";
import "../styles/Home.css";
import "../styles/Common.css";
import ReactTyped from "react-typed";

const Home = () => {
  return (
    <div className="container-fluid py-4 mt-5 text-content-center bg-bg section-spacing">
      <div className="col align-items-center justify-content-center">
        <div className="col text-center">
          <h1 className="fw-bold m-3 display-1 py-5 pt-5 home-text text-center">
            Hi, I'm Sahaya Jincy 👋
          </h1>
        
          <h3 className="mb-4 common-text fs-1 text-center">
            <ReactTyped
              strings={[
                "💼 Full Stack Developer",
                "⚛️ React.js Developer",
                "🌐 Frontend Developer",
                "🧩 Java Full Stack Developer",
                "🧠 Software Developer",
                "🚀 Web Developer",
              ]}
              typeSpeed={80}
              backSpeed={40}
              loop
            />
          </h3>

          <p className="lead common-text fs-3 text-center">
            I'm a passionate Full Stack Developer who loves crafting responsive and dynamic web applications.
          </p>

          
          <div className="d-flex justify-content-center gap-5 mt-5">
            <a
              href="#contact"
              className="btn custom-btn px-5 py-4 fs-3 rounded-pill"
            >
              Contact Me
            </a>

 <a
  href={`${process.env.PUBLIC_URL}/Sahaya_Jincy_Resume.pdf`}
  target="_blank"
  rel="noopener noreferrer"
  className="btn custom-btn px-5 py-4 fs-3 rounded-pill"
>
  👁️ View CV
</a>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
