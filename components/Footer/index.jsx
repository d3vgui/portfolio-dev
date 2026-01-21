import { Fragment } from "react"
import styles from "./style-footer.module.scss"
import Logo from "../../app/images/lion-logo.webp"
import Link from "next/link"
import Image from 'next/image'

export default function Footer() {
   return (
      <Fragment>
         <footer className={styles.footer}>
            <div className={`container ${styles.contentFooter}`}>
               <div className={`${styles.navFooter} col-lg-4 col-md-12 col-12`}>
                  <Link href={"#heroSection"}>
                     <Image
                        className="img-fluid"
                        src={Logo}
                        alt="Logo"
                        title="Logo"
                        priority
                     />
                  </Link>
                  <div className={styles.text}>
                     <p>"¹⁴ Todos os vossos atos sejam feitos com amor."</p>
                     <p>1 Coríntios 16:14</p>
                  </div>
                  <ul>
                     <li>
                        <a
                           href="https://www.linkedin.com/in/gu1d3v/"
                           target="_blank"
                           rel="noreferrer"
                        >
                           <i className="bi bi-linkedin"></i>
                        </a>
                     </li>
                     <li>
                        <a
                           href="https://github.com/d3vgui"
                           target="_blank"
                           rel="noreferrer"
                        >
                           <i className="bi bi-github"></i>
                        </a>
                     </li>
                  </ul>
               </div>
               <div className={`${styles.navFooter} col-lg-4 col-md-12 col-12`}>
                  <h4>Navegação</h4>
                  <ul className={styles.navList}>
                     <li>
                        <Link href="#heroSection">Início</Link>
                     </li>
                     <li>
                        <Link href="#aboutSection">Sobre</Link>
                     </li>
                     <li>
                        <Link href="#techSection">Tecnologias</Link>
                     </li>
                     <li>
                        <Link href="#projectsSection">Projetos</Link>
                     </li>
                     <li>
                        <Link href="#contactSection">Contato</Link>
                     </li>
                  </ul>
               </div>
               <div className={`${styles.navList} col-lg-3 col-md-12 col-12`}>
                  <h4>Contato</h4>
                  <ul>
                     <li>
                        <a href="mailto:guicarvcontato@outlook.com">
                           <i className="bi bi-envelope"></i>{" "}
                           guicarvcontato@outlook.com
                        </a>
                     </li>
                     <li>
                        <a
                           href="https://www.linkedin.com/in/gu1d3v/"
                           target="_blank"
                           rel="noopener noreferrer"
                        >
                           <i className="bi bi-linkedin"></i> @gu1d3v
                        </a>
                     </li>
                     <li>
                        <a
                           href="https://github.com/"
                           target="_blank"
                           rel="noopener noreferrer"
                        >
                           <i className="bi bi-github"></i> @d3vgui
                        </a>
                     </li>
                  </ul>
               </div>
            </div>
            <div className={styles.line}></div>
            <div className={styles.copyright}>
               <span>© Todos os direitos reservados.</span>
            </div>
         </footer>
      </Fragment>
   )
}
