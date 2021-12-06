import React from "react";

export default function Services({ h2, h31, h32, h33, h34, p1, p2, p3, p4 }) {
  return (
    <section className="page-section" id="services">
      <div className="container px-4 px-lg-5">
        <h2 className="text-center mt-0">{h2}</h2>
        <hr className="divider" />
        <div className="row gx-4 gx-lg-5">
          <div className="col-lg-3 col-md-6 text-center">
            <div className="mt-5">
              <div className="mb-2">
                <i className="bi-gem fs-1 text-primary"></i>
              </div>
              <h3 className="h4 mb-2">{h31}</h3>
              <p className="text-muted mb-0">{p1}</p>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 text-center">
            <div className="mt-5">
              <div className="mb-2">
                <i className="bi-laptop fs-1 text-primary"></i>
              </div>
              <h3 className="h4 mb-2">{h32}</h3>
              <p className="text-muted mb-0">{p2}</p>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 text-center">
            <div className="mt-5">
              <div className="mb-2">
                <i className="bi-globe fs-1 text-primary"></i>
              </div>
              <h3 className="h4 mb-2">{h33}</h3>
              <p className="text-muted mb-0">{p3}</p>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 text-center">
            <div className="mt-5">
              <div className="mb-2">
                <i className="bi-heart fs-1 text-primary"></i>
              </div>
              <h3 className="h4 mb-2">{h34}</h3>
              <p className="text-muted mb-0">{p4}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
