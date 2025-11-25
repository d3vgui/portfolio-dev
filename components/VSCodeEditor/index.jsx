"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import styles from "./VSCodeEditor.module.scss";
import reactIcon from "../../app/images/reactIcon.webp"; // Certifique-se que este caminho está correto

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

  const [currentLineIndex, setCurrentLineIndex] = useState(0);

  useEffect(() => {
    if (currentLineIndex < codeLines.length) {
      const timeout = setTimeout(() => {
        setCurrentLineIndex((prev) => prev + 1);
      }, 600);
      
      return () => clearTimeout(timeout);
    }
  }, [currentLineIndex, codeLines.length]);

  const activeLineIndex = Math.min(currentLineIndex, codeLines.length - 1);

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
             <img src={reactIcon.src} alt="React Icon" className="img-fluid"/>
          </span>
          <span className={styles.filename}>index.jsx</span>
          <span className={styles.close}>×</span>
        </div>
      </div>

      {/* Editor Area */}
      <div className={styles.editorArea}>
        <div className={styles.gutter}>
          {codeLines.map((_, i) => (
            <span key={i} className={styles.lineNumber}>{i + 1}</span>
          ))}
        </div>

        <div className={styles.codeContent}>
          {codeLines.map((line, index) => (

            index <= currentLineIndex && (
              <motion.div
                key={index}
                className={styles.line}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.4 }}
              >
                <Typewriter text={line} />
                
                {index === activeLineIndex && (
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
              </motion.div>
            )
          ))}
        </div>
      </div>
    </div>
  );
}

function Typewriter({ text }) {
  const parts = text.split(/(\s+|[(){}<>'";])/g).filter(Boolean);
  
  const getColor = (word) => {
    if (["import", "from", "export", "default", "function", "return", "const"].includes(word)) return styles.keyword;
    if (["React", "App", "div", "h1"].includes(word)) return styles.component;
    if (word.startsWith("'") || word.startsWith('"') || word.startsWith("`")) return styles.string;
    if (word.includes("className")) return styles.attr;
    return styles.defaultText;
  };

  return (
    <span className={styles.codeLine}>
      {parts.map((part, i) => (
        <motion.span
          key={i}
          className={getColor(part.trim())}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.05, delay: i * 0.03 }}
        >
          {part}
        </motion.span>
      ))}
    </span>
  );
}