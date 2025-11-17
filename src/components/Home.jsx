
import React from "react";
import "../styles/Home.css";
import "../styles/Common.css";
import ReactTyped from "react-typed";

const Home = () => {
  return (
    <div className="container-fluid text-content-center bg-bg section-spacing">
      <div className="row justify-content-center">
        <div className="col-12 col-md-10 position-relative home-img-container">
          <img
            src={`${process.env.PUBLIC_URL}/Images/Home Page1.png`}
            alt="Sahaya Jincy"
            className="img-fluid shadow-lg py-5 home-img"
          />      
          
          <div className="overlay"></div>
          <div className="overlay-text text-align-center text-center">
            <p className="fw-bold display-1  home-text">Hi,</p>
            <p className="fw-bold display-1 home-text">I'm Sahaya Jincy 👋</p>

            <h3 className="mb-4 common-text fs-1">
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

            <p className="lead common-text fs-2">
              I'm a passionate Full Stack Developer who loves crafting responsive and dynamic web applications.
            </p>

            <div className="d-flex justify-content-center gap-4 mt-5">
              <a
                href="#contact"
                className="btn custom-btn px-5 py-4 fs-4 text-center rounded-pill"
              >
                Contact Me
              </a>

              <a
                href={`${process.env.PUBLIC_URL}/Sahaya_Jincy_Resume.pdf`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn custom-btn px-5 py-4 fs-4 text-center rounded-pill"
              >
                View CV
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

