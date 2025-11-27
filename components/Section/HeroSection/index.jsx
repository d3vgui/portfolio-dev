"use client"

import styles from "./HeroSection.module.scss"
import VSCode from "../../VSCodeEditor"
import Typewriter from "typewriter-effect"

export default function HeroSection() {
  return (
    <section className={`${styles.configSection} ${styles.heroSection}`}>
      <div className="container d-flex flex-wrap align-items-center">
        <div className="col-lg-6 col-sm-12 col-md-12 col-xs-12">
          <h2>
            <Typewriter
              options={{
                delay: 40,
                cursor: "|", // O cursor padrão
              }}
              onInit={(typewriter) => {
                typewriter
                  .typeString("Olá, me chamo Guilherme. Muito prazer!")
                  .start()
              }}
            />
          </h2>
          <h3>Front-end Developer</h3>
          <div className={styles.buttons}>
            <button>
              Download CV <i className="bi bi-download"></i>
            </button>
            {/* Nota: É recomendado não colocar <a> dentro de <button> por acessibilidade, mas mantive seu estílo */}
            <button>
              <a
                target="_blank"
                href="https://www.linkedin.com/in/gu1d3v/"
                rel="noreferrer"
              >
                LinkedIn <i className="bi bi-linkedin"></i>
              </a>
            </button>
          </div>
        </div>
        <div className="col-lg-1"></div>
        <div className="col-lg-5 col-sm-12 col-md-12 col-xs-12">
          <VSCode />
        </div>
      </div>
    </section>
  )
}
