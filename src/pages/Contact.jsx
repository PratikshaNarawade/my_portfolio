import React from "react";
import "./Contact.css";
import profileImg from "../assets/photo 1.png";
import { FaGithub, FaLinkedin, FaGoogle, FaTwitter, FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom";
import cvFile from "../assets/Resume_PratikshaNarawade.pdf";
import blogImg from "../assets/blogImg.png";

const Contact = () => {
  return (
    <>
      <header>
        <nav className="navbar">
          <h2 className="logo">Portfolio</h2>
          <ul className="nav-links">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">Education and Certifications</Link></li>
            <li><Link to="/experience">Experience</Link></li>
            <li><Link to="/projects">Projects</Link></li>
            <li><Link to="/contact">Contact and Resume</Link></li>
          </ul>
        </nav>
      </header>

      <section className="contact">
        <div className="contact-container">
          {/* Left Side - Image */}
          <div className="contact-left">
            <img src={profileImg} alt="Profile" className="contact-img" />
          </div>

          {/* Right Side - Info */}
          <div className="contact-right">
            <h2 className="contact-title">Contact Me</h2>
            <p className="contact-text">
              You can contact me at the places mentioned below. I will try to get back
              to you as fast as I can.
            </p>

            {/* Social Icons */}
            <div className="contact-icons">
              <a href="https://github.com/PratikshaNarawade" target="_blank" rel="noreferrer">
                <FaGithub />
              </a>
              <a href="https://www.linkedin.com/in/pratiksha-narawade-79a57428b/" target="_blank" rel="noreferrer">
                <FaLinkedin />
              </a>
              <a href="mailto:pratikshanarawade2002@gmail.com" target="_blank" rel="noreferrer">
                <FaGoogle />
              </a>
              <a href="https://www.linkedin.com/in/pratiksha-narawade-79a57428b/" target="_blank" rel="noreferrer">
                <FaTwitter />
              </a>
              <a href="https://instagram.com/" target="_blank" rel="noreferrer">
                <FaInstagram />
              </a>
            </div>

            {/* Resume Button */}
            <a
              href={cvFile}
              download
              target="_blank"
              rel="noreferrer"
              className="resume-btn"
            >
              See my Resume
            </a>
          </div>
        </div>
      </section>

      
    <section className="blogs">
      <div className="blogs-container">
        {/* Left Side - Text */}
        <div className="blogs-left">
          <h2 className="blogs-title">Blogs</h2>
          <p className="blogs-text">
            I don't blog frequently but when I do something awesome, I do try to 
            document it so it can be helpful to others. I write on LinkedIn.
          </p>
          <a
            href="https://www.linkedin.com/in/pratiksha-narawade-79a57428b/"
            target="_blank"
            rel="noreferrer"
            className="blogs-btn"
          >
            My LinkedIn Profile
          </a>
        </div>

        {/* Right Side - Image */}
        <div className="blogs-right">
          <img src={blogImg} alt="Blogs Illustration" className="blogs-img" />
        </div>
      </div>
    </section>

      <footer className="footer">
        <p>Made with ❤️ by Pratiksha Narawade</p>
      </footer>
    </>
  );
};

export default Contact;
