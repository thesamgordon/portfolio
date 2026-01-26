"use client";

import {
  Easing,
  motion,
  useMotionTemplate,
  useScroll,
  useTransform,
  useMotionValueEvent,
  MotionValue,
} from "motion/react";
import CodeCard from "./card/CodeCard";
import LinkCard from "./card/LinkCard";
import Filler from "./Filler";
import styles from "./Project.module.scss";
import { ReactNode, useRef } from "react";
import useWindowDimensions from "@/app/hooks/useWindowDimensions";

interface ProjectProps {
  name: string;
  description: string;
  technologies: {
    title: string;
    description: string;
    svgName: string;
    color: string;
  }[];
  linkCard: ReactNode;
  index?: number;
  scrollDirection: number;
}

const shutterVariants = {
  enter: {
    clipPath: "inset(0% 0% 100% 0%)",
    opacity: 0,
  },
  center: {
    clipPath: "inset(0% 0% 0% 0%)",
    opacity: 1,
    y: 0,
  },
  exit: {
    clipPath: "inset(100% 0% 0% 0%)",
    opacity: 0,
  },
};

const EASE = [0.813, 0, 0.182, 0.994] as Easing;

export default function Project({
  name,
  description,
  technologies,
  linkCard,
  index,
  scrollDirection,
}: ProjectProps) {
  const container = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll();
  const { width } = useWindowDimensions();

  const repeatedName = Array(10).fill(name.toUpperCase()).join(" • ");

  const x = useTransform(
    scrollYProgress,
    [0, 1],
    [0, -3000 + (index ? index * 1000 : 0)],
  );

  const transformTemplate = useMotionTemplate`translateX(${x}px)`;

  return (
    <motion.div className={styles.projectContainer} ref={container}>
      <motion.div
        className={styles.titleContainer}
        initial={{ x: scrollDirection * 3000 }}
        animate={{ x: 0 }}
        transition={{ duration: 1, ease: EASE }}
        exit={{ x: scrollDirection * -3000 }}
      >
        <motion.h1
          className={styles.projectTitle}
          style={{ transform: transformTemplate }}
        >
          {repeatedName}
        </motion.h1>
      </motion.div>
      <div className={styles.topBottomContainer}>
        <div className={styles.topContainer}>
          <motion.div
            className={styles.leftBox}
            variants={shutterVariants}
            transition={{ duration: 0.7, delay: 0.1, ease: EASE }}
          >
            <h1 className={styles.leftBoxTitle}>DESCRIPTION</h1>
            <div className={styles.leftBoxDescription}>{description}</div>
          </motion.div>
          <div className={styles.rightBox}>
            {technologies.map((tech, i) => (
              <motion.div
                key={tech.title}
                variants={shutterVariants}
                transition={{ duration: 0.7, delay: 0.2 + i * 0.1, ease: EASE }}
              >
                <CodeCard
                  title={tech.title}
                  description={tech.description}
                  svgName={tech.svgName}
                  color={tech.color}
                />
              </motion.div>
            ))}
          </div>
        </div>
        <motion.div
          className={styles.bottom}
          variants={shutterVariants}
          transition={{ duration: 0.7, delay: 0.2, ease: EASE }}
        >
          {linkCard}
          <Filler count={
            width < 1150 ? 2 : 3
          } />
        </motion.div>
      </div>
    </motion.div>
  );
}