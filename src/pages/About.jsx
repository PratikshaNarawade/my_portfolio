import React from "react";
import "./About.css";
import { Link } from "react-router-dom";

import educationImg from "../assets/education.png";
import svims from "../assets/svims.jpg";
import kaiLogo from "../assets/kai-logo.png";
import cert1 from "../assets/certification logo/NPTEL_logo.png"
import cert2 from "../assets/certification logo/hope.jpg"
import cert3 from "../assets/certification logo/tcs.jpg"
import python from "../assets/certification/Python for Data Science_page-0001.jpg"
import ML from "../assets/certification/Introduction To Machine Learning - IITKGP_page-0001 (2).jpg"
import security from "../assets/certification/Systems and Usable Security_page-0001.jpg"
import AIPython from "../assets/certification/python_page-0001.jpg"
import tcs from "../assets/certification/TCS_page-0001.jpg"
import intern from "../assets/certification/internship_cpmpletion.jpg"


const certifications = [
  {
    id: 1,
    title: "Machine learning",
    org: "NPTEL",
    bgColor: "#ca90f3ff",
    logo: cert1,
    certImg: [ML],
  },
  {
    id: 2,
    title: "Python For Data Science",
    org: "NPTEL",
    bgColor: "#f4693bff",
    logo: cert1,
    certImg:[python],
  },
  {
    id: 3,
    title: "System and Usable Security",
    org: "NPTEL",
    bgColor: "#f8d479ff",
    logo: cert1,
    certImg:[security],
  },
  {
    id: 4,
    title: "AI Python Programming Course",
    org: "Hope Foundation",
    bgColor: "#81f9b3ff",
    logo: cert2,
    certImg:[AIPython]
    
  },
  {
    id: 5,
    title: "Skill Development",
    org: "TCS ion",
    bgColor: "#f0867aff",
    logo: cert3,
    certImg:[tcs]
    
  },
{
    id: 6,
    title: "Internship",
    org: "Kai Technology",
    bgColor: "#65d3f4ff",
    logo: kaiLogo,
    certImg:[intern]
    
  },

];

const About = () => {
  return (
    <>
      <header>
        <nav className="navbar">
          <h2 className="logo">Portfolio</h2>
          <ul className="nav-links">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">Education and Certifications
            </Link></li>
            <li><Link to="/experience">Experience</Link></li>
            <li><Link to="/projects">Projects</Link></li>
            <li><Link to="/contact">Contact and Resume</Link></li>
          </ul>
        </nav>
      </header>

      <section className="education">
        <div className="edu-container">
          <div className="edu-left">
            <img src={educationImg} alt="Graduation cap" className="edu-img" />
          </div>

          <div className="edu-right">
            <h1 className="edu-title">Education</h1>
            <h3 className="edu-subtitle">Qualification and Certifications</h3>
            <p className="edu-text">
              I actively engage in freelance projects, attend tech events, and
              continuously enhance my skills and stay updated with the latest
              industry trends. Here are some of my notable certifications.
            </p>
          </div>
        </div>

        <div>
          <h2 className="edu-title2">Completed Degree</h2>
          <div className="edu-container">
            <div className="edu-logo">
              <img src={svims} alt="Graduation cap" className="edu-img" />
            </div>

            <div className="edu-card">
              <div className="edu-header">
                <h3>Sadhu Vaswani Institute of Management Studies for Girls, Pune</h3>
                <span className="edu-year">2019 - 2023</span>
              </div>
              <p className="edu-degree">Master of Computer Application</p>
              <p className="edu-details">
                ⚡  Post Graduated with a <b>CGPA of 8.16</b>.
              </p>
              <a
                href="https://www.svims-edu.in/"
                target="_blank"
                rel="noopener noreferrer"
                className="edu-btn"
              >
                Visit Website
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="certifications">
      <h2 className="cert-title">Certifications</h2>
      <div className="cert-grid">
        {certifications.map((cert) => (
          <a
            key={cert.id}
            href={cert.certImg} // ✅ opens the certificate image in new tab
            target="_blank"
            rel="noopener noreferrer"
            className="cert-card"
            style={{ background: cert.bgColor }}
          >
            <div className="cert-box">
              <img src={cert.logo} alt={cert.title} className="cert-logo" />
              <h3 className="cert-name">{cert.title}</h3>
              <p className="cert-org">{cert.org}</p>
            </div>
          </a>
        ))}
      </div>
    </section>

      <footer className="footer">
        <p>
          Made with ❤️ by Pratiksha Narawade
        </p>
      </footer>
    </>
  );
};

export default About;
