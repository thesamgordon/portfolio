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
          marginTop: useTransform(scrollY, [0, 900], [300, -200], {
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
            height:
              windowWidth > 1000 ? "20vh" : windowWidth > 875 ? "15vh" : "10vh",
            width:
              windowWidth > 1000 ? "40%" : windowWidth > 875 ? "40%" : "50%",
            borderTopRightRadius: "200px",
            borderBottomRightRadius: "200px",
            zIndex: -1,
            pointerEvents: "none",
          }}
        ></motion.div>
        <div
          style={{
            position: "absolute",
            bottom: 0,
            right: 0,
            width: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "end",
            alignItems: "end",
            gap: ".2rem",
          }}
        >
          <div>
            <p
              style={{
                color: "white",
                fontSize:
                  windowWidth > 1000
                    ? "1.25rem"
                    : windowWidth > 875
                    ? "1rem"
                    : windowWidth > 600
                    ? "0.875rem"
                    : "0.75rem",
                margin: 0,
                textAlign: "center",
                display: "inline-block",
                paddingRight: "2rem",
                lineHeight: .7,
              }}
            >
              {windowWidth < 600
                ? "© 2025 Sam Gordon"
                : "© 2025 Sam Gordon. All rights reserved."}
            </p>
            <h1
              style={{
                fontWeight: 900,
                textAlign: "right",
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
                margin: 0,
                lineHeight: 0.67,
                color: "white",
                letterSpacing: "-0.03em",
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
