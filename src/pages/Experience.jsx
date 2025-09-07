import { Link } from "react-router-dom";
import "./Experience.css";
import experienceImg from "../assets/experience .png";
import kaiLogo from "../assets/kai-logo.png";


const experiences = [
  {
    role: "Software Developer Intern",
    company: "KAI Technologies.",
    period: "November 2024 - May 2025",
    location: "Work From Home",
    description:
      "Train, manage and provide guidance to junior Web development staff. Worked closely with Project Manager and Team Leads. Developed new and maintained existing web applications. Increased productivity and problem-solving techniques by 20%. Primarily used React, Java and postgreSQL.",
   logo: kaiLogo,
  },

];
const Experience = () => {
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
      <section className="experience">
        <div className="exp-container">
          {/* Left Section */}
          <div className="exp-left">
            <img src={experienceImg} alt="Experience Illustration" />
          </div>

          {/* Right Section */}
          <div className="exp-right">
            <h2>Experience</h2>
            <h3>Software Developer Intern</h3>
            <p>
              I have completed a 6 months internship as a Software Developer Intern where I contributed to
              building and optimizing web applications. I collaborated with
              senior developers on coding, debugging, and implementing features
              using modern technologies. This experience helped me strengthen my
              skills in <b>React.js, Java, and database management</b> while
              gaining hands-on exposure to real-world projects and Agile
              workflows.
            </p>
          </div>
        </div>
      </section>
      <section className="experience-section">
        <h2 className="section-title">Work Experience</h2>
        <div className="experience-container">
          {experiences.map((exp, index) => (
            <div key={index} className="experience-card">
              <div className="exp-logo">
                <img src={exp.logo} alt={exp.company} />
              </div>
              <div className="exp-details">
                <h3>{exp.role}</h3>
                <h4>{exp.company}</h4>
                <p className="exp-period">
                  {exp.period} | {exp.location}
                </p>
                <p>{exp.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
      <footer className="footer">
        <p>
          Made with ❤️ by Pratiksha Narawade
        </p>
      </footer>
    </>
  )
}
export default Experience;