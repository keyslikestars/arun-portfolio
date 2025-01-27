import React from "react";
import "./Portfolio.scss";
import { RiArrowRightUpLine } from "react-icons/ri";

window.addEventListener("scroll", reveal);

function reveal() {
  const reveals = document.querySelectorAll(".reveal");

  for (var i = 0; i < reveals.length; i++) {
    const windowHeight = window.innerHeight;
    const revealTop = reveals[i].getBoundingClientRect().top;
    const revealPoint = 150;

    if (revealTop < windowHeight - revealPoint) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
}

function Gallery() {
  return (
    <div className="main-container">
      <div className="portfolio-wrapper reveal">
        <div className="portfolio-title">
          <h3>PORTFOLIO</h3>
        </div>
        <div className="portfolio-content">
          <div className="portfolio-container">
            <div className="card" data-name="web-design">
              <div className="card-img">
                <img
                  src="../src/assets/gallery8.png"
                  alt="react"
                  width={"100%"}
                />
              </div>
              <div className="card-info">
                <span>Web Design</span>
                <h4>Responsive</h4>
                <a href="">
                  <RiArrowRightUpLine className="card-btn"></RiArrowRightUpLine>
                </a>
              </div>
            </div>

            <div className="card" data-name="web-design">
              <div className="card-img">
                <img
                  src="../src/assets/gallery2.png"
                  alt="react"
                  width={"100%"}
                />
              </div>
              <div className="card-info">
                <span>Web Design</span>
                <h4>Plusgen</h4>
                <a href="https://keyslikestars.github.io/plusgen/">
                  <RiArrowRightUpLine className="card-btn"></RiArrowRightUpLine>
                </a>
              </div>
            </div>

            <div className="card" data-name="templates">
              <div className="card-img">
                <img
                  src="../src/assets/gallery3.png"
                  alt="react"
                  width={"100%"}
                />
              </div>
              <div className="card-info ">
                <span>Web Design</span>
                <h4>Portfolio</h4>
                <a href="https://keyslikestars.github.io/Designfolio/">
                  <RiArrowRightUpLine className="card-btn"></RiArrowRightUpLine>
                </a>
              </div>
            </div>

            <div className="card">
              <div className="card-img">
                <img
                  src="../src/assets/gallery5.jpg"
                  alt="react"
                  width={"100%"}
                />
              </div>
              <div className="card-info">
                <span>Gallery</span>
                <h4>Dynamic</h4>
                <a href="https://www.google.co.in/">
                  <RiArrowRightUpLine className="card-btn"></RiArrowRightUpLine>
                </a>
              </div>
            </div>

            <div className="card">
              <div className="card-img">
                <img
                  src="../src/assets/gallery6.jpg"
                  alt="react"
                  width={"100%"}
                />
              </div>
              <div className="card-info">
                <span>Gallery</span>
                <h4>AR Developers</h4>
                <a href="">
                  <RiArrowRightUpLine className="card-btn"></RiArrowRightUpLine>
                </a>
              </div>
            </div>

            <div className="card">
              <div className="card-img">
                <img
                  src="../src/assets/gallery7.jpg"
                  alt="react"
                  width={"100%"}
                />
              </div>
              <div className="card-info">
                <span>Gallery</span>
                <h4>AR Studio</h4>
                <a href="">
                  <RiArrowRightUpLine className="card-btn"></RiArrowRightUpLine>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Gallery;
