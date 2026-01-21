'use client' // avisa ao Next.js que este componente roda no navegador, assim ele consegue acessar a janela e eventos do mouse
import { useEffect } from 'react'
import Lenis from 'lenis'

export default function SmoothScroll({ children }) {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 5.5, // Velocidade
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // curva de suavidade
      smoothWheel: true
    })

    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)

    return () => {
      lenis.destroy()
    }
  }, [])

  return <>{children}</>
}