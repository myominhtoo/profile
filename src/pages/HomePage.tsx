import { Navbar } from "../components/Navbar"
import img from '../assets/me2.png';
import resume from '../assets/resume.pdf';
import { Footer } from "../components/Footer";
import skills from '../data/skills.json';
import Skill from "../components/Skill";
import projects from '../data/projects.json';

export default function HomePage(){

    return (
        <>
          <Navbar/>
          <main id="main">
            <div id="home" className="gap-5">
              <div id="home-content" className="mx-5">
                <h1>Hello,I'm Myo Min Htoo</h1>
                <h1 id="thm">Frontend Developer</h1>
                <h6 className="opacity-50">
                Passionate to create user interfaces , thinking new ideas and love to learn about new things.
                Really interest to work together with team and to solve problems.
                I have a project experience for News project with Vue and Spring Boot.
                Developed UI with Vue in that. Also have experiences in react for small apps.
                 I'm currently developing  Bulleting Board Management System with Angular and Spring boot .
                 Currently learning also Next.js.
                </h6>
                <div className=" px-3 my-3 text-end">
                  <a href={resume} className="btn btn-sm text-decoration-none opacity-50 p-2 px-3 my-2 thm" download><i className="fa-solid fa-download"></i><span className="mx-2">Resume</span></a>
                </div>
              </div>
              <div id="image-container">
                  <div id="image-wrapper">
                  </div>
                  <img src={img} alt="profile" />
              </div>
            </div>
          </main>
          <main id="about">
            <section id="education-section">
              <h3 id="thm">Education</h3>
              <ul id="content">
                <li>Passed Matriculation Exam In 2019</li>
                <li>Joined University Of Computer Studies,Yangon <br/> ( Dec 2019 - Mar 2022 ) </li>
                <li>Currently Internship At Ace Inspiration Training Centre</li>
              </ul>
            </section>
            <section id="education-section">
              <h3 id="thm">Skills</h3>
              <div id="skill-container" className="py-3 d-flex flex-wrap justify-content-start mx-auto gap-5">
                {skills.map( skill => {
                  return <Skill key={skill.name} name={skill.name} percent={skill.percent} />
                })}
              </div>
            </section>

            <section id="projects">
              <h3 id="thm">Projects</h3>
              <div id="projects-container">
                {projects.map( project => {
                  return (
                    <div key={project.id} id="project">
                      <h5>{project.name}</h5>
                     <div className="d-flex justify-content-between gap-5 align-items-center">
                        <ul className="my-0  p-0  px-0 gap-2 list-unstyled d-flex">
                          {project.teachs.map( tech => {
                            return ( <p key={tech} id="tech">{tech}</p>)
                          })}
                        </ul>
                        <div className="d-flex gap-2">
                          { project.deployUrl && <a href={project.deployUrl}><i className="fa-solid fa-link"></i></a> }
                          <a href={project.githubUrl}><i className="fa-brands fa-github"></i></a>
                        </div>
                     </div>
                    </div>
                  )
                })}
              </div>
            </section>
          </main>
          <Footer/>
        </>
    )
}