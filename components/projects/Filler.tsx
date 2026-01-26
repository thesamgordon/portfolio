import styles from "./Filler.module.scss"

interface FillerProps {
  count: number;
}

export default function Filler({ count }: FillerProps) {
  const fillers = Array(count).fill(0);

  return (
    <div className={styles.fillerContainer}>
      {fillers.map((_, index) => (
        <div key={index} className={styles.fillerBox} />
      ))}
    </div>
  );
}