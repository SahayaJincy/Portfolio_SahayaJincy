import React from "react";
import "../styles/Home.css";
import "../styles/Common.css";
import ReactTyped from "react-typed";
import homeBg from "./Images/HomeImg.png";

const Home = () => {
  return (
    <div className="home-bg" style={{ backgroundImage: `url(${homeBg})` }}>
      <div className="container-fluid text-content-center section-spacing">
        <div className="row justify-content-center">
          
          <div className="col-12 col-md-10 col-sm-6 text-center py-5 home-img-container">

            <div className="overlay"></div>

            <div className="overlay-text">
              <p className="fw-bold display-3 home-text">Hi,</p>
              <p className="fw-bold display-3 home-text">I'm Sahaya Jincy 👋</p>

              <h3 className="mb-4 common-text fs-3">
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

              <p className="lead common-text fs-3">
                I'm a passionate Full Stack Developer who loves crafting responsive and dynamic web applications.
              </p>

              <div className="col-12 d-flex justify-content-center gap-4">
                <a href="#contact" className="btn custom-btn mt-2 px-3 py-2">
                  Contact Me
                </a>

                <a
                  href={`${process.env.PUBLIC_URL}/Sahaya_Jincy_Resume.pdf`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn custom-btn mt-2 px-3 py-2"
                >
                  View CV
                </a>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
