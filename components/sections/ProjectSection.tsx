"use client";

import {
  motion,
  useScroll,
  useTransform,
  MotionValue,
  AnimatePresence,
} from "motion/react";
import { useRef, useState, useEffect } from "react";
import Project from "../projects/Project";
import styles from "./ProjectSection.module.scss";

export default function ProjectSection({
  marginTop,
}: {
  marginTop: MotionValue<number>;
}) {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const [activeProject, setActiveProject] = useState(1);

  useEffect(() => {
    const unsubscribe = scrollYProgress.on("change", (latest) => {
      if (latest >= 0 && latest < 0.3) {
        setActiveProject(1);
      } else if (latest >= 0.3 && latest < 0.7) {
        setActiveProject(2);
      } else if (latest >= 0.7) {
        setActiveProject(3);
      }
    });

    return () => unsubscribe();
  }, [scrollYProgress]);

  return (
    <motion.section
      ref={containerRef}
      className={styles.section}
      style={{ marginTop }}
    >
      <div className={styles.stickyWrapper}>
        <AnimatePresence mode="sync" initial={false}>
          {activeProject === 1 && (
            <motion.div
              className={styles.projectContainer}
              initial={{
                transform: "translateX(250px)",
                opacity: 0,
                filter: "blur(10px)",
              }}
              animate={{
                transform: "translateX(0)",
                opacity: 1,
                filter: "blur(0px)",
              }}
              key="project-1"
              transition={{ duration: 0.8, ease: [0.813, 0, 0.182, 0.994] }}
              exit={{
                transform: "translateX(-250px)",
                opacity: 0,
                filter: "blur(10px)",
              }}
            >
              <Project
                scrollProgress={scrollYProgress}
                technologies={[
                  {
                    title: "RUST",
                    description:
                      "Performance, safety, and convenience in one, beautiful package. The gold standard of programming languages.",
                    svgName: "rust",
                    color: "#B7410E",
                  },
                  {
                    title: "NEXT.JS",
                    description:
                      "My go-to for building the modern web. It's where raw performance meets a refined user experience.",
                    svgName: "nextjs",
                    color: "#0070F3",
                  },
                ]}
                githubUrl={"https://github.com"}
                name={"LEDGER"}
                description={
                  "A storage server with a singular focus: reducing the friction between data and the user. Most modern storage solutions are bogged down by unnecessary features and heavy UI. This project proves that you don't have to sacrifice speed for simplicity."
                }
              />
            </motion.div>
          )}
          {activeProject === 2 && (
            <motion.div
              className={styles.projectContainer}
              key="project-2"
              initial={{
                transform: "translateX(250px)",
                opacity: 0,
                filter: "blur(10px)",
              }}
              animate={{
                transform: "translateX(0)",
                opacity: 1,
                filter: "blur(0px)",
              }}
              transition={{ duration: 0.8, ease: [0.813, 0, 0.182, 0.994] }}
              exit={{
                transform: "translateX(-250px)",
                opacity: 0,
                filter: "blur(10px)",
              }}
            >
              <Project
                scrollProgress={scrollYProgress}
                technologies={[
                  {
                    title: "RUST",
                    description:
                      "Performance, safety, and convenience in one, beautiful package. The gold standard of programming languages.",
                    svgName: "rust",
                    color: "#B7410E",
                  },
                  {
                    title: "NEXT.JS",
                    description:
                      "My go-to for building the modern web. It's where raw performance meets a refined user experience.",
                    svgName: "nextjs",
                    color: "#0070F3",
                  },
                ]}
                githubUrl={"https://github.com"}
                name={"PASTEBOOK"}
                description={
                  "A storage server with a singular focus: reducing the friction between data and the user. Most modern storage solutions are bogged down by unnecessary features and heavy UI. This project proves that you don't have to sacrifice speed for simplicity."
                }
              />
            </motion.div>
          )}
          {activeProject === 3 && (
            <motion.div
              className={styles.projectContainer}
              key="project-3"
              initial={{
                transform: "translateX(250px)",
                opacity: 0,
                filter: "blur(10px)",
              }}
              animate={{
                transform: "translateX(0)",
                opacity: 1,
                filter: "blur(0px)",
              }}
              transition={{ duration: 0.8, ease: [0.813, 0, 0.182, 0.994] }}
              exit={{
                transform: "translateX(-250px)",
                opacity: 0,
                filter: "blur(10px)",
              }}
            >
              <Project
                scrollProgress={scrollYProgress}
                technologies={[
                  {
                    title: "asdasd",
                    description:
                      "Performance, safety, and convenience in one, beautiful package. The gold standard of programming languages.",
                    svgName: "rust",
                    color: "#B7410E",
                  },
                  {
                    title: "NEXT.JS",
                    description:
                      "My go-to for building the modern web. It's where raw performance meets a refined user experience.",
                    svgName: "nextjs",
                    color: "#0070F3",
                  },
                ]}
                githubUrl={"https://github.com"}
                name={"LEDGER"}
                description={
                  "A storage server with a singular focus: reducing the friction between data and the user. Most modern storage solutions are bogged down by unnecessary features and heavy UI. This project proves that you don't have to sacrifice speed for simplicity."
                }
              />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.section>
  );
}
