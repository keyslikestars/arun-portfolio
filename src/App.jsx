import React from "react";
import "./App.scss";
import Navbar from "./components/navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Projects from "./components/Projects/Projects";
import About from "./components/About/About";
import Portfolio from "./components/Portfolio/Portfolio";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import ScrollToTop from "react-scroll-up";
import { RxThickArrowUp } from "react-icons/rx";

function App() {
  return (
    <div>
      <ScrollToTop showUnder={160} >
        <RxThickArrowUp className="arrowup"/>
        <p>Top</p>
      </ScrollToTop>
      <section id="Home">
        <Navbar />
        <Hero />
      </section>
      <section id="About">
        <About />
      </section>
      {/*<section id="Portfolio">
        <Portfolio />
      </section>
      <div id="Projects">
        <Projects />
      </div>
      <section id="Contact">
        <Contact />
      </section>
      <section><Footer/></section> */}
    </div>
  );
}

export default App;
