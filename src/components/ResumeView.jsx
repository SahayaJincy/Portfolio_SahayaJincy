import React from "react";
import "../styles/Common.css";

const ResumeView = () => {
  const pdfFile = "/Files/Sahaya Jincy.pdf"; 

  return (
    <div className="resume-page bg-dark text-center" style={{ height: "100vh" }}>
      <div className="pt-3">
        <a
          href={pdfFile}
          download="Sahaya_Jincy_Resume.pdf"
          className="btn btn-warning px-4 py-2 rounded-pill"
        >
          ⬇️ Download CV
        </a>
      </div>

      <iframe
        src={pdfFile}
        title="Sahaya Jincy Resume"
        width="80%"
        height="90%"
        style={{
          marginTop: "20px",
          border: "none",
          background: "white",
          borderRadius: "10px",
          boxShadow: "0 0 15px rgba(255,255,255,0.2)",
        }}
      ></iframe>
    </div>
  );
};

export default ResumeView;
