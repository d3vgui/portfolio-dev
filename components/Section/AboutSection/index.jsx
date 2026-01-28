"use client"

import { useRef } from "react"
import styles from "./AboutSection.module.scss"
import dev from "../../../app/images/eu.jpg"
import Image from 'next/image'
import gsap from "gsap"
import { handleSmoothScroll } from "../../../app/utils/scrollUtils"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useGSAP } from "@gsap/react"

gsap.registerPlugin(ScrollTrigger)

export default function AboutSection() {
  const containerRef = useRef(null)

  useGSAP(() => {
    gsap.from(".anim-text", {
      scrollTrigger: {
        trigger: ".text-container",
        start: "top 80%",
        once: true,
      },
      y: -60,
      opacity: 0,
      duration: 0.8,
      stagger: 0.4,
      ease: "power2.out"
    })

    gsap.from(".anim-image", {
      scrollTrigger: {
        trigger: ".image-wrapper",
        start: "top 80%",
        once: true,
      },
      y: 200,
      opacity: 0,
      duration: 1,
      ease: "power3.out"
    })

  }, { scope: containerRef })

  return (
    <section ref={containerRef} id="aboutSection" className={`${styles.configSection} ${styles.aboutSection}`}>
      <div className={`${"container d-flex flex-wrap"} ${styles.content}`}>
        <div className="col-lg-7 col-md-12 col-12">
          
          <div className={`${styles.title} d-flex align-items-center justify-content-center gap-5`}>
            <h2><span>01. </span>SOBRE MIM</h2>
            <div className={styles.line}></div>
          </div>
          
          <div className={`${styles.text} text-container`}>
            
            <p className="anim-text">
              Olá! Sou o Guilherme e minha jornada na tecnologia começou com a simples curiosidade de entender como os computadores funcionavam e evoluiu para uma carreira focada em construção e análise.
            </p>
            
            <p className="anim-text">
              Durante minha formação, descobri que a lógica de programação é a ferramenta perfeita para tirar ideias do papel. Atualmente, dedico meus estudos e projetos ao ecossistema web moderno, criando aplicações responsivas e dinâmicas.
            </p>
            
            <p className="anim-text">
              Paralelamente, desenvolvi um forte background em Business Intelligence, o que me permite enxergar além da interface e entender o valor estratégico dos dados em cada projeto que desenvolvo.
            </p>

          </div>
          
          <div className={styles.contentButton}>
            <a 
              href="#techSection" 
              title="Clique aqui para ser direcionado a sessão de Tecnologia"
              onClick={(e) => handleSmoothScroll(e, "#projectsSection")}
            >
              <button>Tecnologias <i className="bi bi-caret-down-fill"></i></button>
            </a>
          </div>
        </div>
        
        <div className="col-lg-1"></div>
        
        <div className="col-lg-4 col-md-12 col-12">
          <div className={`${styles.imageWrapper} image-wrapper anim-image`}>
            <Image
              className="img-fluid"
              src={dev}
              alt="Guilherme Carvalho"
              title="Guilherme Carvalho"
              placeholder="blur"
            />
          </div>
        </div>
      </div>
    </section>
  )
}