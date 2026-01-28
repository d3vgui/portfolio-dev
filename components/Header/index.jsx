"use client"

import { Fragment, useState, useEffect } from "react"
import styles from "./Header.module.scss"
import Logo from "../../app/images/lion-logo.webp"
import Image from "next/image"

export default function Header() {
   const [menuActive, setMenuActive] = useState(false)
   const [scrollActive, setScrollActive] = useState(false)

   const toggleMenu = () => {
      setMenuActive(!menuActive)
   }

   const handleScroll = (e, targetId) => {
      e.preventDefault()

      setMenuActive(false)

      const element = document.querySelector(targetId)

      if (element) {
         setTimeout(() => {
            const headerOffset = 80
            const elementPosition = element.getBoundingClientRect().top
            const offsetPosition =
               elementPosition + window.pageYOffset - headerOffset

            window.scrollTo({
               top: offsetPosition,
               behavior: "smooth",
            })
         }, 100)
      }
   }

   useEffect(() => {
      const handleResize = () => {
         if (window.innerWidth > 768 && menuActive) {
            setMenuActive(false)
         }
      }
      window.addEventListener("resize", handleResize)
      return () => window.removeEventListener("resize", handleResize)
   }, [menuActive])

   useEffect(() => {
      const handleScroll = () => {
         setScrollActive(window.scrollY > 20)
      }
      window.addEventListener("scroll", handleScroll)
      return () => window.removeEventListener("scroll", handleScroll)
   }, [])

   return (
      <Fragment>
         <header
            className={`${styles.header} ${scrollActive ? styles.scrolled : ""}`}
         >
            <div className={styles.logo}>
               <a
                  href="#heroSection"
                  onClick={(e) => handleScroll(e, "#heroSection")}
                  title="Clique aqui para ser direcionado a sessão Início"
               >
                  <Image
                     className="img-fluid"
                     src={Logo}
                     alt="Logo"
                     title="Logo"
                     priority
                  />
               </a>
            </div>

            <div
               className={`${styles.overlay} ${menuActive ? styles.active : ""}`}
               onClick={toggleMenu}
               aria-hidden={!menuActive}
            />

            <div
               className={`${styles.menuContainer} ${menuActive ? styles.active : ""}`}
            >
               <nav className={styles.nav}>
                  <ul>
                     <li>
                        <a
                           href="#heroSection"
                           onClick={(e) => handleScroll(e, "#heroSection")}
                           title="Clique aqui para ser direcionado a sessão Início"
                        >
                           Início
                        </a>
                     </li>
                     <li>
                        <a
                           href="#aboutSection"
                           onClick={(e) => handleScroll(e, "#aboutSection")}
                           title="Clique aqui para ser direcionado a sessão Sobre mim"
                        >
                           Sobre
                        </a>
                     </li>
                     <li>
                        <a
                           href="#techSection"
                           onClick={(e) => handleScroll(e, "#techSection")}
                           title="Clique aqui para ser direcionado a sessão Tecnologias"
                        >
                           Tecnologias
                        </a>
                     </li>
                     <li>
                        <a
                           href="#projectsSection"
                           onClick={(e) => handleScroll(e, "#projectsSection")}
                           title="Clique aqui para ser direcionado a sessão Projetos"
                        >
                           Projetos
                        </a>
                     </li>
                     <li>
                        <a
                           href="#contactSection"
                           onClick={(e) => handleScroll(e, "#contactSection")}
                           title="Clique aqui para ser direcionado a sessão Contato"
                        >
                           Contato
                        </a>
                     </li>
                  </ul>
               </nav>

               <div className={styles.social}>
                  <a
                     target="_blank"
                     href="https://www.linkedin.com/in/gu1d3v/"
                     rel="noreferrer"
                     title="Clique aqui para ser direcionado ao LinkedIn"
                  >
                     <i className="bi bi-linkedin"></i>
                  </a>
                  <a
                     target="_blank"
                     href="https://github.com/d3vgui"
                     rel="noreferrer"
                     title="Clique aqui para ser direcionado ao GitHub"
                  >
                     <i className="bi bi-github"></i>
                  </a>
               </div>
            </div>

            <button
               className={`${styles.hamburger} ${menuActive ? styles.active : ""}`}
               onClick={toggleMenu}
               aria-label="Menu"
               type="button"
            >
               <span className={styles.line}></span>
               <span className={styles.line}></span>
               <span className={styles.line}></span>
            </button>
         </header>
      </Fragment>
   )
}
