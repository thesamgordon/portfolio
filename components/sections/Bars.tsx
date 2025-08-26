import {
  cubicBezier,
  motion,
  MotionValue,
  useMotionTemplate,
  useScroll,
  useTransform,
} from "motion/react";
import { useMemo } from "react";

function useCubeTransforms(scrollY: MotionValue<number>, heights: number[]) {
  const t0 = useTransform(scrollY, [0, 1000], [400, heights[0]], { ease: cubicBezier(0.4, 0.1, 0.2, 1) });
  const t1 = useTransform(scrollY, [0, 1000], [400, heights[1]], { ease: cubicBezier(0.4, 0.1, 0.2, 1) });
  const t2 = useTransform(scrollY, [0, 1000], [400, heights[2]], { ease: cubicBezier(0.4, 0.1, 0.2, 1) });
  const t3 = useTransform(scrollY, [0, 1000], [400, heights[3]], { ease: cubicBezier(0.4, 0.1, 0.2, 1) });
  const t4 = useTransform(scrollY, [0, 1000], [400, heights[4]], { ease: cubicBezier(0.4, 0.1, 0.2, 1) });

  const h0 = useTransform(scrollY, [0, 1000], [0, heights[0]], { ease: cubicBezier(0.4, 0.1, 0.2, 1) });
  const h1 = useTransform(scrollY, [0, 1000], [0, heights[1]], { ease: cubicBezier(0.4, 0.1, 0.2, 1) });
  const h2 = useTransform(scrollY, [0, 1000], [0, heights[2]], { ease: cubicBezier(0.4, 0.1, 0.2, 1) });
  const h3 = useTransform(scrollY, [0, 1000], [0, heights[3]], { ease: cubicBezier(0.4, 0.1, 0.2, 1) });
  const h4 = useTransform(scrollY, [0, 1000], [0, heights[4]], { ease: cubicBezier(0.4, 0.1, 0.2, 1) });

  return {
    cubeHeights: [t0, t1, t2, t3, t4],
    cubeTransforms: [h0, h1, h2, h3, h4],
  };
}

export default function Bars() {
  const { scrollY } = useScroll();

  const fiveRandomMaxHeights = useMemo(
    () =>
      Array.from({ length: 5 }, (_, index) =>
        index > 2 ? index * 200 + 300 : (4 - index) * 200 + 300
      ),
    []
  );

  const { cubeHeights, cubeTransforms } = useCubeTransforms(
    scrollY,
    fiveRandomMaxHeights
  );

  const templates = cubeTransforms.map(
    (transform) => useMotionTemplate`translateY(-${transform}px)`
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
        top: "110vh",
        width: "100%",
        zIndex: 0,
        height: 0,
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
