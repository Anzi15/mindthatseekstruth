"use client";

import React, { useState } from "react";
import AnimatedNumbers from "react-animated-numbers";

function AnimateNumbers({ className, number }) {
  const [num, setNum] = useState(number);

  return (
    <div className="container text-center">
      <div className={className} style={{ display: "inline-flex", alignItems: "center" }}>
        <AnimatedNumbers
          includeComma
          transitions={(index) => ({
            type: "spring",
            duration: index + 0.3,
          })}
          animateToNumber={num}
        />
        {/* Add the "+" sign after the animated number */}
        <span style={{ marginLeft: "4px" }}>+</span>
      </div>
    </div>
  );
}

export default AnimateNumbers;
