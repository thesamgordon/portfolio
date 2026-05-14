"use client";

import { AnimatePresence, motion, MotionValue, useScroll } from "motion/react";
import { ReactNode, useEffect, useRef, useState } from "react";
import LinkCard from "../projects/card/LinkCard";
import Progress from "../projects/Progress";
import Project from "../projects/Project";
import styles from "./ProjectSection.module.scss";

const variants = {
  enter: (direction: number) => ({
    clipPath: "inset(0% 0% 100% 0%)",
    scale: 1,
    y: direction > 0 ? 50 : -50,
    opacity: 0,
  }),
  center: {
    clipPath: "inset(0% 0% 0% 0%)",
    scale: 1.1,
    y: 0,
    opacity: 1,
  },
  exit: (direction: number) => ({
    clipPath: "inset(100% 0% 0% 0%)",
    scale: 1.2,
    y: direction > 0 ? -50 : 50,
    opacity: 0,
  }),
};

const PROJECTS_DATA = [
  {
    id: 1,
    name: "Ledger",
    githubUrl: "https://github.com",
    description:
      "A storage server with a singular focus: reducing the friction between data and the user. Most modern storage solutions are bogged down by unnecessary features and heavy UI. This project proves that you don't have to sacrifice speed for simplicity.",
    technologies: [
      {
        title: "RUST",
        description:
          "Performance, safety, and convenience in one, beautiful package.",
        svgName: "rust",
        color: "#B7410E",
      },
      {
        title: "NEXT.JS",
        description: "My go-to for building the modern web.",
        svgName: "nextjs",
        color: "#0070F3",
      },
      {
        title: "POSTGRES",
        description: "Reliable, powerful, and open source database management.",
        svgName: "postgres",
        color: "#0064a5",
      },
    ],
    linkCards: [
      <LinkCard
        title={"GITHUB"}
        description={`Browse the code that makes Ledger magical.`}
        svgName="github"
        color="#111512"
        url={"https://github.com/ldg-sh"}
        interactText={"VISIT SITE"}
        key={"github-card"}
      />,
      <LinkCard
        title={"LIVE PROTOTYPE"}
        description={`Explore the live prototype of Ledger.`}
        svgName="link-large"
        color="#006118"
        url={"https://ldg.sh/about"}
        interactText={"VISIT SITE"}
        key={"prototype-card"}
      />,
    ],
    index: 0,
  },
  {
    id: 2,
    name: "PasteBook",
    githubUrl: "https://github.com",
    description:
      "An easy on the eyes, portable, lightning fast pastebin written in Svelte and Rust. PasteBook was created as a learning project, but has since evolved into a fully fledged pastebin service with syntax highlighting, self hosting, and more.",
    technologies: [
      {
        title: "RUST",
        description:
          "Performance, safety, and convenience in one, beautiful package.",
        svgName: "rust",
        color: "#B7410E",
      },
      {
        title: "SVELTE",
        description:
          "My web building alternative for creating simple, functional apps.",
        svgName: "svelte",
        color: "#FF3E00",
      },
      {
        title: "POSTGRES",
        description: "Reliable, powerful, and open source database management.",
        svgName: "postgres",
        color: "#0064a5",
      },
    ],
    linkCards: [
      <LinkCard
        title={"GITHUB"}
        description={`Browse the code that makes PasteBook magical.`}
        svgName="github"
        color="#111512"
        url={"https://github.com/thesamgordon/pastebook"}
        interactText={"VISIT SITE"}
        key={"github-card"}
      />,
      <LinkCard
        title={"LIVE SITE"}
        description={`Check out PasteBook in action!`}
        svgName="link-large"
        color="#006118"
        url={"https://pastebook.dev"}
        interactText={"VISIT SITE"}
        key={"live-site-card"}
      />,
    ],
    index: 1,
  },
  {
    id: 3,
    name: "Sheet Snip",
    githubUrl: "https://github.com",
    description:
      "A Python program designed to convert spreadsheets full of microphone data to workable cue sheets for live performances. Sheet Snip saves sound designers hours of tedious work by automating the conversion process, allowing them to focus on creativity rather than data entry.",
    technologies: [
      {
        title: "Python",
        description:
          "The versatile language that powers Sheet Snip's data processing.",
        svgName: "python",
        color: "#3776AB",
      },
      {
        title: "XLSX",
        description:
          "The format that makes handling spreadsheet data a breeze.",
        svgName: "xlsx",
        color: "#207245",
      },
    ],
    linkCards: [
      <LinkCard
        title={"CONTACT"}
        description={`Get in touch to learn more about Sheet Snip.`}
        svgName="email"
        color="#0078D4"
        url={"mailto:sam@thesamgordon.com"}
        interactText={"CONTACT"}
        key={"contact-card"}
      />,
    ],
    index: 2,
  },
];

export default function ProjectSection({
  marginTop,
}: {
  marginTop: MotionValue<number>;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [[activeIndex], setPageState] = useState([0, 0]);
  const [direction, setDirection] = useState(0);
  const [scrollValue, setScrollValue] = useState<number>(0);
  const [relativeY, setRelativeY] = useState<number>(0);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const interval = 1 / PROJECTS_DATA.length;

  useEffect(() => {
    return scrollYProgress.on("change", (latest) => {
      let nextIndex = 0;

      setRelativeY(latest);

      if (latest >= interval * 0 && latest < interval * 1) nextIndex = 0;
      else if (latest >= interval * 1 && latest < interval * 2) nextIndex = 1;
      else if (latest >= interval * 2) nextIndex = 2;

      if (nextIndex !== activeIndex) {
        setPageState([nextIndex, nextIndex > activeIndex ? 1 : -1]);
      }
    });
  }, [scrollYProgress, activeIndex, relativeY]);

  useEffect(() => {
    window.addEventListener("scroll", (event) => {
      if (event.defaultPrevented) {
        return;
      }

      if (window.scrollY > scrollValue) {
        setDirection(1);
      } else {
        setDirection(-1);
      }

      setScrollValue(window.scrollY);
    });
  });

  const project = PROJECTS_DATA[activeIndex];

  return (
    <motion.section
      ref={containerRef}
      className={styles.section}
      style={{ marginTop }}
    >
      <div className={styles.stickyWrapper}>
        <AnimatePresence mode="popLayout" custom={direction} initial={false}>
          <motion.div
            key={project.id}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.8, ease: [0.813, 0, 0.182, 0.994] }}
            className={styles.projectContainer}
          >
            <Project
              technologies={project.technologies}
              linkCards={project.linkCards as [ReactNode]}
              name={project.name}
              description={project.description}
              index={project.index}
              scrollDirection={direction}
            />
          </motion.div>
        </AnimatePresence>
        <Progress
          progress={((relativeY - activeIndex * interval) / interval) * 100}
          activeSection={activeIndex}
          totalSections={PROJECTS_DATA.length}
        />
      </div>
    </motion.section>
  );
}
