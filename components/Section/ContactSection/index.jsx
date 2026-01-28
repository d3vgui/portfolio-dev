"use client"

import { useState, useEffect, useRef } from "react"
import toast, { Toaster } from "react-hot-toast"
import styles from "./ContactSection.module.scss"

const text =
   "Estou sempre em busca de novos desafios que unam desenvolvimento front-end e inteligência de dados. Se você tem uma vaga, um projeto em mente ou apenas quer trocar uma ideia sobre tecnologia, fique à vontade para me chamar. Minha caixa de entrada está sempre aberta!"

export default function ContactSection() {

   const [formData, setFormData] = useState({
      name: "",
      email: "",
      message: "",
   })

   const [displayedText, setDisplayedText] = useState("")
   const [startTyping, setStartTyping] = useState(false)

   const textRef = useRef(null)

   useEffect(() => {
      const observer = new IntersectionObserver(
         (entries) => {
            const [entry] = entries
            if (entry.isIntersecting) {
               setStartTyping(true)
               observer.disconnect()
            }
         },
         {
            threshold: 0.5,
         },
      )

      if (textRef.current) {
         observer.observe(textRef.current)
      }

      return () => {
         observer.disconnect()
      }
   }, [])

   useEffect(() => {
      if (!startTyping) return

      let index = 0
      const speed = 20

      const typeInterval = setInterval(() => {
         if (index <= text.length) {
            setDisplayedText(text.slice(0, index))
            index++
         } else {
            clearInterval(typeInterval)
         }
      }, speed)

      return () => clearInterval(typeInterval)
   }, [startTyping])

   const handleChange = (e) => {
      const { name, value } = e.target
      setFormData((prev) => ({ ...prev, [name]: value }))
   }

   const handleSubmit = async (e) => {
      e.preventDefault()

      const envioPromise = new Promise(async (resolve, reject) => {
         try {
            const response = await fetch("/api/contact", {
               method: "POST",
               headers: {
                  "Content-Type": "application/json",
               },
               body: JSON.stringify(formData),
            })

            if (!response.ok) {
               throw new Error("Erro ao enviar")
            }

            resolve(response)
         } catch (error) {
            reject(error)
         }
      })

      await toast.promise(envioPromise, {
         loading: "Enviando sua mensagem...",
         success: "Mensagem enviada com sucesso! ✅",
         error: "Ops! Algo deu errado ao enviar. ❌",
      })

      envioPromise
         .then(() => {
            setFormData({ name: "", email: "", message: "" })
         })
         .catch(() => {})
   }

   return (
      <section
         id="contactSection"
         className={`${styles.configSection} ${styles.contactSection}`}
      >
         <Toaster position="bottom-right" reverseOrder={false} />

         <div className={`${"container d-flex flex-wrap"} ${styles.content}`}>
            <div className="col-lg-6 col-md-12 col-sm-12 col-xs-12">
               <form onSubmit={handleSubmit}>
                  <div className={styles.contentForm}>
                     <label htmlFor="name">Nome</label>
                     <input
                        type="text"
                        name="name"
                        className={styles.inputForm}
                        placeholder="Informe seu nome"
                        required
                        value={formData.name}
                        onChange={handleChange}
                     />
                  </div>
                  <div className={styles.contentForm}>
                     <label htmlFor="email">E-mail</label>
                     <input
                        type="email"
                        name="email"
                        className={styles.inputForm}
                        placeholder="Informe seu e-mail"
                        required
                        value={formData.email}
                        onChange={handleChange}
                     />
                  </div>
                  <div className={styles.contentForm}>
                     <label htmlFor="message">Mensagem</label>
                     <textarea
                        name="message"
                        id="message"
                        placeholder="Escreva sua mensagem"
                        value={formData.message}
                        onChange={handleChange}
                        required
                     ></textarea>
                  </div>
                  <div className={styles.contentBtn}>
                     <button type="submit">
                        Enviar mensagem
                        <i className="bi bi-send ms-2"></i>
                     </button>
                  </div>
               </form>
            </div>
            <div className="col-lg-1 col-md-12 col-sm-12 col-xs-12"></div>
            <div className="col-lg-5 col-md-12 col-sm-12 col-xs-12">
               <div
                  className={`${styles.title} d-flex align-items-center justify-content-center gap-5`}
               >
                  <h2>
                     <span>04. </span>CONTATO
                  </h2>
                  <div className={styles.line}></div>
               </div>

               <div className={styles.text} ref={textRef}>
                  <p>{displayedText || "\u00A0"}</p>
               </div>
            </div>
         </div>
      </section>
   )
}
