import React, { useEffect, useState } from "react";
import { motion } from "motion/react";
import useWindowDimensions from "@/app/hooks/useWindowDimensions";
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
  const { width } = useWindowDimensions();

  const handleClick = () => {
    window.open(url, "_blank");
  };

  const [isDropcomponentShown, setIsDropcomponentShown] = useState(false);
  const [isButtonHovered, setIsButtonHovered] = useState(false);
  const [isButtonClicked, setIsButtonClicked] = useState(false);

  return (
    <motion.div
      className={styles.wrapper}
      onHoverStart={() => {
        setIsDropcomponentShown(true);
        setIsButtonHovered(true);
      }}
      onHoverEnd={() => {
        setIsDropcomponentShown(false);
        setIsButtonHovered(false);
      }}
    >
      <motion.button
        className={styles.button}
        style={{
          width: width > 1000 ? 250 : 120,
          height: width > 1000 ? 57 : 35,
          fontSize: width > 1000 ? 20 : 12,
          borderRadius: width > 1000 ? 16 : 8,
          boxShadow: isButtonClicked
            ? "0 0 30px rgba(30, 18, 18, 0.4)"
            : isButtonHovered
            ? "0 0 30px rgba(30, 18, 18, 0.3)"
            : "none",
          transform: isButtonClicked
            ? "translateY(.5px)"
            : isButtonHovered
            ? "translateY(-2px)"
            : "none",
          transition: "box-shadow 0.3s, transform 0.3s",
        }}
        onClick={handleClick}
        onMouseDown={() => setIsButtonClicked(true)}
        onMouseUp={() => setIsButtonClicked(false)}
        onMouseLeave={() => setIsButtonClicked(false)}
      >
        <span className={styles.text}>{title}</span>
      </motion.button>
      <motion.div
        initial={{ opacity: 1, y: -10 }}
        exit={{ opacity: 1, y: -10 }}
        animate={{
          opacity: isDropcomponentShown ? 1 : 0,
          y: isDropcomponentShown ? 0 : -27,
        }}
        transition={{ duration: 0.25 }}
        className={styles.dropContainer}
        style={{
          width: width > 1000 ? 250 : 120,
        }}
      >
        {dropComponent}
      </motion.div>
    </motion.div>
  );
}