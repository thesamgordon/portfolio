"use client";

import { useEffect, useState } from "react";
import Button from "@/components/Button";
import { motion } from "motion/react";
import styles from "./HeroSection.module.scss";

export default function HeroSection() {
  const [hydrated, setHydrated] = useState(false);

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
      <div className={styles.sectionContainer}>
        <div className={styles.mainRow}>
          <div className={styles.textStack}>
            <h1 className={styles.title}>
              Sam Gordon
            </h1>
            <div>
              <p className={styles.subtitle}>Programming in the spotlight.</p>
              <p className={styles.description}>
                As a theater enthusiast and a passionate developer, I work to
                create technology that enhances the performing arts and everyday
                life.
              </p>
            </div>

            <div className={styles.buttonRow}>
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

        <div className={styles.footerWrapper}>
          <div className={styles.footerRow}>
            <div className={styles.bottomLeftBorder} />
            <div className={styles.footerTextStack}>
              <h1 className={styles.footerTitle}>
                developer
              </h1>
              <h1 className={styles.footerTitle}>
                theater technician
              </h1>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}