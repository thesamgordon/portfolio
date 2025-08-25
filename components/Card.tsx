import { motion, AnimatePresence } from "motion/react";
import Image, { StaticImageData } from "next/image";
import { useState } from "react";
import { createPortal } from "react-dom";

export default function Card({
  title,
  description,
  lastUpdated,
  rotation,
  zIndex,
  image,
}: {
  title: string;
  description: string;
  lastUpdated: string;
  rotation: number;
  zIndex: number;
  image: StaticImageData;
}) {
  const [open, setOpen] = useState(false);

  const handleToggle = () => {
    setOpen(!open);
  };

  const expanded = (
    <AnimatePresence initial={false}>
      {open && (
        <>
          <motion.div
            key="backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.5 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              width: "100vw",
              height: "100vh",
              background: "black",
              zIndex: zIndex,
            }}
            onClick={handleToggle}
          />

          <motion.div
            key="expanded"
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              width: "100vw",
              height: "100vh",
              borderRadius: "30px",
              zIndex: zIndex + 1,
              padding: "2rem",
              overflow: "auto",
              display: "flex",
              flexDirection: "column",
              gap: "1rem",
              alignItems: "center",
              justifyContent: "center",
            }}
            onClick={handleToggle}
          >
            <motion.div
              layoutId={`card-image-${zIndex}`}
              initial={{ opacity: 0, scale: 0.95, transform: "translateY(-200px)" }}
              animate={{ opacity: 1, scale: 1, transform: "translateY(0)" }}
              exit={{ opacity: 0, scale: 0.95, transform: "translateY(-200px)" }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              style={{
                width: 700,
                borderRadius: "30px",
                overflow: "hidden",
              }}
            >
              <Image
                src={image}
                alt={title}
                width={700}
                height={400}
                style={{ borderRadius: "30px" }}
              />
            </motion.div>

            <motion.div
              style={{
                backgroundColor: "white",
                borderRadius: "30px",
                padding: "1.7rem",
                overflow: "auto",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                width: "700px",
                height: "auto",
                border: "3px solid #eee",
              }}
              layoutId={`card-container-${zIndex}`}
            >
              <motion.h2
                layoutId={`card-title-${zIndex}`}
                style={{
                  fontSize: "1.5rem",
                  fontWeight: 900,
                  marginTop: -10,
                }}
                layout="position"
              >
                {title}
              </motion.h2>
              <motion.h2
                layoutId={`card-subtitle-${zIndex}`}
                style={{
                  fontSize: "1rem",
                  width: "200px",
                  fontWeight: 600,
                  color: "#676767ff",
                  margin: "0.5rem 0",
                  marginTop: -5,
                }}
              >
                Updated {lastUpdated}
              </motion.h2>
              <motion.p
                layoutId={`card-description-${zIndex}`}
                layout="position"
                style={{ fontSize: "1rem", fontWeight: 400 }}
              >
                {description}
              </motion.p>
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );

  return (
    <>
      {!open ? (
        <motion.div
          layoutId={`card-container-${zIndex}`}
          style={{
            border: "3px solid #eee",
            width: "500px",
            borderRadius: "30px",
            overflow: "hidden",
            transform: `rotate(${rotation}deg)`,
            zIndex,
            position: "relative",
            backgroundColor: "white",
            cursor: "pointer",
          }}
          onClick={handleToggle}
        >
          <div style={{ padding: "2rem", paddingTop: "1rem" }}>
            <motion.h2
              layoutId={`card-title-${zIndex}`}
              style={{
                fontSize: "1.5rem",
                fontWeight: 900,
                display: "inline-block",
              }}
              layout="position"
            >
              {title}
            </motion.h2>
            <motion.h2
              layoutId={`card-subtitle-${zIndex}`}
              layout="position"
              style={{
                fontSize: "1rem",
                fontWeight: 600,
                margin: "0.5rem 0",
                marginTop: -5,
                display: "block",
                width: "200px",
                color: "#676767ff",
              }}
            >
              Updated {lastUpdated}
            </motion.h2>
            <motion.p
              layoutId={`card-description-${zIndex}`}
              layout="position"
              style={{
                fontSize: "1rem",
                fontWeight: 400,
                marginBottom: "-10px",
              }}
            >
              {description}
            </motion.p>
          </div>
        </motion.div>
      ) : (
        <div
          style={{
            width: "500px",
            height: "130px",
            marginBottom: "1rem",
            visibility: "hidden",
          }}
        />
      )}

      {createPortal(expanded, window.document.body)}
    </>
  );
}
