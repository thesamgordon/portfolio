"use client";

import React, { useState } from "react";
import BackgroundImage from "@/lib/images/background-no-grain.webp";
import Image from "next/image";
import styles from "./Background.module.scss";

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
      <div id="background" className={styles.backgroundWrapper}>
        <Image
          src={BackgroundImage.src}
          alt="Background"
          fill={true}
          onLoad={() => {
            handleLoad();
          }}
          className={styles.bgImage}
          style={{
            opacity: loaded ? 1 : 0,
          }}
        />

        <div id="filter-container" className={styles.filterContainer}>
          <div
            className={styles.grainLayer}
            style={{
              opacity: loaded ? 0.6 : 0,
            }}
          />
        </div>
      </div>
    </>
  );
}