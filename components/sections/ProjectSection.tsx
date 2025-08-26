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
import QLabImage from "@/lib/images/qlab.png"

export default function ProjectSection() {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollY } = useScroll({
    target: ref,
    offset: ["start end", "start start"],
  });

  const gap = useTransform(scrollY, [0, 800], [-8, 0], {
    ease: cubicBezier(0.4, 0.0, 0.15, 1),
  });

  const offsetRight = useTransform(scrollY, [0, 1200], [0, 80], {
    ease: cubicBezier(0.4, 0.0, 0.15, 1),
    clamp: false
  });
  const offsetLeft = useTransform(scrollY, [0, 1200], [0, -50], {
    ease: cubicBezier(0.4, 0.0, 0.15, 1),
    clamp: false
  });
  const offsetLeftSmall = useTransform(scrollY, [0, 1200], [0, 40], {
    ease: cubicBezier(0.4, 0.0, 0.15, 1),
    clamp: false
  });

  const gapTemplate: MotionValue<string> = useMotionTemplate`${gap}rem`;
  const offsetRightTemplate: MotionValue<string> = useMotionTemplate`translateX(${offsetRight}px)`;
  const offsetLeftTemplate: MotionValue<string> = useMotionTemplate`translateX(${offsetLeft}px)`;
  const offsetLeftSmallTemplate: MotionValue<string> = useMotionTemplate`translateX(${offsetLeftSmall}px)`;

  return (
    <section
      style={{
        height: "100vh",
        backgroundColor: "white",
        zIndex: 0,
        position: "relative",
        padding: "4rem",
        paddingTop: "12rem",
      }}
      ref={ref}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          gap: "1rem",
        }}
      >
        <div
          style={{
            width: "50%",
          }}
        >
          <h1
            style={{
              fontSize: "3rem",
              fontWeight: 900,
              lineHeight: .9,
              marginBottom: "10px"
            }}
          >
            Writing code to make your life easier.
          </h1>
          <p
            style={{
              fontSize: "1.5rem",
              fontWeight: 400,
            }}
          >
            Tedious tasks are a thing of the past. I create tools that help you
            automate your workflow and improve your productivity, whether it be
            you're building an app or writing cues in a theater.
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
            }}
          >
            <motion.div
              style={{
                marginBottom: gapTemplate,
                transform: offsetRightTemplate
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
                transform: offsetLeftTemplate
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
                link="https://github.com/Loudbooks/ReportBook"
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
