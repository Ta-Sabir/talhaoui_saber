"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { useLocale, useTranslations } from "next-intl";

type SocialIcons = "github" | "twitter" | "linkedin" | "facebook";

export default function Footer() {
  const locale = useLocale();
  const t = useTranslations("footer");

  const [isHovered, setIsHovered] = useState<Record<SocialIcons, boolean>>({
    github: false,
    twitter: false,
    linkedin: false,
    facebook: false,
  });

  const handleMouseEnter = (icon: SocialIcons) => {
    setIsHovered((prevState) => ({ ...prevState, [icon]: true }));
  };

  const handleMouseLeave = (icon: SocialIcons) => {
    setIsHovered((prevState) => ({ ...prevState, [icon]: false }));
  };

  return (
    // START FOOTER SECTION
    <>
      <section className="flex flex-col items-center justify-between gap-3 border-y border-light-400 bg-primary-500 bg-newsback px-6 py-6 pb-8 lg:py-3 text-dark-900 dark:border-dark-700 dark:bg-primary-500/80 sm:h-24 sm:flex-row sm:px-12 md:px-16 lg:px-36">
        <h3 className="text-xl font-semibold text-white">{t("title")}</h3>
        <form className="flex w-full items-center sm:w-fit">
          <input
            className={`flex w-full rounded bg-light-300 px-3 py-2 text-sm text-dark-500 ring-offset-light-500 file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-light-950 focus-visible:outline-none focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 dark:bg-dark-700 dark:text-light-500 dark:ring-offset-dark-500 dark:placeholder:text-dark-50 h-10 ${locale === "ar" ? "rounded-l-none" : "rounded-r-none"
              }`}
            dir="ltr"
            placeholder="example@gmail.com"
            aria-invalid="false"
            name="email"
          />
          <button
            className={`inline-flex items-center duration-100 border-dashed justify-center whitespace-nowrap rounded text-sm font-medium dark:ring-offset-dark-500 ring-offset-light-500 transition-colors focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 bg-[#f5f5f5] hover:bg-light-400 text-dark-500 hover:text-dark-600 active:text-dark-900 active:bg-light-300 px-4 py-2 h-10 ${locale === "ar" ? "rounded-r-none" : "rounded-l-none"
              }`}
            type="submit"
          >
            {t("link")}
          </button>
        </form>
      </section>
      <footer className="relative px-6 py-6 sm:px-12 md:px-16 lg:px-36">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          <div className="relative z-10 flex gap-4">
            <div className="relative">
              <Link
                target="_blank"
                className="inline-flex items-center duration-100 border-dashed justify-center whitespace-nowrap rounded text-sm font-medium dark:ring-offset-dark-500 ring-offset-light-500 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-900 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 text-dark-500 dark:text-dark-200 dark:hover:bg-dark-800 dark:active:bg-dark-700 hover:bg-light-400 acitve:bg-light-300 h-8 w-8"
                data-state="closed"
                href="https://github.com/Ta-Sabir"
                onMouseEnter={() => handleMouseEnter("github")}
                onMouseLeave={() => handleMouseLeave("github")}
              >
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth={0}
                  viewBox="0 0 24 24"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M12.001 2C6.47598 2 2.00098 6.475 2.00098 12C2.00098 16.425 4.86348 20.1625 8.83848 21.4875C9.33848 21.575 9.52598 21.275 9.52598 21.0125C9.52598 20.775 9.51348 19.9875 9.51348 19.15C7.00098 19.6125 6.35098 18.5375 6.15098 17.975C6.03848 17.6875 5.55098 16.8 5.12598 16.5625C4.77598 16.375 4.27598 15.9125 5.11348 15.9C5.90098 15.8875 6.46348 16.625 6.65098 16.925C7.55098 18.4375 8.98848 18.0125 9.56348 17.75C9.65098 17.1 9.91348 16.6625 10.201 16.4125C7.97598 16.1625 5.65098 15.3 5.65098 11.475C5.65098 10.3875 6.03848 9.4875 6.67598 8.7875C6.57598 8.5375 6.22598 7.5125 6.77598 6.1375C6.77598 6.1375 7.61348 5.875 9.52598 7.1625C10.326 6.9375 11.176 6.825 12.026 6.825C12.876 6.825 13.726 6.9375 14.526 7.1625C16.4385 5.8625 17.276 6.1375 17.276 6.1375C17.826 7.5125 17.476 8.5375 17.376 8.7875C18.0135 9.4875 18.401 10.375 18.401 11.475C18.401 15.3125 16.0635 16.1625 13.8385 16.4125C14.201 16.725 14.5135 17.325 14.5135 18.2625C14.5135 19.6 14.501 20.675 14.501 21.0125C14.501 21.275 14.6885 21.5875 15.1885 21.4875C19.259 20.1133 21.9999 16.2963 22.001 12C22.001 6.475 17.526 2 12.001 2Z" />
                </svg>
              </Link>
              {isHovered.github && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.5 }}
                  transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 20,
                  }}
                  className="motion_div absolute top-[-35px] left-[-30%] bg-white text-black text-xs font-semibold py-1 px-2 rounded shadow-lg"
                >
                  Github
                </motion.div>
              )}
            </div>
            <div className="relative">
              <Link
                target="_blank"
                className="inline-flex items-center duration-100 border-dashed justify-center whitespace-nowrap rounded text-sm font-medium dark:ring-offset-dark-500 ring-offset-light-500 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-900 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 text-dark-500 dark:text-dark-200 dark:hover:bg-dark-800 dark:active:bg-dark-700 hover:bg-light-400 acitve:bg-light-300 h-8 w-8"
                data-state="closed"
                href="https://twitter.com/"
                onMouseEnter={() => handleMouseEnter("twitter")}
                onMouseLeave={() => handleMouseLeave("twitter")}
              >
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth={0}
                  viewBox="0 0 24 24"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M18.2048 2.25H21.5128L14.2858 10.51L22.7878 21.75H16.1308L10.9168 14.933L4.95084 21.75H1.64084L9.37084 12.915L1.21484 2.25H8.04084L12.7538 8.481L18.2048 2.25ZM17.0438 19.77H18.8768L7.04484 4.126H5.07784L17.0438 19.77Z" />
                </svg>
              </Link>
              {isHovered.twitter && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.5 }}
                  transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 20,
                  }}
                  className="motion_div absolute top-[-35px] left-[-30%] bg-white text-black text-xs font-semibold py-1 px-2 rounded shadow-lg"
                >
                  Twiter
                </motion.div>
              )}
            </div>
            <div className="relative">
              <Link
                target="_blank"
                className="inline-flex items-center duration-100 border-dashed justify-center whitespace-nowrap rounded text-sm font-medium dark:ring-offset-dark-500 ring-offset-light-500 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-900 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 text-dark-500 dark:text-dark-200 dark:hover:bg-dark-800 dark:active:bg-dark-700 hover:bg-light-400 acitve:bg-light-300 h-8 w-8"
                data-state="closed"
                href="https://www.linkedin.com/in/saber-talhaoui-214106262/"
                onMouseEnter={() => handleMouseEnter("linkedin")}
                onMouseLeave={() => handleMouseLeave("linkedin")}
              >
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth={0}
                  viewBox="0 0 24 24"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M6.94048 4.99993C6.94011 5.81424 6.44608 6.54702 5.69134 6.85273C4.9366 7.15845 4.07187 6.97605 3.5049 6.39155C2.93793 5.80704 2.78195 4.93715 3.1105 4.19207C3.43906 3.44699 4.18654 2.9755 5.00048 2.99993C6.08155 3.03238 6.94097 3.91837 6.94048 4.99993ZM7.00048 8.47993H3.00048V20.9999H7.00048V8.47993ZM13.3205 8.47993H9.34048V20.9999H13.2805V14.4299C13.2805 10.7699 18.0505 10.4299 18.0505 14.4299V20.9999H22.0005V13.0699C22.0005 6.89993 14.9405 7.12993 13.2805 10.1599L13.3205 8.47993Z" />
                </svg>
              </Link>
              {isHovered.linkedin && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.5 }}
                  transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 20,
                  }}
                  className="motion_div absolute top-[-35px] left-[-45%] bg-white text-black text-xs font-semibold py-1 px-2 rounded shadow-lg"
                >
                  Linkedin
                </motion.div>
              )}
            </div>
            <div className="relative">
              <Link
                target="_blank"
                className="inline-flex items-center duration-100 border-dashed justify-center whitespace-nowrap rounded text-sm font-medium dark:ring-offset-dark-500 ring-offset-light-500 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-900 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 text-dark-500 dark:text-dark-200 dark:hover:bg-dark-800 dark:active:bg-dark-700 hover:bg-light-400 acitve:bg-light-300 h-8 w-8"
                data-state="closed"
                href="https://web.facebook.com/profile.php?id=100075067716401"
                onMouseEnter={() => handleMouseEnter("facebook")}
                onMouseLeave={() => handleMouseLeave("facebook")}
              >
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth={0}
                  viewBox="0 0 24 24"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M14 13.5H16.5L17.5 9.5H14V7.5C14 6.47062 14 5.5 16 5.5H17.5V2.1401C17.1743 2.09685 15.943 2 14.6429 2C11.9284 2 10 3.65686 10 6.69971V9.5H7V13.5H10V22H14V13.5Z" />
                </svg>
              </Link>
              {isHovered.facebook && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.5 }}
                  transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 20,
                  }}
                  className="motion_div absolute top-[-35px] left-[-50%] bg-white text-black text-xs font-semibold py-1 px-2 rounded shadow-lg"
                >
                  Facebook
                </motion.div>
              )}
            </div>
          </div>
          <div className="text-center text-sm text-dark-50">
            {t("copyRight")}
          </div>
        </div>
      </footer>
    </>
    // END FOOTER SECTION
  );
}
