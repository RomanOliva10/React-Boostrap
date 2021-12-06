import React, { Fragment } from "react";
import "./style.css";
import Nav from "./components/nav/nav";
import Header from "./components/header/header";
import About from "./components/about/about";
import Services from "./components/services/services";
import Portfolio from "./components/portfolio/portfolio";
import Call from "./components/call/call";
import Contact from "./components/contact/contact";
import Footer from "./components/footer/footer";
import { useSelector } from "react-redux";

export default function App() {
  const texts = useSelector((state) => state.texts);
  return (
    <Fragment>
      <Nav
        a1={texts.nav.a1}
        a2={texts.nav.a2}
        a3={texts.nav.a3}
        a4={texts.nav.a4}
        a5={texts.nav.a5}
      />
      <Header h1={texts.header.h1} p={texts.header.p} a={texts.header.a} />
      <About h2={texts.about.h2} p={texts.about.p} a={texts.about.a} />
      <Services
        h2={texts.services.h2}
        h31={texts.services.h31}
        p1={texts.services.p1}
        h32={texts.services.h32}
        p2={texts.services.p2}
        h33={texts.services.h33}
        p3={texts.services.p3}
        h34={texts.services.h34}
        p4={texts.services.p4}
      />
      <Portfolio
        category={texts.portfolio.category}
        name={texts.portfolio.name}
      />
      <Call h2={texts.call.h2} a={texts.call.a} />
      <Contact
        h2={texts.contact.h2}
        name={texts.contact.name}
        email={texts.contact.email}
        phone={texts.contact.phone}
        message={texts.contact.message}
        submit={texts.contact.submit}
        number={texts.contact.number}
      />
      <Footer p={texts.footer.p} />
    </Fragment>
  );
}
