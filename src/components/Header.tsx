"use client";

import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { ToggleTheme } from "@/components";
import useHover from '../hooks/useHover';
import { useTranslations, useLocale } from "next-intl";
import Link from "next/link";



export default function Header() {
  const pathname = usePathname();
  const switchToEnglish = () => {
    return pathname.replace(/^\/ar/, "/en");
  };

  const switchToArabic = () => {
    const arabicPath = `/ar${pathname}`;
    return arabicPath;
  };
  const locale = useLocale();
  const t = useTranslations("Header");

  const { isHovered, handleMouseEnter, handleMouseLeave } = useHover();
  return (
    // START HEADER SECTION
    <>
      <header className="top-0 z-50 flex h-14 w-full items-center justify-between px-6 sm:px-12 md:px-16 lg:px-36">
        <Link
          className={`logo_name text-black text-xl ${locale === "ar" ? "mb-2" : ""
            } rounded-full transition-colors duration-75 hover:bg-primary-500/50 dark:hover:bg-dark-700/50`}
          href="/"
        >
          {t("title")}
        </Link>

        <section className="flex items-center justify-center gap-3">
          <section className="hidden items-center justify-center gap-3 lg:flex">
            <Link
              className="relative flex items-center gap-2 font-semibold text-dark-50 transition-colors duration-100 hover:text-dark-400 active:text-dark-900 dark:text-dark-50 dark:hover:text-light-950 active:dark:text-primary-500"
              href="/blog"
              onMouseEnter={() => handleMouseEnter("blog")}
              onMouseLeave={() => handleMouseLeave("blog")}
            >
              {isHovered.blog && (
                <div className="absolute bottom-[-35px] left-1/2 -translate-x-1/2">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.5 }}
                    transition={{
                      type: "spring",
                      stiffness: 300,
                      damping: 20,
                    }}
                    className="motion_div header bg-white text-center text-black text-xs font-medium py-1 px-2 rounded shadow-lg whitespace-nowrap"
                  >
                    {t("blog")}
                  </motion.div>
                </div>
              )}
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth={0}
                viewBox="0 0 24 24"
                className="h-4 w-4"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
                data-state="closed"
              >
                <path d="M19 22H5C3.34315 22 2 20.6569 2 19V3C2 2.44772 2.44772 2 3 2H17C17.5523 2 18 2.44772 18 3V15H22V19C22 20.6569 20.6569 22 19 22ZM18 17V19C18 19.5523 18.4477 20 19 20C19.5523 20 20 19.5523 20 19V17H18ZM16 20V4H4V19C4 19.5523 4.44772 20 5 20H16ZM6 7H14V9H6V7ZM6 11H14V13H6V11ZM6 15H11V17H6V15Z" />
              </svg>
            </Link>
          </section>
          <ToggleTheme />
          {locale === "en" && (
            <Link
              className="relative inline-flex items-center duration-100 border-dashed justify-center whitespace-nowrap rounded text-sm font-medium dark:ring-offset-dark-500 ring-offset-light-500 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-900 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 text-dark-500 dark:text-dark-200 dark:hover:bg-dark-800 dark:active:bg-dark-700 hover:bg-light-400 acitve:bg-light-300 h-6 w-6"
              data-state="closed"
              href={switchToArabic()}
              onMouseEnter={() => handleMouseEnter("changeToArabic")}
              onMouseLeave={() => handleMouseLeave("changeToArabic")}
            >
              {isHovered.changeToArabic && (
                <div className="absolute bottom-[-35px] left-1/2 -translate-x-1/2">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.5 }}
                    transition={{
                      type: "spring",
                      stiffness: 300,
                      damping: 20,
                    }}
                    className="motion_div header bg-white text-center text-black text-xs font-medium py-1 px-2 rounded shadow-lg whitespace-nowrap"
                  >
                    change language to Arabic
                  </motion.div>
                </div>
              )}
              <svg
                width="14"
                height="10"
                viewBox="0 0 14 10"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1.428 8.952L.18 9l-.12-.552h.072c.368-.04.648-.14.84-.3.2-.168.368-.44.504-.816L4.02.48h.576l2.832 7.044c.168.392.316.648.444.768.136.12.352.18.648.18L8.652 9c-.624-.04-1.188-.06-1.692-.06-.496 0-.98.02-1.452.06L5.4 8.484h.048c.632-.008.948-.12.948-.336 0-.104-.288-.816-.864-2.136H2.544l-.588 1.632c-.024.096-.036.18-.036.252a.42.42 0 00.228.384c.152.088.412.144.78.168L3.072 9l-1.644-.048zM3.924 2.22L2.772 5.388h2.484L3.924 2.22zm5.431 2.352l-.18.012-.108-.348c.56-.136.972-.272 1.236-.408l.444-.228c.104 0 .168.008.192.024.008.016.032.32.072.912.472-.56.94-.84 1.404-.84.464 0 .744.092.84.276 0 .176-.14.444-.42.804-.088.12-.14.18-.156.18l-.96-.348h-.072c-.176 0-.324.088-.444.264-.12.176-.18.424-.18.744v2.532c0 .144.06.248.18.312s.368.096.744.096l.108.48L10.663 9l-1.368.036-.096-.48c.384-.032.612-.064.684-.096.08-.04.12-.144.12-.312V5.34c0-.288-.052-.488-.156-.6-.104-.112-.268-.168-.492-.168z"
                  stroke="currentColor"
                  opacity="1"
                  pathLength="1"
                  stroke-dashoffset="0px"
                  stroke-dasharray="1px 1px"
                ></path>
              </svg>
            </Link>
          )}
          {locale === "ar" && (
            <Link
              className="relative inline-flex items-center duration-100 border-dashed justify-center whitespace-nowrap rounded text-sm font-medium dark:ring-offset-dark-500 ring-offset-light-500 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-900 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 text-dark-500 dark:text-dark-200 dark:hover:bg-dark-800 dark:active:bg-dark-700 hover:bg-light-400 acitve:bg-light-300 h-6 w-6"
              data-state="closed"
              href={switchToEnglish()}
              onMouseEnter={() => handleMouseEnter("changeToEnglish")}
              onMouseLeave={() => handleMouseLeave("changeToEnglish")}
            >
              {isHovered.changeToEnglish && (
                <div className="absolute bottom-[-35px] left-1/2 -translate-x-1/2">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.5 }}
                    transition={{
                      type: "spring",
                      stiffness: 300,
                      damping: 20,
                    }}
                    className="motion_div header bg-white text-center text-black text-xs font-medium py-1 px-2 rounded shadow-lg whitespace-nowrap"
                  >
                    تغيير اللغة إلى الإنجليزية
                  </motion.div>
                </div>
              )}
              <svg
                width={15}
                height={10}
                viewBox="0 0 15 10"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4.704 1.008l-1.356.012c-.56.024-.84.088-.84.192v3c0 .08.04.12.12.12h1.908c.192 0 .32-.088.384-.264.072-.184.108-.52.108-1.008L5.424 3 5.4 4.596l.024 1.476-.396.06c0-.472-.028-.776-.084-.912-.056-.136-.192-.204-.408-.204H2.628c-.08 0-.12.036-.12.108v2.52c0 .352.072.576.216.672.144.088.46.132.948.132h1.164c.608 0 1.084-.14 1.428-.42.344-.288.616-.728.816-1.32l.408.072c0 .144-.104.552-.312 1.224-.208.664-.356.996-.444.996l-3.06.024c-.208 0-.816-.008-1.824-.024l-1.332.036-.096-.528c.448-.048.72-.092.816-.132.104-.048.164-.16.18-.336v-6.6c0-.168-.056-.28-.168-.336-.112-.056-.372-.1-.78-.132L.36.444l1.5.036h1.932l2.964.012c.056.12.084.388.084.804 0 .416-.02.844-.06 1.284l-.384-.036c-.096-.568-.272-.964-.528-1.188-.256-.232-.644-.348-1.164-.348zm3.725 3.564l-.18.012-.108-.348c.56-.136.972-.272 1.236-.408l.444-.228c.104 0 .164.008.18.024.032.032.056.288.072.768a6.73 6.73 0 011.008-.516c.296-.12.616-.18.96-.18 1.112 0 1.668.596 1.668 1.788v2.664c0 .144.036.244.108.3.072.048.248.084.528.108l.108.48L13.277 9l-1.296.036-.096-.48c.384-.032.612-.064.684-.096.08-.04.12-.144.12-.312V5.892c0-.512-.1-.868-.3-1.068-.2-.2-.516-.3-.948-.3-.432 0-.88.112-1.344.336v3.288c0 .144.036.244.108.3.072.048.248.084.528.108l.108.48L9.665 9l-1.296.036-.096-.48c.384-.032.612-.064.684-.096.08-.04.12-.144.12-.312V5.34c0-.288-.052-.488-.156-.6-.104-.112-.268-.168-.492-.168z"
                  stroke="currentColor"
                  opacity={1}
                  pathLength={1}
                  strokeDashoffset="0px"
                  strokeDasharray="1px 1px"
                />
              </svg>
            </Link>
          )}
        </section>
      </header>
    </>
    // END HEADER SECTION
  );
}
