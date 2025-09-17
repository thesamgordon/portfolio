import React, { useEffect, useState } from "react";
import { motion } from "motion/react";
import useWindowDimensions from "@/app/hooks/useWindowDimensions";

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

  const buttonStyle: React.CSSProperties = {
    display: "flex",
    width: width > 1000 ? 250 : 120,
    height: width > 1000 ? 57 : 35,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
    border: "none",
    fontSize: width > 1000 ? 20 : 12,
    fontWeight: "bold",
    cursor: "pointer",
    borderRadius: width > 1000 ? 16 : 8,
  };

  const spanStyle: React.CSSProperties = {
    color: "#9A0100",
    fontWeight: "bold",
  };

  const handleClick = () => {
    window.open(url, "_blank");
  };

  const [isDropcomponentShown, setIsDropcomponentShown] = useState(false);

  return (
    <motion.div
      onHoverStart={() => {
        setIsDropcomponentShown(true);
      }}
      onHoverEnd={() => setIsDropcomponentShown(false)}
    >
      <motion.button
        style={buttonStyle}
        onClick={handleClick}
        whileHover={{
          boxShadow: "0 0 30px rgba(30, 18, 18, 0.3)",
          transform: "translateY(-2px)",
        }}
        whileTap={{
          scale: 0.95,
          boxShadow: "0 0 30px rgba(30, 18, 18, 0.5)",
          transform: "translateY(2px)",
        }}
      >
        <span style={spanStyle}>{title}</span>
      </motion.button>
      <motion.div
        initial={{ opacity: 1, y: -10 }}
        exit={{ opacity: 1, y: -10 }}
        animate={{
          opacity: isDropcomponentShown ? 1 : 0,
          y: isDropcomponentShown ? 0 : -20,
        }}
        transition={{ duration: 0.25 }}
        style={{
          position: "absolute",
          paddingTop: 5,
          width: width > 1000 ? 250 : 120,
        }}
      >
        {dropComponent}
      </motion.div>
    </motion.div>
  );
}
