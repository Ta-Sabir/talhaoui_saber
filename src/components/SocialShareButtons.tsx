"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useLocale } from "next-intl";

interface HoverState {
  facebook: boolean;
  linkedin: boolean;
  x: boolean;
}

export default function SocialShareButtons() {
  const locale = useLocale();

  const [isHovered, setIsHovered] = useState<HoverState>({
    facebook: false,
    linkedin: false,
    x: false,
  });

  const handleMouseEnter = (icon: keyof HoverState) => {
    setIsHovered((prevState) => ({ ...prevState, [icon]: true }));
  };

  const handleMouseLeave = (icon: keyof HoverState) => {
    setIsHovered((prevState) => ({ ...prevState, [icon]: false }));
  };
  return (
    <>
      <button
        data-state="closed"
        className="share_button relative react-share__ShareButton"
        style={{
          backgroundColor: "transparent",
          border: "none",
          padding: 0,
          font: "inherit",
          color: "inherit",
          cursor: "pointer",
        }}
        onMouseEnter={() => handleMouseEnter("facebook")}
        onMouseLeave={() => handleMouseLeave("facebook")}
      >
        {isHovered.facebook && (
          <div className="absolute top-[-35px] left-1/2 -translate-x-1/2">
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.5 }}
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 20,
              }}
              className="motion_div bg-white text-center text-black text-xs font-medium py-1 px-2 rounded shadow-lg whitespace-nowrap"
            >
             {locale === "ar" ? "مشاركة على فيسبوك" : "Share On Facebook"}
            </motion.div>
          </div>
        )}
        <svg
          stroke="currentColor"
          fill="currentColor"
          strokeWidth={0}
          viewBox="0 0 24 24"
          className="inline-flex items-center duration-100 border-dashed justify-center whitespace-nowrap rounded text-sm font-medium dark:ring-offset-dark-500 ring-offset-light-500 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-900 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-dark-50 hover:text-light-900 text-dark-50 hover:bg-dark-400 dark:hover:bg-dark-800 dark:hover:text-dark-100 dark:active:bg-dark-700 hover:border-transparent active:bg-dark-300 dark:active:text-dark-50 active:text-light-600 h-8 w-8 !h-8 !w-8 p-2 !h-6 !w-6"
          height="1em"
          width="1em"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M14 13.5H16.5L17.5 9.5H14V7.5C14 6.47062 14 5.5 16 5.5H17.5V2.1401C17.1743 2.09685 15.943 2 14.6429 2C11.9284 2 10 3.65686 10 6.69971V9.5H7V13.5H10V22H14V13.5Z" />
        </svg>
      </button>
      <button
        data-state="closed"
        className="share_button relative react-share__ShareButton"
        style={{
          backgroundColor: "transparent",
          border: "none",
          padding: 0,
          font: "inherit",
          color: "inherit",
          cursor: "pointer",
        }}
        onMouseEnter={() => handleMouseEnter("linkedin")}
        onMouseLeave={() => handleMouseLeave("linkedin")}
      >
        {isHovered.linkedin && (
          <div className="absolute top-[-35px] left-1/2 -translate-x-1/2">
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.5 }}
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 20,
              }}
              className="motion_div bg-white text-center text-black text-xs font-medium py-1 px-2 rounded shadow-lg whitespace-nowrap"
            >
             {locale === "ar" ? " شارك على لينكد إن" : "Share On Linkedin"}
            </motion.div>
          </div>
        )}
        <svg
          stroke="currentColor"
          fill="currentColor"
          strokeWidth={0}
          viewBox="0 0 24 24"
          className="inline-flex items-center duration-100 border-dashed justify-center whitespace-nowrap rounded text-sm font-medium dark:ring-offset-dark-500 ring-offset-light-500 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-900 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-dark-50 hover:text-light-900 text-dark-50 hover:bg-dark-400 dark:hover:bg-dark-800 dark:hover:text-dark-100 dark:active:bg-dark-700 hover:border-transparent active:bg-dark-300 dark:active:text-dark-50 active:text-light-600 h-8 w-8 !h-8 !w-8 p-2 !h-6 !w-6"
          height="1em"
          width="1em"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M6.94048 4.99993C6.94011 5.81424 6.44608 6.54702 5.69134 6.85273C4.9366 7.15845 4.07187 6.97605 3.5049 6.39155C2.93793 5.80704 2.78195 4.93715 3.1105 4.19207C3.43906 3.44699 4.18654 2.9755 5.00048 2.99993C6.08155 3.03238 6.94097 3.91837 6.94048 4.99993ZM7.00048 8.47993H3.00048V20.9999H7.00048V8.47993ZM13.3205 8.47993H9.34048V20.9999H13.2805V14.4299C13.2805 10.7699 18.0505 10.4299 18.0505 14.4299V20.9999H22.0005V13.0699C22.0005 6.89993 14.9405 7.12993 13.2805 10.1599L13.3205 8.47993Z" />
        </svg>
      </button>
      <button
        data-state="closed"
        className="share_button relative react-share__ShareButton"
        style={{
          backgroundColor: "transparent",
          border: "none",
          padding: 0,
          font: "inherit",
          color: "inherit",
          cursor: "pointer",
        }}
        onMouseEnter={() => handleMouseEnter("x")}
        onMouseLeave={() => handleMouseLeave("x")}
      >
        {isHovered.x && (
          <div className="absolute top-[-35px] left-1/2 -translate-x-1/2">
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.5 }}
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 20,
              }}
              className="motion_div bg-white text-center text-black text-xs font-medium py-1 px-2 rounded shadow-lg whitespace-nowrap"
            >
              {locale === "ar" ? "شارك على تويتر" : "Share On Twitter"}
            </motion.div>
          </div>
        )}
        <svg
          stroke="currentColor"
          fill="currentColor"
          strokeWidth={0}
          viewBox="0 0 24 24"
          className="inline-flex items-center duration-100 border-dashed justify-center whitespace-nowrap rounded text-sm font-medium dark:ring-offset-dark-500 ring-offset-light-500 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-900 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-dark-50 hover:text-light-900 text-dark-50 hover:bg-dark-400 dark:hover:bg-dark-800 dark:hover:text-dark-100 dark:active:bg-dark-700 hover:border-transparent active:bg-dark-300 dark:active:text-dark-50 active:text-light-600 h-8 w-8 !h-8 !w-8 p-2 !h-6 !w-6"
          height="1em"
          width="1em"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M18.2048 2.25H21.5128L14.2858 10.51L22.7878 21.75H16.1308L10.9168 14.933L4.95084 21.75H1.64084L9.37084 12.915L1.21484 2.25H8.04084L12.7538 8.481L18.2048 2.25ZM17.0438 19.77H18.8768L7.04484 4.126H5.07784L17.0438 19.77Z" />
        </svg>
      </button>
    </>
  );
}
