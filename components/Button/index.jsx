import styles from "./Button.module.scss"

export default function Button({ text, href, title, download, target, icon, className }) {
  const relAttributes = target === "_blank" ? "noopener noreferrer" : undefined

  return (
    <div className={className}>
      <a
        className={styles.button}
        rel={relAttributes}
        download={download}
        target={target}
        title={title}
        href={href}
      >
        {text}
        <i className={icon}></i>
      </a>
    </div>
  )
}
