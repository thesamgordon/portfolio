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

  const gap = useTransform(scrollY, [0, 800], [-5, 0], {
    ease: cubicBezier(0.9, 0, 0.42, 1),
  });

  const offsetRight = useTransform(scrollY, [0, 1200], [0, 80], {
    ease: cubicBezier(0.4, 0.0, 0.15, 1),
    clamp: false,
  });
  const offsetLeft = useTransform(scrollY, [0, 1200], [0, -50], {
    ease: cubicBezier(0.4, 0.0, 0.15, 1),
    clamp: false,
  });
  const offsetLeftSmall = useTransform(scrollY, [0, 1200], [0, 40], {
    ease: cubicBezier(0.4, 0.0, 0.15, 1),
    clamp: false,
  });

  const gapTemplate: MotionValue<string> = useMotionTemplate`${gap}rem`;
  const offsetRightTemplate: MotionValue<string> = useMotionTemplate`translateX(${offsetRight}px)`;
  const offsetLeftTemplate: MotionValue<string> = useMotionTemplate`translateX(${offsetLeft}px)`;
  const offsetLeftSmallTemplate: MotionValue<string> = useMotionTemplate`translateX(${offsetLeftSmall}px)`;

  return (
    <section
      style={{
        height: "100%",
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
      <div
        style={{
          display: "flex",
          flexDirection: width > 1000 ? "row" : "column",
          justifyContent: "space-between",
          alignItems: "center",
          gap: width > 1000 ? "5  rem" : "1rem",
        }}
      >
        <div
          style={{
            width: width > 1300 ? "50%" : "100%",
          }}
        >
          <h1
            style={{
              fontSize: width > 1000 ? "3.5rem" : "2.5rem",
              fontWeight: 900,
              lineHeight: 0.9,
              marginBottom: "10px",
              color: "#303030ff",
            }}
          >
            Writing code to make your life easier.
          </h1>
          <p
            style={{
              fontSize: width > 1000 ? "1.5rem" : "1.25rem",
              fontWeight: 400,
              color: "#444444ff",
            }}
          >
            Tedious tasks are a thing of the past. I create tools that help you
            automate your workflow and improve your productivity, whether
            you&apos;re building an app or writing cues in a theater.
          </p>
        </div>

        <div
          style={{
            justifySelf: "center",
            alignSelf: "center",
            width: "50%",
          }}
        >
          <motion.div
            style={{
              display: "flex",
              flexDirection: "column",
              width: "100%",
              alignItems: "center",
              justifyContent: "center",
              paddingBottom: width > 1300 ? "0" : "2rem",
              paddingTop: width > 1300 ? "0" : "2rem",
            }}
          >
            <motion.div
              style={{
                marginBottom: gapTemplate,
                transform: offsetRightTemplate,
              }}
            >
              <Card
                title="Sheet Snip"
                description="Convert your microphone mute sheets into QLab MIDI cues with the click of a button."
                lastUpdated="Python"
                rotation={-3}
                zIndex={0}
                image={QLabImage}
                contact={true}
              />
            </motion.div>
            <motion.div
              style={{
                marginBottom: gapTemplate,
                transform: offsetLeftTemplate,
              }}
            >
              <Card
                title="PasteBook"
                description="Drop your text into a quick pastebin for easy sharing with many customizable options."
                lastUpdated="Rust/Svelte"
                rotation={3}
                zIndex={1}
                image={QLabImage}
                link="https://pastebook.dev/about"
              />
            </motion.div>
            <motion.div
              style={{
                marginBottom: gapTemplate,
                transform: offsetLeftSmallTemplate,
              }}
            >
              <Card
                title="ReportBook"
                description="Generate a diagnostic report of your device to assist with troubleshooting."
                lastUpdated="Rust/Tauri"
                rotation={-1}
                zIndex={2}
                image={QLabImage}
                link="https://github.com/thesamgordon/ReportBook"
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
