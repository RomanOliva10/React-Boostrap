import React from "react";

export default function About({ h2, p, a }) {
  return (
    <section className="page-section bg-primary" id="about">
      <div className="container px-4 px-lg-5">
        <div className="row gx-4 gx-lg-5 justify-content-center">
          <div className="col-lg-8 text-center">
            <h2 className="text-white mt-0">{h2}</h2>
            <hr className="divider divider-light" />
            <p className="text-white-75 mb-4">{p}</p>
            <a className="btn btn-light btn-xl" href="#services">
              {a}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
