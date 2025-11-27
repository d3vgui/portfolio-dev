import styles from "./TechSection.module.scss"

export default function TechSection() {
  return (
    <section className={`${styles.configSection} ${styles.techSection}`}>
      <div className="container d-flex flex-wrap">
        <div className="col-lg-6 col-md-12 col-sm-12 col-xs-12">
          <h2>Tecnologias</h2>
        </div>
        <div className="col-lg-1"></div>
        <div className="col-lg-5">
          <h2>alguma coisa</h2>
          <h2>alguma coisa</h2>
          <h2>alguma coisa</h2>
          <h2>alguma coisa</h2>
          <h2>alguma coisa</h2>
        </div>
      </div>
    </section>
  )
}