import { useEffect, useMemo, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

// ✅ Images
import product1 from "../assets/sliders/product-1.png";
import product2 from "../assets/sliders/product-2.png";
import product3 from "../assets/sliders/product-3.png";
import product4 from "../assets/sliders/product-4.png";
import labHands from "../assets/sliders/lab-hands.png";
import team1 from "../assets/sliders/team-1.png";
import team2 from "../assets/sliders/team-2.png";

// ✅ Videos (replace with your actual files)
import v1 from "../assets/sliders/video-1.mp4";
import v2 from "../assets/sliders/video-2.mp4";
import v3 from "../assets/sliders/video-3.mp4";
import v4 from "../assets/sliders/video-4.mp4";
import v5 from "../assets/sliders/video-5.mp4";
import v6 from "../assets/sliders/video-6.mp4";

export default function InsideAdrinkoVerticalSliderSection() {
  const items = useMemo(
    () => [
      // -------------------- IMAGES (7)
      {
        type: "image",
        src: product1,
        thumb: product1,
        title: "Ammonium Chloride",
        subtitle: "99.5% NH₄Cl",
        description:
          "High-purity ammonium chloride produced for industrial and chemical applications under controlled quality standards.",
        tags: ["Industrial grade", "White crystalline powder", "High purity"],
      },
      {
        type: "image",
        src: product2,
        thumb: product2,
        title: "Caustic Soda Flakes",
        subtitle: "98.62% NaOH",
        description:
          "High-purity sodium hydroxide flakes manufactured in compliance with INSO 364 for demanding industrial applications.",
        tags: ["High purity", "INSO 364 compliant", "Industrial grade"],
      },
      {
        type: "image",
        src: product3,
        thumb: product3,
        title: "Jumbo Bag Packaging",
        subtitle: "Industrial storage & transport",
        description:
          "Flexible intermediate bulk containers (FIBC) utilized for industrial storage and transportation of chemical products",
        tags: ["Bulk transport"],
      },
      {
        type: "image",
        src: product4,
        thumb: product4,
        title: "FIBC Bulk Bags",
        subtitle: "PBulk material handling",
        description:
          "Jumbo polypropylene woven bags used for bulk handling and storage of industrial chemical materials.",
        tags: ["Bulk handling", "Industrial packaging"],
      },
      {
        type: "image",
        src: labHands,
        thumb: labHands,
        title: "Caustic Soda Flakes",
        subtitle: "99.0 ± 0.5% NaOH",
        description:
          "Industrial-grade sodium hydroxide flakes produced for chemical and industrial applications under controlled manufacturing standards.",
        tags: ["Industrial grade", "High purity (99.0 ± 0.5% NaOH)"],
      },
      {
        type: "image",
        src: team1,
        thumb: team1,
        title: "Sodium Sulfide Flakes",
        subtitle: "58–60% Na₂S",
        description:
          "Industrial-grade sodium sulfide flakes shown during routine quality and handling inspection prior to storage or shipment.",
        tags: ["Packaging", "Flake form", "Net weight: 25 kg"],
      },
      {
        type: "image",
        src: team2,
        thumb: team2,
        title: "Copper Sulfate Pentahydrate",
        subtitle: "24–25% Cu",
        description:
          "Industrial-grade copper sulfate pentahydrate produced under controlled manufacturing conditions for industrial applications..",
        tags: ["Industrial grade", "Pentahydrate (CuSO₄·5H₂O)", "Controlled copper purity (24–25% w/w)"],
      },

      // -------------------- VIDEOS (6)
      {
        type: "video",
        src: v1,
        thumb: product1,
        title: "Product Quality Check",
        subtitle: "Material inspection & verification",
        description:
          "Quality inspection conducted to assess material appearance, consistency, and overall condition prior to packaging or shipment.",
        tags: ["Sampling", "Visual quality check", "Industrial materials"],
      },
      {
        type: "video",
        src: v2,
        thumb: product2,
        title: "Product Quality Check",
        subtitle: "Material inspection & verification",
        description:
          "VQuality inspection conducted to assess material appearance, consistency, and overall condition prior to packaging or shipment.",
        tags: ["Sampling", "Visual quality check", "Industrial materials"],
      },
      {
        type: "video",
        src: v3,
        thumb: product3,
        title: "Product Quality Check",
        subtitle: "Material inspection & verification",
        description:
          "Quality inspection conducted to assess material appearance, consistency, and overall condition prior to packaging or shipment.",
        tags: ["Sampling", "Visual quality check", "Industrial materials"],
      },
      {
        type: "video",
        src: v4,
        thumb: product4,
        title: "Product Quality Check",
        subtitle: "Material inspection & verification",
        description:
          "Quality inspection conducted to assess material appearance, consistency, and overall condition prior to packaging or shipment.",
        tags: ["Sampling", "Visual quality check", "Industrial materials"],
      },
      {
        type: "video",
        src: v5,
        thumb: labHands,
        title: "Product Quality Check",
        subtitle: "Material inspection & verification",
        description:
          "SQuality inspection conducted to assess material appearance, consistency, and overall condition prior to packaging or shipment.",
        tags: ["Sampling", "Visual quality check", "Industrial materials"],
      },
      {
        type: "video",
        src: v6,
        thumb: team1,
        title: "Product Quality Check",
        subtitle: "Material inspection & verification",
        description:
          "Quality inspection conducted to assess material appearance, consistency, and overall condition prior to packaging or shipment.",
        tags: ["Sampling","Product quality", "Industrial materials"],
      },
    ],
    []
  );

  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(1);

  const AUTOPLAY = false; // ✅ turn on if you want
  const AUTOPLAY_MS = 6000;

  const railRef = useRef(null);

  const goTo = (nextIndex) => {
    const total = items.length;
    const normalized = (nextIndex + total) % total;
    setDirection(nextIndex > index ? 1 : -1);
    setIndex(normalized);

    // keep active thumbnail visible
    requestAnimationFrame(() => {
      const rail = railRef.current;
      if (!rail) return;
      const el = rail.querySelector(`[data-rail-item="${normalized}"]`);
      if (!el) return;
      el.scrollIntoView({ block: "nearest", behavior: "smooth" });
    });
  };

  const next = () => goTo(index + 1);
  const prev = () => goTo(index - 1);

  useEffect(() => {
    if (!AUTOPLAY) return;
    const t = setInterval(() => {
      setDirection(1);
      setIndex((i) => (i + 1) % items.length);
    }, AUTOPLAY_MS);
    return () => clearInterval(t);
  }, [items.length]);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "ArrowDown") next();
      if (e.key === "ArrowUp") prev();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [index]);

  const active = items[index];

  const variants = {
    enter: (dir) => ({
      y: dir > 0 ? 24 : -24,
      opacity: 0,
      scale: 0.99,
      filter: "blur(2px)",
    }),
    center: {
      y: 0,
      opacity: 1,
      scale: 1,
      filter: "blur(0px)",
      transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] },
    },
    exit: (dir) => ({
      y: dir > 0 ? -24 : 24,
      opacity: 0,
      scale: 0.99,
      filter: "blur(2px)",
      transition: { duration: 0.35, ease: [0.22, 1, 0.36, 1] },
    }),
  };

  return (
    <section id="inside-adrinko" style={{ padding: "72px 16px" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5 }}
          className="font-bold text-5xl mb-3"
          style={{ color: "#67e8f9", lineHeight: 1, textAlign: "center" }}
        >
          Inside Adrinko
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5, delay: 0.05 }}
          style={{
            margin: "0 auto 34px",
            maxWidth: 820,
            opacity: 0.8,
            lineHeight: 1.6,
            fontSize: 18,
            color: "rgb(156 163 175)",
            textAlign: "center",
          }}
        >
          Products and lab checks — images and short
          clips in one place.
        </motion.p>

        {/* ✅ Left rail + right panel */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "300px 1fr",
            gap: 18,
            alignItems: "stretch",
          }}
        >
          {/* LEFT: vertical slider rail */}
          <div
            style={{
              borderRadius: 22,
              border: "1px solid rgba(255,255,255,0.08)",
              background: "rgba(255,255,255,0.02)",
              boxShadow:
                "0 10px 30px rgba(0,0,0,0.10), 0 2px 8px rgba(0,0,0,0.06)",
              overflow: "hidden",
              position: "relative",
              height: 520,
            }}
          >
            {/* Up/Down buttons */}
            <div
              style={{
                display: "flex",
                gap: 10,
                padding: 12,
                justifyContent: "space-between",
                borderBottom: "1px solid rgba(255,255,255,0.06)",
              }}
            >
              <button
                type="button"
                onClick={prev}
                aria-label="Previous item"
                style={railBtnStyle}
              >
                ↑
              </button>
              <div style={{ opacity: 0.7, fontSize: 12, color: "#e5e7eb" }}>
                {index + 1} / {items.length}
              </div>
              <button
                type="button"
                onClick={next}
                aria-label="Next item"
                style={railBtnStyle}
              >
                ↓
              </button>
            </div>

            {/* Scrollable thumbnails */}
            <div
              ref={railRef}
              style={{
                height: "calc(520px - 52px)",
                overflowY: "auto",
                padding: 12,
                display: "grid",
                gap: 10,
              }}
            >
              {items.map((it, i) => {
                const activeThumb = i === index;
                return (
                  <button
                    key={i}
                    type="button"
                    onClick={() => goTo(i)}
                    data-rail-item={i}
                    aria-label={`Open ${it.title}`}
                    style={{
                      width: "100%",
                      textAlign: "left",
                      borderRadius: 16,
                      border: activeThumb
                        ? "1px solid rgba(103,232,249,0.75)"
                        : "1px solid rgba(255,255,255,0.08)",
                      background: activeThumb
                        ? "rgba(103,232,249,0.10)"
                        : "rgba(255,255,255,0.02)",
                      padding: 10,
                      cursor: "pointer",
                      display: "grid",
                      gridTemplateColumns: "84px 1fr",
                      gap: 10,
                      alignItems: "center",
                      transition: "all 160ms ease",
                    }}
                  >
                    <div
                      style={{
                        width: 84,
                        height: 56,
                        borderRadius: 12,
                        overflow: "hidden",
                        position: "relative",
                        background: "rgba(0,0,0,0.15)",
                      }}
                    >
                      <img
                        src={it.thumb || it.src}
                        alt=""
                        style={{
                          width: "100%",
                          height: "100%",
                          objectFit: "cover",
                          display: "block",
                        }}
                        draggable={false}
                      />
                      {it.type === "video" && (
                        <div
                          style={{
                            position: "absolute",
                            inset: 0,
                            display: "grid",
                            placeItems: "center",
                            background:
                              "linear-gradient(180deg, rgba(0,0,0,0.15), rgba(0,0,0,0.25))",
                            color: "white",
                            fontSize: 18,
                          }}
                        >
                          ▶
                        </div>
                      )}
                    </div>

                    <div style={{ minWidth: 0 }}>
                      <div
                        style={{
                          color: "#e5e7eb",
                          fontWeight: 700,
                          fontSize: 14,
                          lineHeight: 1.2,
                          whiteSpace: "nowrap",
                          overflow: "hidden",
                          textOverflow: "ellipsis",
                        }}
                      >
                        {it.title}
                      </div>
                      <div
                        style={{
                          color: "rgb(156 163 175)",
                          fontSize: 12,
                          marginTop: 4,
                          whiteSpace: "nowrap",
                          overflow: "hidden",
                          textOverflow: "ellipsis",
                        }}
                      >
                        {it.subtitle || (it.type === "video" ? "Video" : "Image")}
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* RIGHT: main viewer + text (same height) */}
          <div
            style={{
              borderRadius: 22,
              overflow: "hidden",
              border: "1px solid rgba(255,255,255,0.08)",
              background: "rgba(255,255,255,0.02)",
              boxShadow:
                "0 10px 30px rgba(0,0,0,0.10), 0 2px 8px rgba(0,0,0,0.06)",
              height: 520,
              display: "grid",
              gridTemplateRows: "1fr auto",
            }}
          >
            {/* media */}
            <div style={{ position: "relative" }}>
              <AnimatePresence initial={false} custom={direction} mode="popLayout">
                <motion.div
                  key={`${active.type}-${active.src}`}
                  custom={direction}
                  variants={variants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  style={{
                    position: "absolute",
                    inset: 0,
                  }}
                >
                  {active.type === "video" ? (
                    <video
                      src={active.src}
                      controls
                      playsInline
                      preload="metadata"
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        display: "block",
                        background: "black",
                      }}
                    />
                  ) : (
                    <img
                      src={active.src}
                      alt={active.title}
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        display: "block",
                      }}
                      draggable={false}
                    />
                  )}
                </motion.div>
              </AnimatePresence>

              {/* subtle overlay */}
              <div
                aria-hidden
                style={{
                  position: "absolute",
                  inset: 0,
                  background:
                    "linear-gradient(180deg, rgba(0,0,0,0.10) 0%, rgba(0,0,0,0.00) 50%, rgba(0,0,0,0.35) 100%)",
                  pointerEvents: "none",
                }}
              />
            </div>

            {/* text */}
            <div
              style={{
                padding: 18,
                borderTop: "1px solid rgba(255,255,255,0.06)",
                display: "grid",
                gap: 10,
              }}
            >
              <div style={{ display: "flex", justifyContent: "space-between", gap: 12 }}>
                <div style={{ minWidth: 0 }}>
                  <div
                    style={{
                      color: "#e5e7eb",
                      fontWeight: 800,
                      fontSize: 18,
                      lineHeight: 1.2,
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                      whiteSpace: "nowrap",
                    }}
                  >
                    {active.title}
                  </div>
                  <div style={{ color: "rgb(156 163 175)", fontSize: 13, marginTop: 4 }}>
                    {active.subtitle || (active.type === "video" ? "Video" : "Image")}
                  </div>
                </div>

                <div style={{ color: "rgb(156 163 175)", fontSize: 12, whiteSpace: "nowrap" }}>
                  {active.type === "video" ? "Video" : "Image"} • {index + 1}/{items.length}
                </div>
              </div>

              <div style={{ color: "rgb(209 213 219)", lineHeight: 1.6, fontSize: 14 }}>
                {active.description}
              </div>

              {!!active.tags?.length && (
                <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                  {active.tags.map((t) => (
                    <span
                      key={t}
                      style={{
                        fontSize: 12,
                        color: "#e5e7eb",
                        border: "1px solid rgba(255,255,255,0.10)",
                        background: "rgba(255,255,255,0.03)",
                        padding: "6px 10px",
                        borderRadius: 999,
                      }}
                    >
                      {t}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>

        {/* mobile fallback */}
        <div
          style={{
            marginTop: 14,
            color: "rgb(156 163 175)",
            fontSize: 12,
            opacity: 0.8,
            textAlign: "center",
          }}
        >
          Tip: Use ↑ ↓ keys to navigate.
        </div>

        <style>{`
          @media (max-width: 940px) {
            #inside-adrinko > div > div[style*="grid-template-columns"] {
              grid-template-columns: 1fr !important;
            }
          }
        `}</style>
      </div>
    </section>
  );
}

const railBtnStyle = {
  width: 44,
  height: 28,
  borderRadius: 12,
  border: "1px solid rgba(255,255,255,0.18)",
  background: "rgba(0,0,0,0.28)",
  color: "white",
  fontSize: 16,
  cursor: "pointer",
  display: "grid",
  placeItems: "center",
  backdropFilter: "blur(8px)",
  WebkitBackdropFilter: "blur(8px)",
};
