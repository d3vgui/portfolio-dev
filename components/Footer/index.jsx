"use client"

import { Fragment } from "react"
import styles from "./style-footer.module.scss"
import Logo from "../../app/images/lion-logo.webp"
import Image from 'next/image'
import { handleSmoothScroll } from "../../app/utils/scrollUtils" 

export default function Footer() {
   return (
      <Fragment>
         <footer className={styles.footer}>
            <div className={`container ${styles.contentFooter}`}>
               <div className={`${styles.navFooter} col-lg-4 col-md-12 col-12`}>
                  <a 
                     href="#heroSection" 
                     onClick={(e) => handleSmoothScroll(e, "#heroSection")}
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
                  
                  <div className={styles.text}>
                     <p>"Todos os vossos atos sejam feitos com amor."</p>
                     <p>1 Coríntios 16:14</p>
                  </div>
                  <ul>
                     <li>
                        <a
                           href="https://www.linkedin.com/in/gu1d3v/"
                           target="_blank"
                           rel="noreferrer"
                           title="Clique aqui para ser direcionado ao LinkedIn"
                        >
                           <i className="bi bi-linkedin"></i>
                        </a>
                     </li>
                     <li>
                        <a
                           href="https://github.com/d3vgui"
                           target="_blank"
                           rel="noreferrer"
                           title="Clique aqui para ser direcionado ao GitHub"
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
                        <a 
                           href="#heroSection" 
                           onClick={(e) => handleSmoothScroll(e, "#heroSection")}
                           title="Clique aqui para ser direcionado a sessão Início"
                        >
                           Início
                        </a>
                     </li>
                     <li>
                        <a 
                           href="#aboutSection" 
                           onClick={(e) => handleSmoothScroll(e, "#aboutSection")}
                           title="Clique aqui para ser direcionado a sessão Sobre mim"
                        >
                           Sobre
                        </a>
                     </li>
                     <li>
                        <a 
                           href="#techSection" 
                           onClick={(e) => handleSmoothScroll(e, "#techSection")}
                           title="Clique aqui para ser direcionado a sessão Tecnologias"
                        >
                           Tecnologias
                        </a>
                     </li>
                     <li>
                        <a 
                           href="#projectsSection" 
                           onClick={(e) => handleSmoothScroll(e, "#projectsSection")}
                           title="Clique aqui para ser direcionado a sessão Projetos"
                        >
                           Projetos
                        </a>
                     </li>
                     <li>
                        <a 
                           href="#contactSection" 
                           onClick={(e) => handleSmoothScroll(e, "#contactSection")}
                           title="Clique aqui para ser direcionado a sessão Contato"
                        >
                           Contato
                        </a>
                     </li>
                  </ul>
               </div>

               <div className={`${styles.navList} col-lg-3 col-md-12 col-12`}>
                  <h4>Contato</h4>
                  <ul>
                     <li>
                        <a href="mailto:guicarvcontato@outlook.com" title="Clique aqui para enviar um e-mail">
                           <i className="bi bi-envelope"></i>{" "}
                           guicarvcontato@outlook.com
                        </a>
                     </li>
                     <li>
                        <a
                           href="https://www.linkedin.com/in/gu1d3v/"
                           target="_blank"
                           rel="noopener noreferrer"
                           title="Clique aqui para ser direcionado ao LinkedIn"
                        >
                           <i className="bi bi-linkedin"></i> @gu1d3v
                        </a>
                     </li>
                     <li>
                        <a
                           href="https://github.com/"
                           target="_blank"
                           rel="noopener noreferrer"
                           title="Clique aqui para ser direcionado ao GitHub"
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