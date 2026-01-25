import {
  motion,
  useScroll,
} from "motion/react";
import Card from "../Card";
import { useRef } from "react";
import QLabImage from "@/lib/images/qlab.png";
import useWindowDimensions from "@/app/hooks/useWindowDimensions";
import Project from "../projects/Project";

export default function ProjectSection() {
  const ref = useRef<HTMLDivElement>(null);
  const { width } = useWindowDimensions();

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
        paddingLeft: width > 1000 ? "6rem" : "1rem",
        paddingRight: width > 1000 ? "6rem" : "1rem",
        paddingTop: "12rem",
        paddingBottom: width > 1450 ? "20rem" : "8rem",
      }}
      ref={ref}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          maxWidth: 1200,
        }}
      >
        <Project />
      </div>
    </section>
  );
}
