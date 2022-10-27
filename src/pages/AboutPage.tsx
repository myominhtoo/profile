import { Footer } from "../components/Footer"
import { Navbar } from "../components/Navbar"
import Skill from "../components/Skill"
import skills from '../data/skills.json'

export function AboutPage(){
    return (
        <>
          <Navbar />
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
              <div id="skill-container" className="py-3 d-flex flex-wrap justify-content-center gap-5">
                {skills.map( skill => {
                  return <Skill key={skill.name} name={skill.name} percent={skill.percent} />
                })}
              </div>
            </section>
          </main>
          <Footer />
        </>
    )
}