import {
  cubicBezier,
  motion,
  useMotionTemplate,
  useScroll,
  useTransform,
} from "motion/react";
import { useMemo } from "react";

export default function Bars() {
  const { scrollY } = useScroll();

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
  );
}
