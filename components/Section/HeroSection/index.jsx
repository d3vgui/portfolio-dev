"use client"

import { useState, useRef } from "react"
import styles from "./HeroSection.module.scss"
import VSCode from "../../VSCodeEditor"
import Button from "../../Button"
import gsap from "gsap"
import { useGSAP } from "@gsap/react"

const skills = [
   "JavaScript",
   "React",
   "Next.js",
   "SASS",
   "Bootstrap",
   "Figma",
   "HTML",
   "CSS",
   "Git",
   "GitHub",
   "Power BI",
   "SQL Server",
   "Databricks",
   "SAS Enterprise Guide",
   "Excel",
]

export default function HeroSection() {
   const [currentSkill, setCurrentSkill] = useState(0)
   const skillsContainerRef = useRef(null)
   const sectionRef = useRef(null)

   useGSAP(
      () => {
         const tl = gsap.timeline({
            defaults: { duration: 1, ease: "power3.out" },
         })

         tl.from(".anim-top-down", { y: -500, opacity: 0 })
            .from(
               ".anim-left-right",
               { x: -500, opacity: 0, stagger: 0.1 },
               "<",
            )
            .from(".anim-bottom-up", { y: 500, opacity: 0 }, "<")

            .from(
               ".btn-left",
               {
                  x: -500,
                  opacity: 0,
                  duration: 0.8,
               },
               "-=0.5",
            )

            .from(
               ".btn-right",
               {
                  x: 500,
                  opacity: 0,
                  duration: 0.8,
               },
               "<",
            )
      },
      { scope: sectionRef },
   )

   useGSAP(
      () => {
         const letters = skillsContainerRef.current.querySelectorAll(".letter")
         if (letters.length === 0) return

         const tl = gsap.timeline({
            onComplete: () =>
               setCurrentSkill((prev) => (prev + 1) % skills.length),
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
      },
      { dependencies: [currentSkill], scope: skillsContainerRef },
   )

   return (
      <section
         ref={sectionRef}
         id="heroSection"
         className={`${styles.configSection} ${styles.heroSection}`}
      >
         <div className={styles.gridBackground} aria-hidden="true" />
         <div
            className={`container d-flex flex-wrap align-items-center flex-column flex-xl-row ${styles.content}`}
         >
            <div className="col-lg-6 col-sm-12 col-md-12 col-xs-12 text-center text-xl-start">
               <span
                  className={`${styles.spanWhite} anim-top-down`}
                  style={{ display: "inline-block" }}
               >
                  Oi, meu nome é
               </span>
               <h2 className="anim-left-right">Guilherme Carvalho</h2>
               <h3 className="anim-left-right">
                  Front-end Developer and Data Analyst
               </h3>

               <span
                  ref={skillsContainerRef}
                  className={`${styles.animatedSpan} anim-bottom-up`}
                  style={{
                     minHeight: "1.5em",
                     overflow: "hidden",
                     display: "block",
                  }}
               >
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
                     className="btn-left"
                     text="Download CV"
                     title="Clique aqui para fazer o download do currículo"
                     href="/docs/curriculo_guilherme_carvalho.pdf"
                     download="curriculo_guilherme_carvalho.pdf"
                     icon="bi bi-download"
                  />

                  <Button
                     className="btn-right"
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
