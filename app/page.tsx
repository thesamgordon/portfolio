"use client";
import Background from "@/components/Background";
import Bars from "@/components/sections/Bars";
import HeroSection from "@/components/sections/HeroSection";
import ProjectSection from "@/components/sections/ProjectSection";

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

  const blur = useTransform(scrollY, [0, 1000], [0, 100], {
    ease: easeInOut,
  });

  const filter = useMotionTemplate`blur(${blur}px)`;

  const scale = useTransform(scrollY, [0, 1000], [1, 0.8], {
    ease: cubicBezier(0.4, 0.1, 0.2, 1),
  });

  const secondRef = useRef<HTMLDivElement>(null);

  const { scrollY: secondScrollY } = useScroll({
    target: secondRef,
    offset: ["start end", "start start"],
  });

  const width = useTransform(secondScrollY, [600, 800], [80, 60], {
    ease: cubicBezier(0.4, 0.1, 0.2, 1),
  });

  const widthTemplate = useMotionTemplate`${width}%`;

  return (
    <main>
      <Background />
      <div
        style={{
          backgroundColor: "transparent",
          height: "100dvh",
          zIndex: -1,
          pointerEvents: "none",
        }}
      ></div>
      <motion.div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          zIndex: 0,
          filter: filter,
          scale: scale,
          pointerEvents: "auto",
        }}
      >
        <HeroSection />
      </motion.div>

      <Bars />
      <motion.div
        ref={secondRef}
        style={{
          marginTop: useTransform(scrollY, [0, 900], [300, -400], {
            ease: cubicBezier(1, 0.8, 0.5, 1),
          }),
        }}
      >
        <ProjectSection />
      </motion.div>
      <div
        style={{
          position: "relative",
          overflow: "hidden",
          width: "100%",
        }}
      >
        <motion.div
          style={{
            backgroundColor: "white",
            height: windowWidth > 1000 ? "20vh" : windowWidth > 875 ? "15vh" : "10vh",
            width: widthTemplate,
            borderTopRightRadius: "200px",
            borderBottomRightRadius: "200px",
            zIndex: -1,
            pointerEvents: "none",
          }}
        ></motion.div>
        <h1
          style={{
            fontWeight: 900,
            textAlign: "right",
            fontSize: windowWidth > 1300 ? "10vh" : windowWidth > 1050 ? "8vh" : windowWidth > 875 ? "6vh" : "3vh",
            margin: 0,
            lineHeight: .67,
            position: "absolute",
            bottom: 0,
            right: 0,
            color: "white",
            letterSpacing: "-0.03em",
          }}
        >
          Sam Gordon
        </h1>
      </div>
    </main>
  );
}
