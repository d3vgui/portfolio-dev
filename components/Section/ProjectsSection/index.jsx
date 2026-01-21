import styles from "./ProjectsSection.module.scss"
import CardProject from "../../CardProject"
import imgProject1 from "../../../app/images/borgesizidoro.png"
import imgProject3 from "../../../app/images/deltalog.png"
import imgProject4 from "../../../app/images/lfg.png"
import imgProject5 from "../../../app/images/ted.png"
import imgProject6 from "../../../app/images/maternity.png"
import imgProject7 from "../../../app/images/doula.png"

export default function ProjectsSection() {
  return (
    <section
      id="projectsSection"
      className={`${styles.configSection} ${styles.projectsSection}`}
    >
      <div className="container">
        <div className={styles.title}>
          <div className="d-flex align-items-center justify-content-center gap-5">
            <h2><span>03. </span>PROJETOS</h2>
            <div className={styles.line}></div>
          </div>
        </div>
        <div className={styles.contentCards}>
          <CardProject
          srcLink={"https://github.com/d3vgui/lp-borges-e-izidoro"}
          srcImg={imgProject1}
          title="Borges Izidoro & Advocacia"
          text="lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          tech={["JavaScript", "Bootstrap", "HTML", "CSS", "Git"]}
          />
          <CardProject
          srcLink={"https://github.com/d3vgui/deltalog"}
          srcImg={imgProject3}
          title="Delta Log"
          text="lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          tech={["JavaScript", "Bootstrap", "HTML", "CSS", "Git"]}
          />
          <CardProject
          srcLink={"https://github.com/d3vgui/prod-lp-leadership-freight"}
          srcImg={imgProject4}
          title="Leadership Freight Group"
          text="lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          tech={["JavaScript", "Bootstrap", "HTML", "CSS", "Git"]}
          />
          <CardProject
          srcLink={"https://github.com/d3vgui/prod-lp-tbe-engenharia"}
          srcImg={imgProject5}
          title="TED Engenharia"
          text="lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          tech={["JavaScript", "Bootstrap", "HTML", "CSS", "Git"]}
          />
          <CardProject
          srcLink={"https://github.com/d3vgui/prod-your-doula-journey"}
          srcImg={imgProject6}
          title="Your Doula Journey"
          text="lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          tech={["JavaScript", "PHP", "PHPMailer", "Bootstrap", "HTML", "CSS", "Git"]}
          />
          <CardProject
          srcLink={"https://github.com/d3vgui/prod-your-maternity-journey"}
          srcImg={imgProject7}
          title="Your Maternity Journey"
          text="lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          tech={["JavaScript", "PHP", "PHPMailer", "Bootstrap", "HTML", "CSS", "Git"]}
          />
        </div>
      </div>

    </section>
  )
}
