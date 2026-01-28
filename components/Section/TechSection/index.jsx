"use client"

import { useEffect, useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import styles from "./TechSection.module.scss"
import CardTech from "../../CardTech"
import { handleSmoothScroll } from "../../../app/utils/scrollUtils"
import javascriptIcon from "../../../app/images/js-icon.png"
import reactIcon from "../../../app/images/react-icon.png"
import nextIcon from "../../../app/images/nextjs-icon.png"
import sassIcon from "../../../app/images/sass-icon.png"
import bootstrapIcon from "../../../app/images/bootstrap-icon.png"
import htmlIcon from "../../../app/images/html-icon.png"
import cssIcon from "../../../app/images/css-icon.png"
import gitIcon from "../../../app/images/git-icon.png"
import powerbiIcon from "../../../app/images/power-bi-icon.png"
import sqlserverIcon from "../../../app/images/sql-server-icon.png"
import databricksIcon from "../../../app/images/databricks-icon.webp"
import sasguideIcon from "../../../app/images/sas-guide-icon.webp"
import excelIcon from "../../../app/images/excel-icon.png"
import figmaIcon from "../../../app/images/figma-icon.png"
import Link from "next/link"

gsap.registerPlugin(ScrollTrigger)

export default function TechSection() {
   const containerRef = useRef(null)
   const cardsContainerRef = useRef(null)

   useEffect(() => {
      let ctx = gsap.context(() => {
         const cards = gsap.utils.toArray(".tech-card-item")

         if (cards.length === 0) return

         let currentIndex = 0
         const animateNextCard = () => {
            const cardToAnimate = cards[currentIndex]
            const tlLoop = gsap.timeline({
               onComplete: animateNextCard,
            })

            tlLoop
               .to(cardToAnimate, {
                  scale: 1.08,
                  boxShadow: "0px 5px 7px #4a92f880",
                  zIndex: 10,
                  duration: 0.3,
                  ease: "back.out(1.7)",
                  borderColor: "#4a92f8",
               })
               .to(cardToAnimate, {
                  scale: 1,
                  boxShadow:
                     "#00000066 0px 2px 4px, #0000004d 0px 7px 13px -3px, #00000033 0px -3px 0px inset",
                  zIndex: 1,
                  borderColor: "transparent",
                  duration: 0.4,
                  ease: "power2.out",
                  delay: 0.4,
               })
            currentIndex = (currentIndex + 1) % cards.length
         }

         const tlEntrance = gsap.timeline({
            scrollTrigger: {
               trigger: containerRef.current,
               start: "top 35%",
               once: true,
            },
            onComplete: () => {
               animateNextCard()
            },
         })

         tlEntrance.from(cards, {
            duration: 0.5,
            opacity: 0,

            x: (index, target) => {
               const bounds = target.getBoundingClientRect()
               const containerBounds =
                  cardsContainerRef.current.getBoundingClientRect()
               const cardCenter = bounds.left + bounds.width / 2
               const containerCenter =
                  containerBounds.left + containerBounds.width / 2

               const direction = cardCenter < containerCenter ? -1 : 1
               return direction * gsap.utils.random(100, 200)
            },
            y: (index, target) => {
               const bounds = target.getBoundingClientRect()
               const containerBounds =
                  cardsContainerRef.current.getBoundingClientRect()
               const cardCenter = bounds.top + bounds.height / 2
               const containerCenter =
                  containerBounds.top + containerBounds.height / 2

               const direction = cardCenter < containerCenter ? -1 : 1
               return direction * gsap.utils.random(100, 200)
            },

            scale: 0.5,
            stagger: {
               amount: 0.4,
               grid: "auto",
               from: "edges",
            },
            ease: "back.out(1.2)",
         })
      }, containerRef)

      return () => ctx.revert()
   }, [])

   return (
      <section
         id="techSection"
         className={`${styles.configSection} ${styles.techSection}`}
         ref={containerRef}
      >
         <div className={`${"container d-flex flex-wrap"} ${styles.content}`}>
            <div
               ref={cardsContainerRef}
               className={`${"col-lg-6 col-md-12 col-12"} ${styles.contentTech}`}
            >
               <CardTech
                  text="JavaScript"
                  src={javascriptIcon}
                  alt="JavaScript Logo"
                  title="JavaScript Logo"
               />
               <CardTech
                  text="React"
                  src={reactIcon}
                  alt="React Logo"
                  title="React Logo"
               />
               <CardTech
                  text="Next.js"
                  src={nextIcon}
                  alt="Next.js Logo"
                  title="Next.js Logo"
               />
               <CardTech
                  text="SASS"
                  src={sassIcon}
                  alt="SASS Logo"
                  title="SASS Logo"
               />
               <CardTech
                  text="Bootstrap"
                  src={bootstrapIcon}
                  alt="Bootstrap Logo"
                  title="Bootstrap Logo"
               />
               <CardTech
                  text="Figma"
                  src={figmaIcon}
                  alt="Figma Logo"
                  title="Figma Logo"
               />
               <CardTech
                  text="HTML"
                  src={htmlIcon}
                  alt="HTML Logo"
                  title="HTML Logo"
               />
               <CardTech
                  text="CSS"
                  src={cssIcon}
                  alt="CSS Logo"
                  title="CSS Logo"
               />
               <CardTech
                  text="Git"
                  src={gitIcon}
                  alt="Git Logo"
                  title="Git Logo"
               />
               <CardTech
                  text="Power BI"
                  src={powerbiIcon}
                  alt="Power BI Logo"
                  title="Power BI Logo"
               />
               <CardTech
                  text="SQL Server"
                  src={sqlserverIcon}
                  alt="SQL Server Logo"
                  title="SQL Server Logo"
               />
               <CardTech
                  text="Databricks"
                  src={databricksIcon}
                  alt="Databricks Logo"
                  title="Databricks Logo"
               />
               <CardTech
                  text="SAS Guide"
                  src={sasguideIcon}
                  alt="SAS Guide Logo"
                  title="SAS Guide Logo"
               />
               <CardTech
                  text="Excel"
                  src={excelIcon}
                  alt="Excel Logo"
                  title="Excel Logo"
               />
            </div>
            <div className="col-lg-1"></div>
            <div className="col-lg-5 col-md-12 col-12">
               <div
                  className={`${styles.title} d-flex align-items-center justify-content-center gap-5`}
               >
                  <h2>
                     <span>02. </span>TECNOLOGIAS
                  </h2>
                  <div className={styles.line}></div>
               </div>
               <div className={styles.text}>
                  <span>Desenvolvimento Front-end & UI</span>
                  <p>
                     Crio interfaces modernas, responsivas e focadas na
                     experiência do usuário, transformando protótipos em código
                     funcional.
                  </p>
                  <span>Dados & Business Intelligence</span>
                  <p>
                     Minha bagagem analítica me permite estruturar dados
                     complexos e criar visualizações estratégicas para tomada de
                     decisão.
                  </p>
                  <div className={styles.contentButton}>
                     <a
                        href="#projectsSection"
                        title="Clique aqui para ser direcionado a sessão de Projetos"
                        onClick={(e) => handleSmoothScroll(e, "#projectsSection")}
                     >
                        <button>
                           Projetos <i className="bi bi-caret-down-fill"></i>
                        </button>
                     </a>
                  </div>
               </div>
            </div>
         </div>
      </section>
   )
}
