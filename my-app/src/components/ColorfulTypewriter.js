import React, { useEffect, useState } from "react";

const colors = [
  "#0EA5E9", // Dark Cyan Blue — muted and professional
  "#4C1D95", // Deep Purple — futuristic and moody
  "#9A3412", // Burnt Orange — adds warmth without brightness
  "#1E293B", // Charcoal Navy — for neutral breaks
];




const ColorfulTypewriter = ({ text, speed = 150 }) => {
  const [displayed, setDisplayed] = useState("");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < text.length) {
      const timeout = setTimeout(() => {
        setDisplayed((prev) => prev + text[index]);
        setIndex(index + 1);
      }, speed);

      return () => clearTimeout(timeout);
    }
  }, [index, text, speed]);

  return (
    <h1 className="text-4xl md:text-5xl font-bold text-center text-white whitespace-pre-line">
      {displayed.split("").map((char, idx) => (
        <span
          key={idx}
          style={{ color: colors[idx % colors.length] }}
          className={`inline-block ${char === ' ' ? 'mx-4' : 'mx-1'}`}
        >
          {char === ' ' ? '\u00A0' : char}
        </span>
      ))}
      <span className="animate-blink">|</span>
    </h1>
  );
};

export default ColorfulTypewriter;
