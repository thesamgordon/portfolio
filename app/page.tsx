"use client";
import Background from "@/components/Background";
import Bars from "@/components/sections/Bars";
import HeroSection from "@/components/sections/HeroSection";
import ProjectSection from "@/components/sections/ProjectSection";
import styles from "./page.module.scss";

import {
  cubicBezier,
  easeInOut,
  motion,
  useMotionTemplate,
  useScroll,
  useTransform,
} from "motion/react";
import { useRef } from "react";
import useWindowDimensions from "./hooks/useWindowDimensions";

export default function HomePage() {
  const { scrollY } = useScroll();
  const { width: windowWidth } = useWindowDimensions();
  const year = new Date().getFullYear();

  const blur = useTransform(scrollY, [0, 1000], [0, 100], {
    ease: easeInOut,
  });

  const filter = useMotionTemplate`blur(${blur}px)`;

  const scale = useTransform(scrollY, [0, 1000], [1, 0.8], {
    ease: cubicBezier(0.4, 0.1, 0.2, 1),
  });

  const marginTop = useTransform(scrollY, [0, 1000], [300, -300], {
    ease: cubicBezier(0.4, 0.1, 0.2, 1),
  });

  return (
    <main className={styles.main}>
      <Background />
      <div className={styles.spacer}></div>
      <motion.div
        className={styles.heroFixed}
        style={{
          filter: filter,
          scale: scale,
        }}
      >
        <HeroSection />
      </motion.div>

      <Bars />
      
      <ProjectSection marginTop={marginTop} />

      <div className={styles.footerContainer}>
        <motion.div
          className={styles.footerShape}
          style={{
            height:
              windowWidth > 1000 ? "20vh" : windowWidth > 875 ? "15vh" : "10vh",
            width:
              windowWidth > 1000 ? "40%" : windowWidth > 875 ? "40%" : "50%",
          }}
        ></motion.div>
        <div
          className={styles.footerTextWrapper}
          style={{
            padding: windowWidth > 1000 ? "1rem" : ".5rem",
          }}
        >
          <div>
            <p
              className={styles.copyright}
              style={{
                fontSize:
                  windowWidth > 1000
                    ? "1.25rem"
                    : windowWidth > 875
                    ? "1rem"
                    : windowWidth > 600
                    ? "0.875rem"
                    : "0.75rem",
              }}
            >
              {windowWidth < 600
                ? `© ${year} Sam Gordon`
                : `© ${year} Sam Gordon. All rights reserved.`}
            </p>
            <h1
              className={styles.footerName}
              style={{
                fontSize:
                  windowWidth > 1300
                    ? "10vh"
                    : windowWidth > 1050
                    ? "9vh"
                    : windowWidth > 875
                    ? "7vh"
                    : windowWidth > 600
                    ? "5vh"
                    : "4vh",
              }}
            >
              Sam Gordon
            </h1>
          </div>
        </div>
      </div>
    </main>
  );
}