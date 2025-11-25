import { Fragment } from "react"
import styles from "./style-footer.module.scss"

export default function Footer() {
  return (
    <Fragment>
      <footer className={styles.footer}>
        <div className={`container ${styles.contentFooter}`}>
          <div className={styles.navFooter}>
            <a href="#">DevGui</a>
            <span>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi
              animi, repellat doloribus quae aut voluptate ea, error beatae
              deleniti officia delectus. Expedita, culpa recusandae molestias
              non ad eius asperiores eaque!
            </span>
            <ul>
              <li>
                <a
                  target="_blank"
                  href="https://www.linkedin.com/in/gu1d3v/"
                  rel="noreferrer"
                >
                  <i className="bi bi-linkedin"></i>
                </a>
              </li>
              <li>
                <a
                  target="_blank"
                  href="https://github.com/d3vgui"
                  rel="noreferrer"
                >
                  <i className="bi bi-github"></i>
                </a>
              </li>
            </ul>
          </div>
          <div className={styles.navFooter}>
            <h4>Navegação</h4>
            <ul className={styles.navList}>
              <li>
                <a href="#">Início</a>
              </li>
              <li>
                <a href="#">Sobre</a>
              </li>
              <li>
                <a href="#">Tecnologias</a>
              </li>
              <li>
                <a href="#">Projetos</a>
              </li>
              <li>
                <a href="#">Contato</a>
              </li>
            </ul>
          </div>
          <div className={styles.navList}>
            <h4>Contato</h4>
            <ul>
              <li><a href="mailto:guicarvcontato@outlook.com"><i className="bi bi-envelope"></i> guicarvcontato@outlook.com</a></li>
              <li><a href="https://www.linkedin.com/in/gu1d3v/"><i className="bi bi-linkedin"></i> @gu1d3v</a></li>
              <li><a href="https://github.com/"><i className="bi bi-github"></i> @d3vgui</a></li>
            </ul>
          </div>
        </div>
        <div className={styles.line}></div>
      </footer>
    </Fragment>
  )
}
