import styles from "./HeroSection.module.scss"
import VSCode from "../../VSCodeEditor"

export default function HeroSection() {
  return (
    <section className={`${styles.configSection} ${styles.heroSection}`}>
      <div className="container d-flex flex-wrap align-items-center">
        <div className="col-lg-6 col-sm-12 col-md-12 col-xs-12">
          <h2>Olá, sou o Guilherme Carvalho</h2>
          <h3>Front-end Developer</h3>
          <div className={styles.buttons}>
            <button>Download CV <i className="bi bi-download"></i></button>
            <button><a target="_blank" href="https://www.linkedin.com/in/gu1d3v/">LinkedIn <i className="bi bi-linkedin"></i></a></button>
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
