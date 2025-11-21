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
            <ul className={styles.navList}>
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
            <h3>Navegação</h3>
            <ul>
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
          <div className={styles.navFooter}>
            <h1>Coluna 3</h1>
          </div>
        </div>
      </footer>
    </Fragment>
  )
}
