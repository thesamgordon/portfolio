"use client";

import React, { useState } from "react";
import { motion } from "motion/react";
import styles from "./Button.module.scss";

interface ButtonProps {
  title: string;
  url: string;
  dropComponent?: React.ReactNode;
}

export default function Button({
  title,
  url,
  dropComponent = null,
}: ButtonProps) {
  const handleClick = () => {
    window.open(url, "_blank");
  };

  const [isDropcomponentShown, setIsDropcomponentShown] = useState(false);
  const [isButtonClicked, setIsButtonClicked] = useState(false);

  return (
    <motion.div
      className={styles.wrapper}
      onHoverStart={() => setIsDropcomponentShown(true)}
      onHoverEnd={() => setIsDropcomponentShown(false)}
    >
      <motion.button
        className={`${styles.button} ${isButtonClicked ? styles.clicked : ""}`}
        onClick={handleClick}
        onMouseDown={() => setIsButtonClicked(true)}
        onMouseUp={() => setIsButtonClicked(false)}
        onMouseLeave={() => setIsButtonClicked(false)}
      >
        <span className={styles.text}>{title}</span>
      </motion.button>
      
      <motion.div
        initial={{ opacity: 0, y: -27 }}
        animate={{
          opacity: isDropcomponentShown ? 1 : 0,
          y: isDropcomponentShown ? 0 : -27,
        }}
        transition={{ duration: 0.25 }}
        className={styles.dropContainer}
      >
        {dropComponent}
      </motion.div>
    </motion.div>
  );
}