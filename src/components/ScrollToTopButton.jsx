import React, { useEffect, useMemo, useState } from "react";

const ScrollToTopButton = ({
  showAfter = 200,
  size = 56,
  corner = "right",
}) => {
  const [visible, setVisible] = useState(false);
  const [progress, setProgress] = useState(0);

  // Progress ring math
  const r = 22; // ring radius
  const C = useMemo(() => 2 * Math.PI * r, []);
  const offset = useMemo(() => Math.max(0, C * (1 - progress)), [C, progress]);

  useEffect(() => {
    let ticking = false;

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const scrollTop =
            window.scrollY || document.documentElement.scrollTop;
          const max =
            document.documentElement.scrollHeight - window.innerHeight;
          const pct = max > 0 ? Math.min(1, scrollTop / max) : 0;
          setProgress(pct);
          setVisible(scrollTop > showAfter);
          ticking = false;
        });
        ticking = true;
      }
    };

    onScroll(); // initialize
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [showAfter]);

  const toTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  // Corner position styles
  const posStyle =
    corner === "left"
      ? { left: `calc(16px + env(safe-area-inset-left))` }
      : { right: `calc(16px + env(safe-area-inset-right))` };

  return (
    <>
      <style>{`
        .stt-btn {
          position: fixed;
          bottom: calc(16px + env(safe-area-inset-bottom));
          ${
            corner === "left" ? "left" : "right"
          }: calc(16px + env(safe-area-inset-${corner}));
          width: ${size}px;
          height: ${size}px;
          border: none;
          outline: none;
          border-radius: 50%;
          cursor: pointer;
          z-index: 10000;
          padding: 0;
          display: grid;
          place-items: center;
          background: linear-gradient(135deg, #6a5acd, #00d4ff);
          box-shadow:
            0 10px 24px rgba(0,0,0,.22),
            0 6px 12px rgba(0,0,0,.18),
            0 0 0 0 rgba(0,212,255,.0);
          color: #fff;
          transition:
            opacity .35s ease,
            transform .35s ease,
            box-shadow .25s ease;
          opacity: 0;
          transform: translateY(10px) scale(.92);
          pointer-events: none;
          /* subtle float animation */
          animation: stt-float 3s ease-in-out infinite;
          will-change: transform, opacity;
        }
        .stt-btn.is-visible {
          opacity: 1;
          transform: translateY(0) scale(1);
          pointer-events: auto;
          box-shadow:
            0 12px 26px rgba(0,0,0,.24),
            0 8px 18px rgba(0,0,0,.18),
            0 0 0 6px rgba(0,212,255,.15);
        }
        .stt-btn:focus-visible {
          outline: 2px solid #00d4ff;
          outline-offset: 2px;
        }
        .stt-btn:hover {
          transform: translateY(-2px) scale(1.04);
          box-shadow:
            0 14px 28px rgba(0,0,0,.28),
            0 8px 22px rgba(0,0,0,.2),
            0 0 0 8px rgba(0,212,255,.18);
        }
        .stt-btn:active {
          transform: translateY(0) scale(.98);
          box-shadow:
            0 8px 18px rgba(0,0,0,.24),
            0 4px 12px rgba(0,0,0,.18),
            0 0 0 4px rgba(0,212,255,.15);
        }

        .stt-icon {
          width: 56%;
          height: 56%;
          display: block;
        }

        /* SVG ring sits behind the icon */
        .stt-ring {
          position: absolute;
          inset: 0;
          pointer-events: none;
        }
        .stt-ring circle {
          fill: none;
          stroke-linecap: round;
        }
        .stt-ring .ring-bg {
          stroke: rgba(255,255,255,.28);
          stroke-width: 4;
        }
        .stt-ring .ring-fg {
          stroke: #ffffff;
          stroke-width: 4;
          filter: drop-shadow(0 0 6px rgba(255,255,255,.45));
          transition: stroke-dashoffset .15s linear;
        }

        /* Gentle float */
        @keyframes stt-float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-2px); }
        }

        /* Respect reduced motion */
        @media (prefers-reduced-motion: reduce) {
          .stt-btn {
            animation: none;
            transition: none;
          }
          .stt-ring .ring-fg { transition: none; }
        }

        /* Small screens */
        @media (max-width: 480px) {
          .stt-btn {
            ${
              corner === "left" ? "left" : "right"
            }: calc(12px + env(safe-area-inset-${corner}));
            bottom: calc(12px + env(safe-area-inset-bottom));
          }
        }
      `}</style>

      <button
        type="button"
        className={`stt-btn ${visible ? "is-visible" : ""}`}
        style={posStyle}
        onClick={toTop}
        aria-label="Scroll to top"
      >
        {/* Circular progress ring */}
        <svg className="stt-ring" viewBox="0 0 52 52" aria-hidden="true">
          <circle className="ring-bg" cx="26" cy="26" r="22" />
          <circle
            className="ring-fg"
            cx="26"
            cy="26"
            r="22"
            style={{
              strokeDasharray: C,
              strokeDashoffset: offset,
            }}
          />
        </svg>

        {/* Up arrow icon (chevron) */}
        <svg className="stt-icon" viewBox="0 0 24 24" aria-hidden="true">
          <path
            d="M6.7 14.7a1 1 0 0 1-1.4-1.4l6-6a1 1 0 0 1 1.4 0l6 6a1 1 0 1 1-1.4 1.4L12 9.41l-5.3 5.3Z"
            fill="currentColor"
          />
        </svg>
      </button>
    </>
  );
};

export default ScrollToTopButton;
