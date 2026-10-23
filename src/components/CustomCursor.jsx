import React, { useEffect, useState } from "react";

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState(false);
  const [cursorText, setCursorText] = useState("");
  const [isVisible, setIsVisible] = useState(false);
  const [isTouch, setIsTouch] = useState(false);

  useEffect(() => {
    // Check if device is touch-primary
    if (window.matchMedia("(pointer: coarse)").matches || "ontouchstart" in window) {
      setIsTouch(true);
      return;
    }

    const onMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);

      // Check if hovering an interactive element
      const target = e.target.closest("button, a, input, select, textarea, [data-cursor], [role='button']");
      if (target) {
        setIsHovered(true);
        const text = target.getAttribute("data-cursor") || "";
        setCursorText(text);
      } else {
        setIsHovered(false);
        setCursorText("");
      }
    };

    const onMouseLeave = () => {
      setIsVisible(false);
    };

    window.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseleave", onMouseLeave);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseleave", onMouseLeave);
    };
  }, [isVisible]);

  if (isTouch || !isVisible) return null;

  return (
    <>
      {/* Central Precision Dot */}
      <div
        className="fixed top-0 left-0 w-2 h-2 rounded-full bg-[#4DA3FF] pointer-events-none z-[9999] transition-transform duration-75 ease-out shadow-[0_0_8px_#4DA3FF]"
        style={{
          transform: `translate3d(${position.x - 4}px, ${position.y - 4}px, 0)`,
        }}
      />

      {/* Outer Floating Ring */}
      <div
        className={`fixed top-0 left-0 rounded-full pointer-events-none z-[9998] transition-all duration-200 ease-out flex items-center justify-center ${
          isHovered
            ? "w-12 h-12 bg-white/10 border border-[#4DA3FF] backdrop-blur-[1px] shadow-[0_0_15px_rgba(77,163,255,0.4)]"
            : "w-8 h-8 border border-white/30 bg-transparent"
        }`}
        style={{
          transform: `translate3d(${position.x - (isHovered ? 24 : 16)}px, ${
            position.y - (isHovered ? 24 : 16)
          }px, 0)`,
        }}
      >
        {cursorText && (
          <span className="text-[9px] font-mono font-bold tracking-wider text-white uppercase select-none">
            {cursorText}
          </span>
        )}
      </div>
    </>
  );
}
