import React from "react";
import { Formik, Form, Field } from "formik";

import Schema from "./schema_validation/schema";
import errorHandle from "./errors_validation/errors";

const initialValue = { email: "", name: "", phone: "", message: "" };

export default function Contact({
  h2,
  p,
  name,
  email,
  phone,
  message,
  submit,
  number
}) {
  const fnValidationForm = (v) => alert(JSON.stringify(v));
  return (
    <section className="page-section" id="contact">
      <div className="container px-4 px-lg-5">
        <div className="row gx-4 gx-lg-5 justify-content-center">
          <div className="col-lg-8 col-xl-6 text-center">
            <h2 className="mt-0">{h2}</h2>
            <hr className="divider" />
            <p className="text-muted mb-5">{p}</p>
          </div>
        </div>
        <div className="row gx-4 gx-lg-5 justify-content-center mb-5">
          <div className="col-lg-6">
            <Formik
              initialValues={initialValue}
              validationSchema={Schema}
              onSubmit={fnValidationForm}
            >
              {({ errors }) => {
                return (
                  <Form id="contactForm" data-sb-form-api-token="API_TOKEN">
                    <div className="form-floating mb-3">
                      <Field
                        className="form-control"
                        name="name"
                        type="text"
                        placeholder="Enter your name..."
                      />
                      {errorHandle(errors).name()}
                      <label htmlFor="name">{name}</label>
                    </div>
                    <div className="form-floating mb-3">
                      <Field
                        className="form-control"
                        name="email"
                        type="email"
                        placeholder="name@example.com"
                      />
                      {errorHandle(errors).email()}
                      <label htmlFor="email">{email}</label>
                    </div>
                    <div className="form-floating mb-3">
                      <Field
                        className="form-control"
                        name="phone"
                        type="tel"
                        placeholder="(123) 456-7890"
                      />
                      {errorHandle(errors).phone()}
                      <label htmlFor="phone">{phone}</label>
                    </div>
                    <div className="form-floating mb-3">
                      <Field
                        as="textarea"
                        className="form-control"
                        name="message"
                        type="text"
                        placeholder="Enter your message here..."
                      ></Field>
                      {errorHandle(errors).message()}
                      <label htmlFor="message">{message}</label>
                    </div>
                    <div className="d-grid">
                      <button
                        className="btn btn-primary btn-xl"
                        id="submitButton"
                        type="submit"
                      >
                        {submit}
                      </button>
                    </div>
                  </Form>
                );
              }}
            </Formik>
          </div>
        </div>
        <div className="row gx-4 gx-lg-5 justify-content-center">
          <div className="col-lg-4 text-center mb-5 mb-lg-0">
            <i className="bi-phone fs-2 mb-3 text-muted"></i>
            <div>{number}</div>
          </div>
        </div>
      </div>
    </section>
  );
}
