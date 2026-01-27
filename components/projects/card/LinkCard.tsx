import Image from "next/image";
import styles from "./LinkCard.module.scss";
import { useState } from "react";

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
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={styles.linkCardContainer}
      style={{ backgroundColor: color }}
      onClick={() => window.open(url, "_blank")}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <h1 className={styles.linkCardTitle}>{title}</h1>
      <p className={styles.linkCardDescription}>{description}</p>
      <div className={styles.linkCardImage}>
        <Image
          src={`/svg/${svgName}.svg`}
          alt="Link Icon"
          className={styles.linkCardSvg}
          width={230}
          height={230}
        />
      </div>
      <div className={styles.linkButtonContainer}>
        <h1 className={styles.linkButtonText}>{interactText}</h1>
        <div className={styles.linkButtonIconWrapper}>
          <div className={styles.linkButtonIcon}>
            <Image 
              src={`/svg/link.svg`} 
              alt="Arrow Icon" 
              width={18} 
              height={18} 
            />
          </div>
        </div>
      </div>
    </div>
  );
}