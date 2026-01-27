import styles from "./Progress.module.scss";

interface ProgressProps {
  progress: number;
  activeSection: number;
  totalSections: number;
}

export default function Progress({
  progress,
  activeSection,
  totalSections,
}: ProgressProps) {
  return (
    <div className={styles.progressContainer}>
      <div className={styles.sectionsContainer}>
        {Array.from({ length: totalSections }).map((_, index) => (
          <div
            key={index}
            className={
              styles.sectionDot +
              (index === activeSection ? ` ${styles.active}` : "")
            }
          >
            <div
              className={styles.progressBar + (index === activeSection ? ` ${styles.parentActive}` : "")}
              style={{ width: index === activeSection ? `${progress}%` : index < activeSection ? '100%' : '0%' }}
            ></div>
          </div>
        ))}
      </div>
    </div>
  );
}
