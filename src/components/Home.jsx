import React from "react";
import "../styles/Home.css";
import "../styles/Common.css";
import ReactTyped from "react-typed";

const Home = () => {
  return (
    <div className="home-container section-full section-spacing d-flex align-items-top justify-content-center text-center bg-bg">
      <div className="row w-100 h-100 align-items-center justify-content-center">
        <div className="col-lg-6 col-md-6 text-lg-start text-center">
          <h2 className="fw-bold display-1 mb-3 py-5 home-text text-center">
            Hi, I'm Sahaya Jincy 👋
          </h2>

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
  href="/resume"
  target="_blank"
  rel="noopener noreferrer"
  className="btn custom-btn px-5 py-4 fs-3 rounded-pill"
>
  View CV
</a>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
