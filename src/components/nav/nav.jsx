import React from "react";
// import "./nav.css";

export default function Nav({ a1, a2, a3, a4, a5 }) {
  return (
    <nav
      className="navbar navbar-expand-lg navbar-light fixed-top py-3"
      id="mainNav"
    >
      <div className="container px-4 px-lg-5">
        <a className="navbar-brand" href="#page-top">
          {a1}
        </a>
        <button
          className="navbar-toggler navbar-toggler-right"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarResponsive"
          aria-controls="navbarResponsive"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarResponsive">
          <ul className="navbar-nav ms-auto my-2 my-lg-0">
            <li className="nav-item">
              <a className="nav-link" href="#about">
                {a2}
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#services">
                {a3}
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#portfolio">
                {a4}
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#contact">
                {a5}
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
