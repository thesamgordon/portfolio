import React from "react";
import { motion } from "motion/react";
import useWindowDimensions from "@/app/hooks/useWindowDimensions";

interface ButtonProps {
  title: string;
  url: string;
}

export default function Button({ title, url }: ButtonProps) {
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
    borderRadius: width > 1000 ? 16 : 8
  };

  const spanStyle: React.CSSProperties = {
    color: "#9A0100",
    fontWeight: "bold",
  };

  const handleClick = () => {
    window.open(url, "_blank");
  };

  return (
    <motion.button
      style={buttonStyle}
      onClick={handleClick}
      whileHover={{ 
        boxShadow: "0 0 30px rgba(30, 18, 18, 0.3)",
        transform: "translateY(-2px)"
      }}

      whileTap={{
        scale: 0.95,
        boxShadow: "0 0 30px rgba(30, 18, 18, 0.5)",
        transform: "translateY(2px)"
      }}
    >
      <span style={spanStyle}>{title}</span>
    </motion.button>
  );
}
