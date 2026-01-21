import styles from "./AboutSection.module.scss"
import dev from "../../../app/images/eu.jpg"
import Link from "next/link"
import Image from 'next/image'

export default function AboutSection() {
  return (
    <section id="aboutSection" className={`${styles.configSection} ${styles.aboutSection}`}>
      <div className={`${"container d-flex flex-wrap"} ${styles.content}`}>
        <div className="col-lg-7 col-md-12 col-12">
          <div className={`${styles.title} d-flex align-items-center justify-content-center gap-5`}>
            <h2><span>01. </span>SOBRE MIM</h2>
            <div className={styles.line}></div>
          </div>
          <div className={styles.text}>
            <p>Olá! Sou o Guilherme e minha jornada na tecnologia começou com a simples curiosidade de entender como os computadores funcionavam e evoluiu para uma carreira focada em construção e análise</p>
            <p>Durante minha formação, descobri que a lógica de programação é a ferramenta perfeita para tirar ideias do papel. Atualmente, dedico meus estudos e projetos ao ecossistema web moderno, criando aplicações responsivas e dinâmicas.</p>
            <p>Paralelamente, desenvolvi um forte background em Business Intelligence, o que me permite enxergar além da interface e entender o valor estratégico dos dados em cada projeto que desenvolvo.</p>
          </div>
          <div>
            <Link href="#techSection">
              <button>Tecnologias <i className="bi bi-caret-down-fill"></i></button>
            </Link>
          </div>
        </div>
        <div className="col-lg-1"></div>
        <div className="col-lg-4 col-md-12 col-12">
          <div className={styles.imageWrapper}>
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
