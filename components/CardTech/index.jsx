import styles from "./CardTech.module.scss"
import Image from 'next/image'

export default function CardTech({text, src, alt, title}) {
  return (
    <div className={`${styles.tech} tech-card-item`}>
      <span>{text}</span>
      <Image
        className="img-fluid"
        src={src}
        alt={alt}
        title={title}
      />
    </div>
  )
}
