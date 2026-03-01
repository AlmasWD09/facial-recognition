import React from "react";

const TextGradient = () => {
  return (
    <h2
      className="
                  inline-block
                  text-2xl
                  font-semibold
                  mb-2
                  bg-linear-to-r
                  from-[#FEAC1A]
                  to-[#F84426]
                  bg-clip-text
                  text-transparent
                "
      style={{
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
      }}
    >
      Oops!
    </h2>
  );
};

export default TextGradient;
