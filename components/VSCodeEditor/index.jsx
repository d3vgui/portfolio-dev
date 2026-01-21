"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import styles from "./VSCodeEditor.module.scss";
import reactIcon from "../../app/images/reactIcon.webp";
import Image from 'next/image' 

export default function VSCodeEditor() {
  const codeLines = [
    "import React from 'react';",
    `import 'bootstrap/dist/css/bootstrap.min.css';`,
    "",
    "export default function App() {",
    "  return (",
    "    <div className='container'>",
    "      <h1>Hello World!</h1>",
    "    </div>",
    "  );",
    "}"
  ];

  const fullCode = codeLines.join("\n");

  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timeout;
    
    const TYPING_SPEED = 20;   // velocidade de digitação normal (mais rápido = menor número)
    const DELETING_SPEED = 10; // velocidade de apagar (bem rápido)
    const PAUSE_END = 2000;    // pausa quando termina de escrever tudo
    const PAUSE_START = 500;   // pausa quando termina de apagar tudo

    if (!isDeleting && charIndex < fullCode.length) {
      timeout = setTimeout(() => {
        setCharIndex((prev) => prev + 1);
      }, TYPING_SPEED);

    } else if (!isDeleting && charIndex === fullCode.length) {
      timeout = setTimeout(() => {
        setIsDeleting(true);
      }, PAUSE_END);

    } else if (isDeleting && charIndex > 0) {
      timeout = setTimeout(() => {
        setCharIndex((prev) => prev - 1);
      }, DELETING_SPEED);

    } else if (isDeleting && charIndex === 0) {
      timeout = setTimeout(() => {
        setIsDeleting(false);
      }, PAUSE_START);
    }

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, fullCode.length]);

  const displayedText = fullCode.substring(0, charIndex);
  const displayedLines = displayedText.split("\n");

  return (
    <div className={styles.vscodeContainer}>
      {/* Header */}
      <div className={styles.header}>
        <div className={styles.windowControls}>
          <span className={`${styles.dot} ${styles.red}`}></span>
          <span className={`${styles.dot} ${styles.yellow}`}></span>
          <span className={`${styles.dot} ${styles.green}`}></span>
        </div>
        <div className={styles.title}>portfolio-dev</div>
      </div>

      {/* Tabs */}
      <div className={styles.tabs}>
        <div className={`${styles.tab} ${styles.active}`}>
          <span className={styles.icon}>
             <Image src={reactIcon} alt="React Icon" className="img-fluid" title="Ícone React"/>
          </span>
          <span className={styles.filename}>index.jsx</span>
          <span className={styles.close}>×</span>
        </div>
      </div>

      {/* Editor Area */}
      <div className={styles.editorArea}>
        {/* Coluna de Números */}
        <div className={styles.gutter}>
          {codeLines.map((_, i) => (
            <span key={i} className={styles.lineNumber}>{i + 1}</span>
          ))}
        </div>

        {/* Conteúdo do Código */}
        <div className={styles.codeContent}>
          {displayedLines.map((line, index) => (
            <div key={index} className={styles.line}>
              {/* Renderiza a linha com Syntax Highlighting */}
              <SyntaxHighlighter text={line} />

              {/* Lógica do Cursor: Só aparece na última linha que está sendo escrita */}
              {index === displayedLines.length - 1 && (
                <motion.span
                  className={styles.cursor}
                  animate={{ opacity: [1, 0, 1] }}
                  transition={{
                    duration: 0.8,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function SyntaxHighlighter({ text }) {
  // Regex para separar palavras mantendo os delimitadores
  const parts = text.split(/(\s+|[(){}<>'";.])/g).filter(Boolean);
  
  const getColor = (word) => {
    // Keywords
    if (["import", "from", "export", "default", "function", "return", "const"].includes(word)) return styles.keyword;
    // Componentes e Tags HTML básicas
    if (["React", "App", "div", "h1", "span", "p"].includes(word)) return styles.component;
    // Strings (começam com ', ", ou `)
    if (word.startsWith("'") || word.startsWith('"') || word.startsWith("`")) return styles.string;
    // Atributos
    if (word.includes("className")) return styles.attr;
    
    return styles.defaultText;
  };

  return (
    <>
      {parts.map((part, i) => (
        <span key={i} className={getColor(part.trim())}>
          {part}
        </span>
      ))}
    </>
  );
}

