"use client"

import { useState, useRef } from "react"
import styles from "./HeroSection.module.scss"
import VSCode from "../../VSCodeEditor"
import Button from "../../Button"
import gsap from "gsap"
import { useGSAP } from "@gsap/react"

const skills = [
  "JavaScript", "React", "Next.js", "SASS", "Bootstrap",
  "Figma", "HTML", "CSS", "Git", "GitHub",
  "Power BI", "SQL Server", "Databricks", "SAS Enterprise Guide", "Excel"
]

export default function HeroSection() {
  const [currentSkill, setCurrentSkill] = useState(0)
  const containerRef = useRef(null)

  useGSAP(() => {
    const letters = containerRef.current.querySelectorAll(".letter")

    const tl = gsap.timeline({
      onComplete: () => {
        setCurrentSkill((prev) => (prev + 1) % skills.length)
      },
    })

    tl.set(letters, { y: 20, opacity: 0 })
      .to(letters, {
        y: 0,
        opacity: 1,
        stagger: 0.05,
        duration: 0.5,
        ease: "back.out(1.7)",
      })
      .to({}, { duration: 1.5 })
      .to(letters, {
        y: -20,
        opacity: 0,
        stagger: 0.05,
        duration: 0.4,
        ease: "power2.in",
      })

  }, [currentSkill])

  return (
    <section id="heroSection" className={`${styles.configSection} ${styles.heroSection}`}>
      <div className={styles.gridBackground} aria-hidden="true" />
      <div className={`container d-flex flex-wrap align-items-center flex-column flex-xl-row ${styles.content}`}>
        <div className="col-lg-6 col-sm-12 col-md-12 col-xs-12 text-center text-xl-start">
          <span className={styles.spanWhite}>Oi, meu nome é</span>
          <h2>Guilherme Carvalho</h2>
          <h3>Front-end Developer and Data Analyst</h3>
          
          <span ref={containerRef} className={styles.animatedSpan} style={{ minHeight: '1.5em', overflow: 'hidden' }}>
            {skills[currentSkill].split("").map((char, index) => (
              <span 
                key={`${currentSkill}-${index}`} 
                className="letter" 
                style={{ display: "inline-block" }}
              >
                {char === " " ? "\u00A0" : char}
              </span>
            ))}
          </span>

          <div className={styles.buttons}>
            <Button 
              text="Download CV"
              title="Clique aqui para fazer o download do currículo"
              href="../../../app/docs/curriculo_guilherme_carvalho.pdf"
              download="true"
              icon="bi bi-download"
            />
            <Button 
              text="LinkedIn"
              href="https://www.linkedin.com/in/gu1d3v/"
              title="Clique aqui para acessar o perfil no LinkedIn"
              target="_blank"
              icon="bi bi-linkedin"
            />
          </div>
        </div>
        
        <div className="col-lg-1"></div>
        
        <div className="col-lg-5 col-sm-12 col-md-12 col-xs-12">
          <VSCode />
        </div>
      </div>
    </section>
  )
}