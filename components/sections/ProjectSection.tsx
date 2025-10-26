import {
  cubicBezier,
  motion,
  MotionValue,
  useMotionTemplate,
  useScroll,
  useTransform,
} from "motion/react";
import Card from "../Card";
import { useRef } from "react";
import QLabImage from "@/lib/images/qlab.png";
import useWindowDimensions from "@/app/hooks/useWindowDimensions";

export default function ProjectSection() {
  const ref = useRef<HTMLDivElement>(null);
  const { width } = useWindowDimensions();

  const { scrollY } = useScroll({
    target: ref,
    offset: ["start end", "start start"],
  });

  const projects = [
    {
      title: "Sheet Snip",
      description:
        "Convert your microphone mute sheets into QLab MIDI cues with the click of a button.",
      languages: ["Python"],
      image: QLabImage,
      contact: true,
    },
    {
      title: "PasteBook",
      description:
        "Drop your text into a quick pastebin for easy sharing with many customizable options.",
      languages: ["Rust", "Svelte"],
      image: QLabImage,
      link: "https://pastebook.dev/about",
    },
    {
      title: "ReportBook",
      description:
        "Generate a diagnostic report of your device to assist with troubleshooting.",
      languages: ["Rust", "Tauri"],
      image: QLabImage,
      link: "https://github.com/thesamgordon/ReportBook",
    },
    {
      title: "Ledger",
      description:
        "Extremely fast upload and download system, reaching speeds upwards of 2–4× that of Google Drive.",
      languages: ["Rust"],
      image: QLabImage,
      link: "https://github.com/ldg-sh/ledger",
    },
    {
      title: "Portfolio",
      description:
        "The very website you're on right now, built with Next.js and TypeScript.",
      languages: ["Next.js", "React"],
      image: QLabImage,
      link: "https://github.com/thesamgordon/portfolio",
    },
  ];

  return (
    <section
      style={{
        height: "100%",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        backgroundColor: "white",
        zIndex: 0,
        position: "relative",
        paddingLeft: width > 1000 ? "6rem" : "2rem",
        paddingRight: width > 1000 ? "6rem" : "2rem",
        paddingTop: "12rem",
        paddingBottom: width > 1450 ? "20rem" : "8rem",
      }}
      ref={ref}
    >
      <div>
        <motion.h1
          style={{
            fontSize: width > 1450 ? "4rem" : width > 1050 ? "3rem" : "2rem",
            fontWeight: 800,
            margin: 0,
            lineHeight: 0.9,
            color: "#2D2D2D",
          }}
          viewport={{ once: true }}
          initial={{ opacity: 0, filter: "blur(20px)", y: 40 }}
          whileInView={{ opacity: 1, filter: "blur(0px)", y: 0 }}
          transition={{ duration: 0.7 }}
        >
          Projects
        </motion.h1>

        <motion.p
          style={{
            fontSize:
              width > 1450 ? "1.5rem" : width > 1050 ? "1.2rem" : "1rem",
            fontWeight: 400,
            marginBottom: "2rem",
            color: "#585858",
          }}
          viewport={{ once: true }}
          initial={{ opacity: 0, filter: "blur(20px)", y: 40 }}
          whileInView={{ opacity: 1, filter: "blur(0px)", y: 0 }}
          transition={{ duration: 0.7 }}
        >
          A few of my favorite projects that I've worked on recently.
        </motion.p>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          style={{
            display: "grid",
            gridTemplateColumns:
              width > 1000 ? "1fr 1fr" : width > 600 ? "1fr 1fr" : "1fr",
            gap: width > 1000 ? "1rem" : "0.5rem",
            marginBottom: "2rem",
            width: "max-content",
          }}
          transition={{
            staggerChildren: 0.15,
            delayChildren: 0.2,
          }}
        >
          {projects.map((proj, i) => (
            <motion.div
              key={proj.title}
              initial={{ opacity: 0, filter: "blur(20px)", y: 40 }}
              whileInView={{ opacity: 1, filter: "blur(0px)", y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.7,
                ease: [0.75, 0, 0.25, 1],
              }}
            >
              <Card {...proj} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
