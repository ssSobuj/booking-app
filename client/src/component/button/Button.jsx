import { useState } from "react";

/* eslint-disable react/prop-types */
export default function Button({ children, style, type, hoverColore }) {
  const [isHovered, setHovered] = useState(false);

  const buttonStyle = {
    ...style,
    backgroundColor: isHovered ? hoverColore : style.backgroundColor,
    transition: "all 0.3s ease-in-out",
  };
  return (
    <>
      <button
        type={type}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        style={buttonStyle}
      >
        {children}
      </button>
    </>
  );
}
