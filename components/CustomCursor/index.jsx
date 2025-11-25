'use client'; // avisa ao Next.js que este componente roda no navegador, assim ele consegue acessar a janela e eventos do mouse
import { useEffect } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import styles from './CustomCursor.module.scss';

export default function CustomCursor() {

  const mouseX = useMotionValue(0); // são dois "rastreadores": posição horizontal (mouseX) e vertical (mouseY) - coordenadas para mostrar a posição exata do cursor
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 50, stiffness: 250, mass: 0.5 }; // configurações do comportamento do cursor (a bolinha em volta)
  
  const smoothX = useSpring(mouseX, springConfig); // essas variáveis tentam alcançar o mouseX seguindo as regras acima
  const smoothY = useSpring(mouseY, springConfig);

  useEffect(() => { // roda assim que o componente aparece na tela
    const moveCursor = (e) => {
      mouseX.set(e.clientX - 16);
      mouseY.set(e.clientY - 16);
    };

    window.addEventListener('mousemove', moveCursor);
    return () => {
      window.removeEventListener('mousemove', moveCursor);
    };
  }, [mouseX, mouseY]);

  return (
    <motion.div
      className={styles.cursor}
      style={{
        translateX: smoothX,
        translateY: smoothY,
      }}
    >
      <div className={styles.cursorInner}></div>
    </motion.div>
  )
}