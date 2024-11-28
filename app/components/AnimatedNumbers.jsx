"use client"
import React from "react";

import AnimatedNumbers from "react-animated-numbers";

function AnimateNumbers({className, number}) {
  const [num, setNum] = React.useState(number);
  return (
    <div className="container">
      <AnimatedNumbers
        className={className}
        includeComma
        transitions={(index) => ({
          type: "spring",
          duration: index + 0.3,
        })}
        animateToNumber={8500}
        fontStyle={{
          fontSize: 40,
          color: "red",
        }}
      />
    </div>
  );
}

export default AnimateNumbers;