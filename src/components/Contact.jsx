import React from "react";
import "../styles/Common.css";
import "../styles/Contact.css";

const Contact = () => {
  return (
    <div className="d-flex flex-column justify-content-center align-items-center text-center px-3 pt-5 bg-bg">
      <h2 className="fw-semibold common-head mb-3 fs-1">Contact</h2>
      <p className="common-text mb-4 fs-4">
        Feel free to reach out — I’d love to connect!
      </p>

      <form className="contact-form w-100 mb-4" style={{ maxWidth: "700px" }}>
        <div className="mb-3">
          <input type="text" placeholder="Your Name" className="form-control fs-3" />
        </div>
        <div className="mb-3">
          <input type="email" placeholder="Your Email" className="form-control fs-3" />
        </div>
        <div className="mb-3">
          <textarea
            rows="10"
            placeholder="Your Message"
            className="form-control fs-3"
          ></textarea>
        </div>
        <button type="submit" className="btn contact-btn w-90 rounded-pill fs-3">
          Send Message
        </button>
      </form>

      <div className="d-flex justify-content-center gap-4 mt-3">
      
        <a
          href="mailto:r.sahayajincy@gmail.com"
          className="common-text fs-1"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="bi bi-envelope-fill"></i>
        </a>

       
        <a
          href="https://www.linkedin.com/in/sahaya-jincy-b9a53629a"
          className="common-text fs-1"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="bi bi-linkedin"></i>
        </a>

        <a
          href="https://github.com/SahayaJincy"
          className="common-text fs-1"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="bi bi-github"></i>
        </a>
      </div>
    </div>
  );
};

export default Contact;
