"use client"

import { Fragment, useState } from "react"
import styles from "./style-header.module.scss"

export default function Header() {
  const [menuActive, setMenuActive] = useState(false)
  const toggleMenu = () => {
    setMenuActive(!menuActive)
  }

  return (
    <Fragment>
      <header className={styles.header}>
        <div className={styles.logo}>
          <a href="#">DevGui</a>
        </div>

        <div
          className={`${styles.menuContainer} ${
            menuActive ? styles.active : ""
          }`}
        >
          <div className={styles.btnClose} onClick={toggleMenu}>
            <i className="bi bi-x"></i>
          </div>

          <nav className={styles.nav}>
            <ul>
              <li onClick={toggleMenu}>
                <a href="#">Início</a>
              </li>
              <li onClick={toggleMenu}>
                <a href="#">Sobre</a>
              </li>
              <li onClick={toggleMenu}>
                <a href="#">Tecnologias</a>
              </li>
              <li onClick={toggleMenu}>
                <a href="#">Projetos</a>
              </li>
              <li onClick={toggleMenu}>
                <a href="#">Contato</a>
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

        <div className={styles.btnMenu} onClick={toggleMenu}>
          <i className="bi bi-list"></i>
        </div>
      </header>
    </Fragment>
  )
}
