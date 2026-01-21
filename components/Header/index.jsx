"use client"

import { Fragment, useState, useEffect } from "react"
import styles from "./Header.module.scss"
import Logo from "../../app/images/lion-logo.webp"
import Link from "next/link"
import Image from "next/image"

export default function Header() {
   const [menuActive, setMenuActive] = useState(false)
   const [scrollActive, setScrollActive] = useState(false)

   const toggleMenu = () => {
      setMenuActive(!menuActive)
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
               <Link href="#heroSection">
                  <Image
                     className="img-fluid"
                     src={Logo}
                     alt="Logo"
                     title="Logo"
                     priority
                  />
               </Link>
            </div>

            <div
               className={`${styles.overlay} ${menuActive ? styles.active : ""}`}
               onClick={toggleMenu}
            />

            <div
               className={`${styles.menuContainer} ${menuActive ? styles.active : ""}`}
            >
               <nav className={styles.nav}>
                  <ul>
                     <li>
                        <Link onClick={toggleMenu} href="#heroSection">
                           Início
                        </Link>
                     </li>
                     <li>
                        <Link onClick={toggleMenu} href="#aboutSection">
                           Sobre
                        </Link>
                     </li>
                     <li>
                        <Link onClick={toggleMenu} href="#techSection">
                           Tecnologias
                        </Link>
                     </li>
                     <li>
                        <Link onClick={toggleMenu} href="#projectsSection">
                           Projetos
                        </Link>
                     </li>
                     <li>
                        <Link onClick={toggleMenu} href="#contactSection">
                           Contato
                        </Link>
                     </li>
                  </ul>
               </nav>

               <div className={styles.social}>
                  <a
                     target="_blank"
                     href="https://www.linkedin.com/in/gu1d3v/"
                     rel="noreferrer"
                  >
                     <i className="bi bi-linkedin"></i>
                  </a>
                  <a
                     target="_blank"
                     href="https://github.com/d3vgui"
                     rel="noreferrer"
                  >
                     <i className="bi bi-github"></i>
                  </a>
               </div>
            </div>

            <button
               className={`${styles.hamburger} ${menuActive ? styles.active : ""}`}
               onClick={toggleMenu}
               aria-label="Menu"
            >
               <span className={styles.line}></span>
               <span className={styles.line}></span>
               <span className={styles.line}></span>
            </button>
         </header>
      </Fragment>
   )
}
