import React from "react";

export default function Call({ h2, a }) {
  return (
    <section className="page-section bg-dark text-white">
      <div className="container px-4 px-lg-5 text-center">
        <h2 className="mb-4">{h2}</h2>
        <a
          className="btn btn-light btn-xl"
          href="https://startbootstrap.com/theme/creative/"
        >
          {a}
        </a>
      </div>
    </section>
  );
}
