import styles from "./CardProject.module.scss"
import Link from "next/link"
import Image from 'next/image'

export default function CardProject({ title, text, tech, srcImg, srcLink = "/"}) {
   return (
      <Link href={srcLink} target="_blank">
         <div className={styles.cardProject}>
            <div className={styles.imgContent}>
               <Image src={srcImg} alt={title} className="img-fluid" />
            </div>
            <div className={styles.titleContent}>
               <span>{title}</span>
               <i className="bi bi-box-arrow-up-right"></i>
            </div>
            <div className={styles.textContent}>
               <p>{text}</p>
            </div>
            <div className={styles.techContent}>
               {Array.isArray(tech) ? (
                  tech.map((item, index) => <span key={index}>{item}</span>)
               ) : (
                  <span>{tech}</span>
               )}
            </div>
         </div>
      </Link>
   )
}
