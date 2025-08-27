"use client";

import React, { useState } from "react";
import BackgroundImage from "@/lib/images/background-no-grain.webp";
import Image from "next/image";

interface BackgroundProps {
  loadCallback?: () => void;
}

export default function Background({ loadCallback }: BackgroundProps) {
  const [loaded, setLoaded] = useState(false);

  const handleLoad = () => {
    setLoaded(true);
    if (loadCallback) loadCallback();
  };

  return (
    <>
      <div
        id="background"
        style={{
          overflow: "hidden",
          position: "fixed",
          width: "100vw",
          height: "100vh",
          top: 0,
          left: 0,
          zIndex: -2,
          filter: "brightness(1) saturate(1.1)",
        }}
      >
        <Image
          src={BackgroundImage.src}
          alt="Background"
          fill={true}
          onLoad={() => {
            handleLoad();
          }}
          style={{
            position: "absolute",
            width: "100%",
            height: "100%",
            top: 0,
            right: 0,
            opacity: loaded ? 1 : 0,
            display: "block",
            pointerEvents: "none",
            transform: "scale(1.3)",
            transition: "opacity .3s ease",
            zIndex: -2,
          }}
        />

        <div
          id="filter-container"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            opacity: 0.4,
            mixBlendMode: "overlay",
            zIndex: -1,
          }}
        >
          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              backgroundImage: "url('/background-grain.webp')",
              backgroundRepeat: "repeat",
              opacity: loaded ? 0.6 : 0,
              backgroundSize: "200px",
              zIndex: -1,
            }}
          />
        </div>
      </div>
    </>
  );
}
