// import React from "react";
// import "../styles/Home.css";
// import "../styles/Common.css";
// import ReactTyped from "react-typed";

// const Home = () => {
//   return (
//     <div className="container-fluid py-4 mt-5 text-content-center bg-bg section-spacing">
//       <div className="col-12 col-md-10 justify-content-center py-5 img-fluid home-img">
//           <img src={`${process.env.PUBLIC_URL}/Images/Home Page.png`}
//             alt="Sahaya Jincy"
//             className="img-fluid shadow-lg home-img"
//           />
//           <div className="overlay"></div>
//       <div className="col align-items-center justify-content-center">
//         <div className="col text-center">
//           <p className="fw-bold  display-1 py-5 pt-5 home-text text-center">
//             Hi, 
//           </p>
//           <p className="fw-bold display-1 py-5 home-text text-center">
    
//             I'm Sahaya Jincy 👋
//           </p>
        
//           <h3 className="mb-4 common-text fs-1 text-center">
//             <ReactTyped
//               strings={[
//                 "💼 Full Stack Developer",
//                 "⚛️ React.js Developer",
//                 "🌐 Frontend Developer",
//                 "🧩 Java Full Stack Developer",
//                 "🧠 Software Developer",
//                 "🚀 Web Developer",
//               ]}
//               typeSpeed={80}
//               backSpeed={40}
//               loop
//             />
//           </h3>

//           <p className="lead common-text fs-3 text-center">
//             I'm a passionate Full Stack Developer who loves crafting responsive and dynamic web applications.
//           </p>

          
//           <div className="d-flex justify-content-center gap-5 mt-5">
//             <a
//               href="#contact"
//               className="btn custom-btn px-5 py-4 fs-3 rounded-pill"
//             >
//               Contact Me
//             </a>

//  <a
//   href={`${process.env.PUBLIC_URL}/Sahaya_Jincy_Resume.pdf`}
//   target="_blank"
//   rel="noopener noreferrer"
//   className="btn custom-btn px-5 py-4 fs-3 rounded-pill"
// >
//   👁️ View CV
// </a>

//           </div>
//         </div>
//       </div>
//       </div>
//     </div>
//   );
// };

// export default Home;
import React from "react";
import "../styles/Home.css";
import "../styles/Common.css";
import ReactTyped from "react-typed";

const Home = () => {
  return (
    <div className="container-fluid py-5 mt-5 text-content-center bg-bg section-spacing">
      <div className="row justify-content-center">
        <div className="col-12 col-md-8 position-relative home-img-container">
          <img
            src={`${process.env.PUBLIC_URL}/Images/Home Page1.png`}
            alt="Sahaya Jincy"
            className="img-fluid shadow-lg py-5 home-img"
          />      
          
          <div className="overlay"></div>

          <div className="overlay-text text-center text-light">
            <p className="fw-bold display-1 home-text">Hi,</p>
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

            <p className="lead common-text fs-3">
              I'm a passionate Full Stack Developer who loves crafting responsive and dynamic web applications.
            </p>

            <div className="d-flex justify-content-center gap-4 mt-5">
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
    </div>
  );
};

export default Home;

