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

export default function HomePage() {
  const { scrollY } = useScroll();

  const blur = useTransform(scrollY, [0, 1000], [0, 100], {
    ease: easeInOut,
  });

  const filter = useMotionTemplate`blur(${blur}px)`;

  const scale = useTransform(scrollY, [0, 1000], [1, 0.8], {
    ease: cubicBezier(0.4, 0.1, 0.2, 1),
  });

  return (
    <main>
      <Background />
      <div
        style={{
          backgroundColor: "transparent",
          height: "100vh",
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
        style={{
          marginTop: useTransform(scrollY, [0, 900], [200, -600], {
            ease: cubicBezier(1, 0.8, 0.5, 1),
          }),
        }}
      >
        <ProjectSection />
      </motion.div>
    </main>
  );
}
