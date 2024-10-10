"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";

const TooltipButton = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="p-8 relative">
      {isHovered && (
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.5 }}
          transition={{
            type: "spring",
            stiffness: 300,
            damping: 20,
          }}
          className="motion_div absolute top-[-20px] bg-white text-black text-xs font-medium py-1 px-2 rounded shadow-lg"
        >
          facebook
        </motion.div>
      )}
      <button
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="px-4 py-2 bg-blue-500 text-white rounded"
      >
        Hover over me
      </button>
    </div>
  );
};

export default TooltipButton;
