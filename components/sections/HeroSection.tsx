"use client";

import React, { useEffect, useMemo, useState } from "react";
import { Easing, motion } from "motion/react";
import Button from "@/components/Button";
import useWindowDimensions from "@/app/hooks/useWindowDimensions";

const ease: Easing = [1, 0, 0.5, 1];

const AnimatedLetter = ({
  letter,
  delay,
}: {
  letter: string;
  delay: number;
}) => (
  <motion.span
    initial={{ y: 20, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    transition={{ delay, duration: 1, ease }}
    style={{
      display: "inline-block",
      color: "white",
      whiteSpace: "pre",
      transform: "translate3d(0,0,0)",
    }}
  >
    {letter}
  </motion.span>
);

const AnimatedWord = ({
  word,
  baseDelay,
}: {
  word: string[];
  baseDelay: number;
}) => (
  <span
    style={{
      display: "inline-block",
      marginRight: "0.2rem",
      transform: "translate3d(0,0,0)",
    }}
  >
    {word.map((letter, j) => (
      <AnimatedLetter
        key={j}
        letter={letter}
        delay={(baseDelay + j * 0.1) * 0.05}
      />
    ))}
    <AnimatedLetter letter=" " delay={(baseDelay + word.length * 0.1) * 0.05} />
  </span>
);

const AnimatedButtonRow = ({
  links,
  width,
}: {
  links: Record<string, string>;
  width: number;
}) => (
  <div
    style={{
      display: "flex",
      flexDirection: "row",
      gap: width > 1300 ? "3rem" : width > 1050 ? "2rem" : "1.5rem",
      width: "max-content",
    }}
  >
    {Object.entries(links).map(([url, title], index) => (
      <motion.div
        key={url}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: index * 0.2 + 1.2, duration: 1, ease }}
      >
        <Button title={title} url={url} />
      </motion.div>
    ))}
  </div>
);

export default function HeroSection() {
  const { width } = useWindowDimensions();
  const [hydrated, setHydrated] = useState(false);

  const titleFontSize =
    width > 1300
      ? "12rem"
      : width > 1050
      ? "10rem"
      : width > 875
      ? "8rem"
      : "4rem";

  const footerFontSize = width > 1300 ? "8rem" : width > 1050 ? "5rem" : "3rem";

  const subtitleStyle = {
    fontSize:
      width > 1300
        ? "2rem"
        : width > 1050
        ? "1.5rem"
        : width > 875
        ? "1.4rem"
        : ".8rem",
    width:
      width > 1300
        ? "55rem"
        : width > 1050
        ? "40rem"
        : width > 875
        ? "35rem"
        : "100%",
    color: "#0000",
    margin: 0,
    lineHeight: 1.1,
    fontWeight: 700,
    marginTop: width > 1300 ? "1rem" : width > 1050 ? "0rem" : "0",
    transform: "translate3d(0, 0, 0)",
  };

  const descriptionStyle = {
    fontSize:
      width > 1300
        ? "2rem"
        : width > 1050
        ? "1.5rem"
        : width > 875
        ? "1.4rem"
        : "1rem",
    width:
      width > 1300
        ? "55rem"
        : width > 1050
        ? "40rem"
        : width > 875
        ? "35rem"
        : "100%",
    color: "white",
    margin: 0,
    lineHeight: 1.1,
    fontWeight: 300,
    marginTop: "0rem",
    marginBottom: "1.5rem",
    transform: "translate3d(0, 0, 0)",
  };

  const title = "Sam Gordon".split("");
  const subtitle = useMemo(
    () => '"Programming in the spotlight."'.split(" ").map((w) => w.split("")),
    []
  );

  const description = useMemo(
    () =>
      "An avid theater enthusiast and a passionate developer. I work to create technology that enhances both the performing arts and the developer experience."
        .split(" ")
        .map((w) => w.split("")),
    []
  );

  const footerWords = ["developer", "theater technician"];
  const links: Record<string, string> = {
    "https://github.com/Loudbooks": "Resume",
    "mailto:contact@loudbook.dev": "Email",
  };

  useEffect(() => {
    setHydrated(true);
  }, []);

  if (!hydrated) return null;

  return (
    <section>
      <div
        style={{
          height: `calc(100dvh - ${
            width > 1300 ? "14rem" : width > 1050 ? "10rem" : "6rem"
          })`,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "space-between",
          margin: width > 1300 ? "7rem" : width > 1050 ? "5rem" : "3rem",
          gap: width > 1300 ? "5rem" : width > 1050 ? "5rem" : "4rem",
          position: "relative",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            gap: width > 1300 ? "5rem" : width > 1050 ? "5rem" : "3rem",
            width: "100%",
            height: "100%",
          }}
        >
          <motion.div
            style={{
              display: "flex",
              flexDirection: "column",
            }}
            initial={{
              gap: width > 1300 ? "30px" : width > 1050 ? "2rem" : "1rem",
            }}
            animate={{
              gap: width > 1300 ? "10px" : width > 1050 ? ".5rem" : ".25rem",
            }}
            transition={{ delay: 0.8, duration: 1, ease }}
          >
            <h1
              style={{
                fontSize: titleFontSize,
                fontWeight: 1000,
                color: "white",
                margin: 0,
                lineHeight: 0.7,
                letterSpacing: "-0.1rem",
                whiteSpace: "nowrap",
              }}
            >
              {title.map((letter, i) => (
                <AnimatedLetter key={i} letter={letter} delay={i * 0.05} />
              ))}
            </h1>
            <div>
              <p style={subtitleStyle}>
                {subtitle.map((word, i) => (
                  <AnimatedWord key={i} word={word} baseDelay={i} />
                ))}
              </p>
              <p style={descriptionStyle}>
                {description.map((word, i) => (
                  <AnimatedWord key={i} word={word} baseDelay={i} />
                ))}
              </p>
            </div>

            <AnimatedButtonRow links={links} width={width} />
          </motion.div>
          <motion.div
            initial={{
              opacity: 0,
              transform: "translateY(-40px) translateX(40px)",
            }}
            animate={{ opacity: 1, transform: "translateY(0) translateX(0)" }}
            transition={{ delay: 1.2, duration: 1, ease }}
            style={{
              width: "100%",
              height: "100%",
              borderTop: "5px solid white",
              borderRight: "5px solid white",
            }}
          />
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "end",
            gap: width > 1300 ? "4rem" : width > 1050 ? "3rem" : "2rem",
            width: "100%",
            height: "100%",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "end",
              gap: width > 1300 ? "7rem" : width > 1050 ? "5rem" : "3rem",
              alignItems: "end",
              width: "100%",
              height: "100%",
            }}
          >
            <motion.div
              initial={{
                opacity: 0,
                transform: "translateY(40px) translateX(-40px)",
              }}
              animate={{ opacity: 1, transform: "translateY(0) translateX(0)" }}
              transition={{ delay: 1.2, duration: 1, ease }}
              style={{
                width: "100%",
                height: "100%",
                borderBottom: "5px solid white",
                borderLeft: "5px solid white",
              }}
            />{" "}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: width > 1300 ? "3rem" : width > 1050 ? "1.5rem" : "1rem",
              }}
            >
              {footerWords.map((word, wIndex) => (
                <h1
                  key={wIndex}
                  style={{
                    fontSize: footerFontSize,
                    fontWeight: 100,
                    color: "white",
                    margin: 0,
                    lineHeight: 0.5,
                    textAlign: "right",
                    letterSpacing: "-0.1rem",
                    whiteSpace: "nowrap",
                  }}
                >
                  {word.split("").map((letter, i) => (
                    <AnimatedLetter
                      key={i}
                      letter={letter}
                      delay={i * 0.05 + 1.5}
                    />
                  ))}
                </h1>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
