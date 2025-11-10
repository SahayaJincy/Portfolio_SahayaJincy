import React from "react";
import '../styles/Header.css';

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg shadow-sm fixed-top navbar-dark nav-bar">
      <div className="container">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-center nav-link" id="navbarNav">
          <ul className="navbar-nav">
            {["home", "about", "skills", "projects", "contact"].map((item) => (
              <li key={item} className="nav-item">
                <a href={`#${item}`} className="nav-link">
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
