import Image from "next/image";
import styles from "./LinkCard.module.scss";

interface LinkCardProps {
  title: string;
  description: string;
  svgName: string;
  color: string;
  url: string;
  interactText: string;
}

export default function LinkCard({
  title,
  description,
  svgName,
  color,
  url,
  interactText
}: LinkCardProps) {
  return (
    <div
      className={styles.linkCardContainer}
      style={{ backgroundColor: color }}
      onClick={() => window.open(url, "_blank")}
    >
      <h1 className={styles.linkCardTitle}>{title}</h1>
      <p className={styles.linkCardDescription}>{description}</p>
      <div className={styles.linkCardImage}>
        <Image
          src={`/svg/${svgName}.svg`}
          alt="Link Icon"
          className={styles.linkCardSvg}
          width={0}
          height={0}
        />
      </div>
      <div className={styles.linkButtonContainer}>
        <h1 className={styles.linkButtonText}>{interactText}</h1>
        <Image src={`/svg/link.svg`} alt="Arrow Icon" width={18} height={18} />
      </div>
    </div>
  );
}
