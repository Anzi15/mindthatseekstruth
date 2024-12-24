"use client";

import React, { useState, useEffect, useRef } from "react";

function AnimateNumbers({ className, number }) {
  const [num, setNum] = useState(0);
  const [inView, setInView] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (ref.current) {
        const rect = ref.current.getBoundingClientRect();
        if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
          setInView(true);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Check on load as well

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (inView) {
      const increment = () => {
        if (num < number) {
          setNum((prev) => prev + Math.ceil(number / 100));
        }
      };

      const interval = setInterval(increment, 30); // adjust timing to your needs
      return () => clearInterval(interval);
    }
  }, [inView, num, number]);

  return (
    <div className="container text-center" ref={ref}>
      <div className={className} style={{ display: "inline-flex", alignItems: "center" }}>
        {num}
        <span style={{ marginLeft: "4px" }}>+</span>
      </div>
    </div>
  );
}

export default AnimateNumbers;
