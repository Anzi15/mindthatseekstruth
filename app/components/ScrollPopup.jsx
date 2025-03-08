"use client";
import { useState, useEffect } from "react";
import Image from "next/image";

const ScrollPopup = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [wasClosed, setWasClosed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;

      if (!wasClosed && scrollY > totalHeight * 0.5) {
        setShowPopup(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [wasClosed]);

  if (!showPopup) return null;

  return (
    <button
      className="w-screen h-screen fixed top-0 left-0 bg-black bg-opacity-50 z-40"
      onClick={() => {
        setShowPopup(false);
        setWasClosed(true);
      }}
    >
      <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-4 shadow-lg rounded-lg z-50 w-full md:w-1/2">
        <div
          className="w-full items-end justify-end flex text-gray-500 hover:text-gray-700 text-2xl font-extrabold"
          onClick={(e) => {
            e.stopPropagation(); // Prevent closing when clicking on the close button
            setShowPopup(false);
            setWasClosed(true);
          }}
        >
          ✕
        </div>
        <a href="/consultation">
          <Image
            src="https://i.ibb.co/nN8cQmjR/Talk-to-mehran.png"
            width={600}
            height={600}
            alt="Talk to Mehran"
            className="w-full"
          />
        </a>
      </div>
    </button>
  );
};

export default ScrollPopup;
