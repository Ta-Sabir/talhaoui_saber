"use client";
import { useEffect, useState } from "react";

export default function ProgressBar() {
  const [scrollPercentage, setScrollPercentage] = useState<number>(0);

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const scrollY = window.scrollY;

      const scrollPercent = (scrollY / (documentHeight - windowHeight)) * 100;

      setScrollPercentage(scrollPercent);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className="fixed progress-fill inset-0 h-1 origin-[0%] bg-gradient-to-r from-primary-900 via-primary-700 to-primary-500"
      style={{
        backgroundColor: "#0072d3",
        width: `${scrollPercentage}%`,
      }}
    />
  );
}
