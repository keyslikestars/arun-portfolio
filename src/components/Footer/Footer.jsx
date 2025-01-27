import React from "react";
import "../Footer/footer.scss";
import { RiArrowRightSFill, RiMailSendLine, RiMapPinRangeLine, RiWhatsappLine } from "react-icons/ri";

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="section">
          <div className="logosec">
              <h2 className="logo">| <span>Desi<strong style={{color:"white", fontSize:"38px"}}>g</strong>nfolio</span>
              </h2>
          </div>
        </div>

        <div className="section">
          <h3>Quick Links</h3>
          <ul>
            <li><RiArrowRightSFill className="arrow"/><a href="#Home">Home</a></li>
            <li><RiArrowRightSFill className="arrow"/><a href="#About">About </a></li>
            <li><RiArrowRightSFill className="arrow"/><a href="#Portfolio">Portfolio</a></li>
            <li><RiArrowRightSFill className="arrow"/><a href="#Projects">Projects</a></li>
            <li><RiArrowRightSFill className="arrow"/><a href="#Contact">Contact Us</a></li>  
          </ul>
        </div>

        <div className="section contactus">
          <h3>Contact Us</h3>
          <p><RiMapPinRangeLine style={{ marginRight:"5px"}}/>Irinjalakuda ,Thrissur 680688</p>
          <p><RiWhatsappLine style={{ marginRight:"5px" }}/><a href="//wa.me/9995677813/?text=Hello%20im%20Arun%20How%20can%20Help%20You?">9995677813</a></p>
          <p><RiMailSendLine style={{ marginRight:"5px"}}/><a href="mailto:arunps606@gmail.com">Arunps606@gmail.com</a></p>
        </div>

        <div className="section">
          <h3>Remain Updated</h3>
          <form className="newsletter">
            <input type="email" placeholder="Your email address" />
            <button type="submit">Sign up</button>
          </form>
        </div>
      </div>

      <div className="bottom">
        <h4><span> © </span>2025. All rights reserved.</h4>
        <p>Designed by <span>Arun Suresh</span></p>
      </div>
    </footer>
  );
};

export default Footer;
