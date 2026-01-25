"use client";

import React, { useEffect, useState } from "react";
import Button from "@/components/Button";
import useWindowDimensions from "@/app/hooks/useWindowDimensions";
import { motion } from "motion/react";
import styles from "./HeroSection.module.scss";

export default function HeroSection() {
  const { width } = useWindowDimensions();
  const [hydrated, setHydrated] = useState(false);

  const titleFontSize =
    width > 1450
      ? "12rem"
      : width > 1050
      ? "8rem"
      : width > 875
      ? "8rem"
      : "3.5rem";

  const footerFontSize =
    width > 1450 ? "8rem" : width > 1050 ? "5rem" : "2.5rem";

  const subtitleStyle = {
    fontSize:
      width > 1450
        ? "2rem"
        : width > 1050
        ? "1.5rem"
        : width > 875
        ? "1.4rem"
        : ".8rem",
    width:
      width > 1450
        ? "55rem"
        : width > 1050
        ? "40rem"
        : width > 875
        ? "35rem"
        : "100%",
    color: "white",
    margin: 0,
    lineHeight: 1.1,
    fontWeight: 700,
    marginTop: width > 1300 ? "1.1rem" : width > 1050 ? "1.1rem" : ".5rem",
  };

  const descriptionStyle = {
    fontSize:
      width > 1450
        ? "2rem"
        : width > 1050
        ? "1.5rem"
        : width > 875
        ? "1.4rem"
        : "1rem",
    width:
      width > 1450
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
    marginBottom: width > 1450 ? "1.5rem" : width > 1050 ? "1.5rem" : ".8rem",
  };

  useEffect(() => {
    setHydrated(true);
  }, []);

  if (!hydrated) return null;

  return (
    <motion.section
      initial={{
        filter: "blur(5px)",
        transform: "translateY(40px)",
        opacity: 0,
      }}
      animate={{
        filter: "blur(0px)",
        transform: "translateY(0px)",
        opacity: 1,
      }}
      transition={{
        duration: 0.7,
        delay: 0.3,
        ease: [0.75, 0, 0.25, 1],
      }}
    >
      <div
        className={styles.sectionContainer}
        style={{
          height: `calc(100dvh - ${
            width > 1450 ? "14rem" : width > 1050 ? "10rem" : "6rem"
          })`,
          margin: width > 1450 ? "7rem" : width > 1050 ? "5rem" : "3rem",
          gap: width > 1450 ? "5rem" : width > 1050 ? "5rem" : "4rem",
        }}
      >
        <div
          className={styles.mainRow}
          style={{
            gap: width > 1450 ? "5rem" : width > 1050 ? "5rem" : "1rem",
          }}
        >
          <div
            className={styles.textStack}
            style={{
              gap: width > 1450 ? "10px" : width > 1050 ? ".5rem" : ".25rem",
            }}
          >
            <h1
              className={styles.title}
              style={{
                fontSize: titleFontSize,
                whiteSpace: width > 1050 ? "nowrap" : "break-spaces",
              }}
            >
              Sam Gordon
            </h1>
            <div>
              <p style={subtitleStyle}>Programming in the spotlight.</p>
              <p style={descriptionStyle}>
                As a theater enthusiast and a passionate developer, I work to
                create technology that enhances the performing arts and everyday
                life.
              </p>
            </div>

            <div
              className={styles.buttonRow}
              style={{
                gap: width > 1450 ? "3rem" : width > 1050 ? "2rem" : "1.5rem",
              }}
            >
              <Button title="Contact" url="mailto:sam@thesamgordon.com" />
              <Button
                title="GitHub"
                url="https://github.com/thesamgordon"
                dropComponent={
                  <motion.div
                    className={styles.githubDrop}
                    whileHover={{ transform: "translateY(-1px)" }}
                    whileTap={{ transform: "translateY(0px)" }}
                  >
                    <svg
                      width="16px"
                      height="16px"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g id="Interface / External_Link">
                        <path
                          id="Vector"
                          d="M10.0002 5H8.2002C7.08009 5 6.51962 5 6.0918 5.21799C5.71547 5.40973 5.40973 5.71547 5.21799 6.0918C5 6.51962 5 7.08009 5 8.2002V15.8002C5 16.9203 5 17.4801 5.21799 17.9079C5.40973 18.2842 5.71547 18.5905 6.0918 18.7822C6.5192 19 7.07899 19 8.19691 19H15.8031C16.921 19 17.48 19 17.9074 18.7822C18.2837 18.5905 18.5905 18.2839 18.7822 17.9076C19 17.4802 19 16.921 19 15.8031V14M20 9V4M20 4H15M20 4L13 11"
                          stroke="white"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </g>
                    </svg>
                    <motion.a
                      href="https://github.com/thesamgordon/portfolio"
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.githubLink}
                      style={{
                        fontSize: width > 1000 ? 14 : 8,
                      }}
                    >
                      View this website on GitHub
                    </motion.a>
                  </motion.div>
                }
              />
            </div>
          </div>

          <div className={styles.topRightBorder} />
        </div>

        <div
          className={styles.footerWrapper}
          style={{
            gap: width > 1450 ? "4rem" : width > 1050 ? "3rem" : "2rem",
          }}
        >
          <div
            className={styles.footerRow}
            style={{
              gap: width > 1450 ? "7rem" : width > 1050 ? "5rem" : "1rem",
            }}
          >
            <div className={styles.bottomLeftBorder} />
            <div
              className={styles.footerTextStack}
              style={{
                gap: width > 1450 ? "3rem" : width > 1050 ? "1.5rem" : "1rem",
              }}
            >
              <h1
                className={styles.footerTitle}
                style={{ fontSize: footerFontSize }}
              >
                developer
              </h1>
              <h1
                className={styles.footerTitle}
                style={{ fontSize: footerFontSize }}
              >
                theater technician
              </h1>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}