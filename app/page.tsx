"use client";
import Background from "@/components/Background";
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
import { useMemo } from "react";

export default function HomePage() {
  const { scrollY } = useScroll();

  const blur = useTransform(scrollY, [0, 1000], [0, 100], {
    ease: easeInOut,
  });

  const filter = useMotionTemplate`blur(${blur}px)`;

  const scale = useTransform(scrollY, [0, 1000], [1, 0.9], {
    ease: cubicBezier(0.4, 0.1, 0.2, 1),
  });

  const fiveRandomMaxHeights = useMemo(
    () =>
      Array.from({ length: 5 }, (_, index) =>
        index > 2 ? index * 200 + 300 : (4 - index) * 200 + 300
      ),
    []
  );

  const cubeHeights = fiveRandomMaxHeights.map((maxHeight) =>
    useTransform(scrollY, [0, 1000], [400, maxHeight], {
      ease: cubicBezier(0.4, 0.1, 0.2, 1),
    })
  );

  const cubeTransforms = fiveRandomMaxHeights.map((maxHeight) =>
    useTransform(scrollY, [0, 1000], [0, maxHeight], {
      ease: cubicBezier(0.4, 0.1, 0.2, 1),
    })
  );

  const templates = cubeTransforms.map(
    (transform) => useMotionTemplate`translateY(-${transform}px)`
  );

  const offset = useTransform(scrollY, [0, 1000], [400, -400], {});

  const offsetTemplates = cubeTransforms.map(
    (transform) => useMotionTemplate`${transform}px)`
  );

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
      <motion.div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "stretch",
          position: "absolute",
          overflow: "visible",
          left: 0,
          top: "100vh",
          width: "100%",
          zIndex: 0,
        }}
      >
        <motion.div
          style={{
            backgroundColor: "white",
            height: cubeHeights[0],
            flex: 1,
            transform: templates[0],
            borderRadius: "400px 400px 0 0",
          }}
        />
        <motion.div
          style={{
            backgroundColor: "white",
            height: cubeHeights[1],
            flex: 1,
            transform: templates[1],
            borderRadius: "400px 400px 0 0",
          }}
        />
        <motion.div
          style={{
            backgroundColor: "white",
            height: cubeHeights[2],
            flex: 1,
            transform: templates[2],
            borderRadius: "400px 400px 0 0",
          }}
        />
        <motion.div
          style={{
            backgroundColor: "white",
            height: cubeHeights[3],
            flex: 1,
            transform: templates[3],
            borderRadius: "400px 400px 0 0",
          }}
        />
        <motion.div
          style={{
            backgroundColor: "white",
            height: cubeHeights[4],
            flex: 1,
            transform: templates[4],
            borderRadius: "400px 400px 0 0",
          }}
        />
      </motion.div>
      <div
        style={{
          position: "relative",
          overflow: "visible",
        }}
      >
        <motion.div
          style={{
            marginTop: useTransform(scrollY, [0, 400], [200, 0], {
              ease: cubicBezier(0.4, 0.2, 0.5, 1),
            }),
          }}
        >
          <ProjectSection />
        </motion.div>
      </div>
    </main>
  );
}
