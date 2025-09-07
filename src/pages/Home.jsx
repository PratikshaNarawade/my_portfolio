import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";
import heroImg from "../assets/hero1.png";
import whatIdo from "../assets/whatIdo.png";
import { FaGithub, FaLinkedin, FaGoogle, FaTwitter, FaInstagram } from "react-icons/fa";

// Tech Logos
import reactLogo from "../assets/language icons/react.png";
import nodeLogo from "../assets/language icons/node.png";
import sqlLogo from "../assets/language icons/sql-server.png";
import java from "../assets/language icons/java.png";
import mysql from "../assets/language icons/mysql.png";
import angular from "../assets/language icons/programing.png";
import python from "../assets/language icons/python.png";
import postgresql from "../assets/language icons/database.png";
import android from "../assets/language icons/android.png";
import css from "../assets/language icons/css-3.png";
import git from "../assets/language icons/git.png";
import github from "../assets/language icons/github-sign.png";
import html from "../assets/language icons/html-5.png";
import gitlab from "../assets/language icons/gitlab.png";
import js from "../assets/language icons/js.png";
import windows from "../assets/language icons/windows.png";
import aws from "../assets/language icons/aws.png";
import docker from "../assets/language icons/docker.png";

const projects = [
  {

    tech: [
      { src: reactLogo, name: "React" },
      { src: nodeLogo, name: "Node.js" },
      { src: sqlLogo, name: "SQL Server" },
      { src: java, name: "Java" },
      { src: mysql, name: "MySQL" },
      { src: angular, name: "Angular" },
      { src: python, name: "Python" },
      { src: postgresql, name: "PostgreSQL" },
      { src: windows, name: "Windows" },
      { src: html, name: "HTML5" },
      { src: css, name: "CSS3" },
      { src: android, name: "Android" },
      { src: git, name: "Git" },

      { src: github, name: "Github" },
      { src: gitlab, name: "Gitlab" },
      { src: js, name: " Javascript" },
      { src: aws, name: "AWS" },
      { src: docker, name: "Docker" },

    ],

  },
];

const Home = () => {
  return (
    <>
      {/* Navbar */}
      <header>
        <nav className="navbar">
          <h2 className="logo">Portfolio</h2>
          <ul className="nav-links">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">Education and Certifications</Link></li>
            <li><Link to="/experience">Experience</Link></li>
            <li><Link to="/projects">Projects</Link></li>
            <li><Link to="/contact">Contact and Resume

            </Link></li>
          </ul>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-container">
          {/* Left Side - Text */}
          <div className="hero-left">
            <h1>
              Hello <span className="wave">👋</span>.
            </h1>
            <p className="intro">
              I'm <span className="highlight">Pratiksha Narawade</span>. Aspiring
              Full-Stack Developer: Creating Optimized 🔥, Interactive Web
              Applications.
            </p>

            {/* Social Icons */}
            <div className="social-icons">
              <a href="https://github.com/PratikshaNarawade" target="_blank" rel="noreferrer">
                <FaGithub />
              </a>
              <a href="https://www.linkedin.com/in/pratiksha-narawade-79a57428b/" target="_blank" rel="noreferrer">
                <FaLinkedin />
              </a>
              <a href="mailto:pratikshanarawade2002@gmail.com" target="_blank" rel="noreferrer">
                <FaGoogle />
              </a>
              <a href="https://twitter.com/" target="_blank" rel="noreferrer">
                <FaTwitter />
              </a>
              <a href="https://instagram.com/" target="_blank" rel="noreferrer">
                <FaInstagram />
              </a>
            </div>

            {/* Button */}
            <a href="/contact" className="btn">
              Contact Me
            </a>
          </div>

          {/* Right Side - Image */}
          <div className="hero-right">
            <img src={heroImg} alt="Illustration" />
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="experience">
        <h1 className="ido">Here's what I do</h1>
        <div className="exp-container">
          {/* Left Section */}
          <div className="exp-left">
            <img src={whatIdo} alt="Experience Illustration" />
          </div>

          {/* Right Section */}
          <div className="exp-right">
            <h3 className="title">Full Stack Development</h3>
            <div className="tech-icons">
              {projects[0].tech.map((techItem, i) => (
                <img
                  key={i}
                  src={techItem.src}
                  alt={techItem.name}
                  title={techItem.name} // Tooltip with name
                  className="tech-logo"
                />
              ))}
            </div>
            <div className="text">
              <p> Providing optimized full-stack web application solutions</p>
              <p> Building interactive and responsive user interfaces</p>
              <p> Developing robust and efficient backend systems</p>
              <p> Ensuring high-speed performance and reliability</p>
              <p> Managing DevOps and server deployments</p>
              <p>Proficient in cloud platform deployment</p>
              <p> Expertise in website hosting and management</p>
              <p> Skilled in Continuous Integration practices</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>Made with ❤️ by Pratiksha Narawade</p>
      </footer>
    </>
  );
};

export default Home;
