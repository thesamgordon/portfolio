import {
  motion,
  MotionValue,
  useMotionTemplate,
  useScroll,
  useTransform,
} from "motion/react";
import CodeCard from "./card/CodeCard";
import LinkCard from "./card/LinkCard";
import Filler from "./Filler";
import styles from "./Project.module.scss";
import { useRef } from "react";

interface ProjectProps {
  name: string;
  description: string;
  technologies: {
    title: string;
    description: string;
    svgName: string;
    color: string;
  }[];
  githubUrl: string;
  scrollProgress?: MotionValue<number>;
}

export default function Project({
  name,
  description,
  technologies,
  githubUrl,
  scrollProgress,
}: ProjectProps) {
  const container = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"],
  });

  const repeatedName = Array(5).fill(name).join(" • ");

  const x = useTransform(scrollProgress ?? scrollYProgress, [0, 1], [0, -1000]);
  const transformTemplate = useMotionTemplate`translateX(${x}px)`;

  return (
    <motion.div className={styles.projectContainer} ref={container}>
      <motion.div className={styles.titleContainer}>
        <motion.h1
          className={styles.projectTitle}
          style={{ transform: transformTemplate }}
        >
          {repeatedName}
        </motion.h1>
      </motion.div>
      <div className={styles.topBottomContainer}>
        <div className={styles.topContainer}>
          <div className={styles.leftBox}>
            <h1 className={styles.leftBoxTitle}>DESCRIPTION</h1>
            <div className={styles.leftBoxDescription}>{description}</div>
          </div>
          <div className={styles.rightBox}>
            {technologies.map((tech) => (
              <CodeCard
                key={tech.title}
                title={tech.title}
                description={tech.description}
                svgName={tech.svgName}
                color={tech.color}
              />
            ))}
          </div>
        </div>
        <div className={styles.bottom}>
          <LinkCard
            title={"GITHUB"}
            description={"Browse the code that makes Ledger magical."}
            svgName="github"
            color="#111512"
            url={githubUrl}
          />
          <Filler count={3} />
        </div>
      </div>
    </motion.div>
  );
}
