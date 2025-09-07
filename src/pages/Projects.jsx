import React from "react";
import "./Projects.css";
import { Link } from "react-router-dom";
import projectImg from "../assets/project.png";

// Import image icons
import reactLogo from "../assets/language icons/react.png";
import nodeLogo from "../assets/language icons/node.png";
import sqlLogo from "../assets/language icons/sql-server.png";
import java from "../assets/language icons/java.png";
import mysql from "../assets/language icons/mysql.png";
import angular from "../assets/language icons/programing.png";
import python from "../assets/language icons/python.png";
import postgresql from "../assets/language icons/database.png";
import react from "../assets/language icons/react.png";
import javalogo from "../assets/language icons/java.png";
import postgresqllogo from "../assets/language icons/database.png";

const projects = [
  {
    title: "Visitor Management System",
    description:
      "Our Visitor Management System simplifies guest registration and entry, issuing digital passes upon approval. A comprehensive dashboard tracks current and past visitors for efficient management.",
    tech: [
      { src: reactLogo, name: "React" },
      { src: nodeLogo, name: "Node.js" },
      { src: sqlLogo, name: "SQL Server" },
    ],
    url: "https://github.com/PratikshaNarawade",
  },
  {
    title: "Online Survey Management System",
    description: (
      <>
        Save the time for manual evaluation of survey and poll. Make it easy for
        users by using questions of different categories in the place of a special
        questions sheet. Provide facility for preparing Model Question and Answer.
        Make Results in a more graphical manner:
        <ul>
          <li>Real-time Data Collection</li>
          <li>Analytics and Reporting</li>
          <li>Data Security</li>
        </ul>
      </>
    ),
    tech: [{ src: java, name: "Java" },
    { src: mysql, name: "SQL" },
    ],
    url: "https://github.com/PratikshaNarawade",
  },
  {
    title: "Code generation using AI",
    description: (
      <>
        Code generation using AI has a wide and promising scope across various domains. Here are some areas where
        AI-powered code generation can be particularly impactful:
        <ul>
          <li>Automated Software Development</li>
          <li>Code Optimization</li>
          <li>Education and Skill Development</li>
        </ul>
      </>
    ),
    tech: [{ src: angular, name: "Angular" },
    { src: python, name: "Python" },
    { src: postgresql, name: "PostgreSQL" },],
    url: "https://github.com/PratikshaNarawade",
  },
  {
    title: "Wave Bill Application",
    description: (
      <>
        Point of Sale (POS) Billing Application is a comprehensive system designed to streamline sales transactions,
        inventory management, and customer interactions in retail businesses. This application enables businesses to
        efficiently generate invoices and manage product stock in real time.
        <ul>
          <li>Automating billing processes</li>
          <li>Reducing human errors</li>
          <li>Improving customer service</li>
        </ul>
      </>
    ),
    tech: [{ src: react, name: "React" },
    { src: javalogo, name: "Java" },
    { src: postgresqllogo, name: "PostgreSQL" },],
    url: "https://github.com/PratikshaNarawade",
  },
];

const Projects = () => {
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

      {/* Section 1 - About Projects */}
      <section className="projects-section">
        <div className="projects-container">
          {/* Left side image */}
          <div className="projects-image">
            <img src={projectImg} alt="Projects Illustration" />
          </div>

          {/* Right side text */}
          <div className="projects-text">
            <h2>Projects</h2>
            <p>
              I specialize in building innovative and scalable applications using a diverse set of technologies, including <b>React, Java, Python, Angular, SQL, and PostgreSQL.</b> My projects span across multiple domains, showcasing expertise in both frontend and backend development.
            </p>
            <p>
              Notable work includes developing a comprehensive e-commerce platform, a B2B application, an AI-powered chatbot integration, data visualization dashboards, and social media analytics tools. Leveraging React and Angular for seamless and responsive user interfaces, combined with robust backend services built in Java, Node.js, and Python, I deliver solutions that are both efficient and scalable.
            </p>
            <p>
              I also bring strong database management experience, working extensively with SQL and PostgreSQL to design and optimize schemas, queries, and transaction handling. These projects demonstrate my ability to create full-stack web applications with features such as user authentication, role-based access control, product catalog management, AI integration, and real-time data visualization.
            </p>
          </div>
        </div>
      </section>

      {/* Section 2 - Project Cards */}
      <section className="projects-section" id="projects">
        <h2 className="projects-title">My Projects</h2>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <a
              key={index}
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="project-card-link"
            >
              <div className="project-card">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="tech-icons">
                  {project.tech.map((techItem, i) => (
                    <img
                      key={i}
                      src={techItem.src}
                      alt={techItem.name}
                      title={techItem.name}   // 👈 Tooltip with name
                      className="tech-logo"
                    />
                  ))}
                </div>
              </div>
            </a>
          ))}
        </div>
      </section>


      <footer className="footer">
        <p>Made with ❤️ by Pratiksha Narawade</p>
      </footer>
    </>
  );
};

export default Projects;
