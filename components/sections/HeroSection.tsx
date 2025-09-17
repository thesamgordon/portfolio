"use client";

import React, { useEffect, useMemo, useState } from "react";
import Button from "@/components/Button";
import useWindowDimensions from "@/app/hooks/useWindowDimensions";
import { motion } from "motion/react";
import openLink from "@/lib/images/open-tab.svg";
import Image from "next/image";

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
      : "3.5rem";

  const footerFontSize =
    width > 1300 ? "8rem" : width > 1050 ? "5rem" : "2.5rem";

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
    color: "white",
    margin: 0,
    lineHeight: 1.1,
    fontWeight: 700,
    marginTop: width > 1300 ? "1.1rem" : width > 1050 ? "1.1rem" : ".5rem",
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
    marginBottom: width > 1300 ? "1.5rem" : width > 1050 ? "1.5rem" : ".8rem",
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
            gap: width > 1300 ? "5rem" : width > 1050 ? "5rem" : "1rem",
            width: "100%",
            height: "100%",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: width > 1300 ? "10px" : width > 1050 ? ".5rem" : ".25rem",
            }}
          >
            <h1
              style={{
                fontSize: titleFontSize,
                fontWeight: 1000,
                color: "white",
                margin: 0,
                lineHeight: 0.7,
                letterSpacing: "-0.1rem",
                whiteSpace: width > 1300 ? "nowrap" : "break-spaces",
              }}
            >
              Sam Gordon
            </h1>
            <div>
              <p style={subtitleStyle}>Programming in the spotlight.</p>
              <p style={descriptionStyle}>
                An avid theater enthusiast and a passionate developer. I work to
                create technology that enhances both the performing arts and
                programs alike.
              </p>
            </div>

            <div
              style={{
                display: "flex",
                flexDirection: "row",
                gap: width > 1300 ? "3rem" : width > 1050 ? "2rem" : "1.5rem",
                width: "max-content",
              }}
            >
              <Button title="Contact" url="mailto:sam@thesamgordon.com" />
              <Button
                title="GitHub"
                url="https://github.com/Loudbooks"
                dropComponent={
                  <motion.div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "0.5rem",
                      width: "100%",
                      justifyContent: "center",
                    }}
                    whileTap={{ transform: "translateY(2px)" }}
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
                      href="https://github.com/Loudbooks/portfolio"
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        fontSize: width > 1000 ? 14 : 8,
                        color: "white",
                        margin: 0,
                        textDecoration: "underline",
                        fontWeight: "400",
                      }}
                    >
                      View this website on GitHub
                    </motion.a>
                  </motion.div>
                }
              />
            </div>
          </div>

          <div
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
              gap: width > 1300 ? "7rem" : width > 1050 ? "5rem" : "1rem",
              alignItems: "end",
              width: "100%",
              height: "100%",
            }}
          >
            <div
              style={{
                width: "100%",
                height: "100%",
                borderBottom: "5px solid white",
                borderLeft: "5px solid white",
              }}
            />
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: width > 1300 ? "3rem" : width > 1050 ? "1.5rem" : "1rem",
              }}
            >
              <h1
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
                developer
              </h1>
              <h1
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
                theater technician
              </h1>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
