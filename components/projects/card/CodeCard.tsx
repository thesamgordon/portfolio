import Image from "next/image";
import styles from "./CodeCard.module.scss";

interface CodeCardProps {
  title: string;
  description: string;
  svgName: string;
  color: string;
}

export default function CodeCard({ title, description, svgName, color }: CodeCardProps) {
  return (
    <div className={styles.codeCardContainer} style={{ backgroundColor: color }}>
      <h1 className={styles.codeCardTitle}>{title}</h1>
      <p className={styles.codeCardDescription}>{description}</p>
      <div className={styles.codeCardImage}>
        <Image src={`/svg/${svgName}.svg`} alt="Code Icon" width={150} height={150} />
      </div>
    </div>
  );
}
