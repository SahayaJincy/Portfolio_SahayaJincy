import React from "react";
import "../styles/Common.css";
import "../styles/Contact.css";

const Contact = () => {
  return (
    <div className="d-flex flex-column justify-content-center align-items-center text-center bg-bg">
      <p className="fw-semibold common-head">Contact</p>
      <p className="common-text fs-3 mb-4">
        Feel free to reach out — I’d love to connect!
      </p>

      <form className="contact-form w-100 mb-4" style={{ maxWidth: "700px" }}>
        <div  className="mb-3">
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
        <button type="submit" className="btn contact-btn w-90 ">
          Send Message
        </button>
      </form>

      <div className="d-flex justify-content-center gap-4 mb-5">
      
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
