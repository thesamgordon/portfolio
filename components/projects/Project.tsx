import CodeCard from "./card/CodeCard";
import LinkCard from "./card/LinkCard";
import Filler from "./Filler";
import styles from "./Project.module.scss";

export default function Project() {
  const NAME = "LEDGER";
  const DESCRIPTION =
    "A storage server with a singular focus: reducing the friction between data and the user. Most modern storage solutions are bogged down by unnecessary features and heavy UI. This project proves that you don't have to sacrifice speed for simplicity.";
  const repeatedName = Array(5).fill(NAME).join(" • ");

  return (
    <div className={styles.projectContainer}>
      <div className={styles.titleContainer}>
        <h1 className={styles.projectTitle}>{repeatedName}</h1>
      </div>
      <div className={styles.topBottomContainer}>
        <div className={styles.topContainer}>
          <div className={styles.leftBox}>
            <h1 className={styles.leftBoxTitle}>DESCRIPTION</h1>
            <div className={styles.leftBoxDescription}>{DESCRIPTION}</div>
          </div>
          <div className={styles.rightBox}>
            <CodeCard
              title={"RUST"}
              description={
                "Performance, safety, and convenience in one, beautiful package. The gold standard of programming languages."
              }
              svgName="rust"
              color="#B7410E"
            />
            <CodeCard
              title={"NEXT.JS"}
              description={
                "My go-to for building the modern web. It’s where raw performance meets a refined user experience."
              }
              svgName="nextjs"
              color="#0070F3"
            />
          </div>
        </div>
        <div className={styles.bottom}>
          <LinkCard
            title={"GITHUB"}
            description={
              "Browse the code that makes Ledger magical."
            }
            svgName="github"
            color="#111512"
            url="https://github.com"
          />
          <Filler count={3} />
        </div>
      </div>
    </div>
  );
}
