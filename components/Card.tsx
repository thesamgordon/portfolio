import Image, { StaticImageData } from "next/image";
import { motion } from "motion/react";
import useWindowDimensions from "@/app/hooks/useWindowDimensions";

export default function Card({
  title,
  description,
  languages,
  image,
  link,
  contact = false,
}: {
  title: string;
  description: string;
  languages: string[];
  image: StaticImageData;
  link?: string;
  contact?: boolean;
}) {
  const { width } = useWindowDimensions();

  return (
    <div
      style={{
        border: "1px solid #DDDDDD",
        width: width > 1000 ? 500 : "100%",
        borderRadius: width > 1000 ? "1rem" : ".75rem",
        overflow: "hidden",
        position: "relative",
        backgroundColor: "#FBFBFB",
        padding: width > 1000 ? "1.5rem" : "1rem",
        display: "flex",
        flexDirection: "column",
        gap: ".8rem",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <h1
          style={{
            fontSize: width > 1000 ? "1.6rem" : "1.4rem",
            fontWeight: 700,
            margin: 0,
            color: "#2D2D2D",
            lineHeight: 0.8,
          }}
        >
          {title}
        </h1>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            gap: ".8rem",
            flexWrap: "wrap",
          }}
        >
          {languages.map((lang, index) => (
            <div
              key={index}
              style={{
                padding: width > 1000 ? "0.25rem 0.5rem" : "0.2rem 0.4rem",
                borderRadius: "0.35rem",
                backgroundColor: "#F1F1F1",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: "60px",
                height: width > 1000 ? "22px" : "20px",
              }}
            >
              <span
                style={{
                  fontSize: width > 1000 ? ".7rem" : "0.6rem",
                  fontWeight: 600,
                  color: "#585858",
                  lineHeight: 1,
                }}
              >
                {lang}
              </span>
            </div>
          ))}
        </div>
      </div>
      <p
        style={{
          fontSize: width > 1000 ? "1rem" : "0.875rem",
          fontWeight: 400,
          margin: 0,
          color: "#585858",
          lineHeight: 1.2,
        }}
      >
        {description}
      </p>
      {contact && (
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "0.5rem",
          }}
        >
          <svg
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 18.9844 13.3496"
            height={16}
            width={16.2}
          >
            <g>
              <rect height="13.3496" opacity="0" width="18.9844" x="0" y="0" />
              <path
                d="M2.49023 13.3496L16.4062 13.3496C17.793 13.3496 18.623 12.5391 18.623 10.8984L18.623 2.46094C18.623 0.820312 17.7832 0.00976562 16.1328 0.00976562L2.2168 0.00976562C0.820312 0.00976562 0 0.820312 0 2.46094L0 10.8984C0 12.5391 0.830078 13.3496 2.49023 13.3496ZM2.43164 12.0215C1.73828 12.0215 1.33789 11.6406 1.33789 10.8984L1.33789 2.45117C1.33789 1.71875 1.73828 1.33789 2.43164 1.33789L16.1816 1.33789C16.8848 1.33789 17.2852 1.71875 17.2852 2.46094L17.2852 10.9082C17.2852 11.6406 16.8848 12.0215 16.1816 12.0215ZM9.30664 8.76953C9.82422 8.76953 10.3223 8.58398 10.7617 8.17383L17.9492 1.69922L17.0508 0.800781L10.0195 7.12891C9.80469 7.33398 9.56055 7.43164 9.30664 7.43164C9.0625 7.43164 8.81836 7.33398 8.60352 7.12891L1.57227 0.800781L0.673828 1.69922L7.85156 8.17383C8.30078 8.58398 8.79883 8.76953 9.30664 8.76953ZM1.67969 12.2852L7.04102 6.93359L6.13281 6.02539L0.78125 11.3867ZM16.9434 12.2949L17.8516 11.3965L12.4805 6.02539L11.582 6.93359Z"
                fill="#585858"
                fillOpacity="0.85"
              />
            </g>
          </svg>
          <motion.a
            href={"mailto:contact@thesamgordon.com"}
            style={{
              fontSize: width > 1000 ? "1rem" : "0.875rem",
              fontWeight: 400,
              textDecoration: "underline",
              lineHeight: "1rem",
              transform: "translateY(-1.5px)",
              color: "#585858",
            }}
            whileHover={{
              marginLeft: "4px",
            }}
            whileTap={{
              marginLeft: "2px",
            }}
          >
            Contact for more information
          </motion.a>
        </div>
      )}
      {link && (
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "0.5rem",
          }}
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
                stroke="#585858"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </g>
          </svg>
          <motion.a
            href={link}
            target="_blank"
            style={{
              fontSize: width > 1000 ? "1rem" : "0.875rem",
              fontWeight: 400,
              textDecoration: "underline",
              lineHeight: "1rem",
              transform: "translateY(-1.5px)",
              color: "#585858",
            }}
            whileHover={{
              marginLeft: "4px",
            }}
            whileTap={{
              marginLeft: "2px",
            }}
          >
            Learn more
          </motion.a>
        </div>
      )}
    </div>
  );
}
