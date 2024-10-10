"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { toolsData, svgIcons } from "../contents/data";
import useHover from '../hooks/useHover';
import { useTranslations } from "next-intl";
import Link from "next/link";

export default function Tools() {
  const t = useTranslations("Tools");
  const { isHovered, handleMouseEnter, handleMouseLeave } = useHover();

  return (
    <section className="tools_section">
      <h3 className="label-text mb-2 font-semibold">{t("title")}</h3>
      <div className="flex flex-wrap gap-1">
        {toolsData.map((tool) => (
          <div
            key={tool.id}
            className="relative"
            onMouseEnter={() => handleMouseEnter(tool.id)}
            onMouseLeave={() => handleMouseLeave(tool.id)}
          >
            <Link
              target="_blank"
              title={tool.name}
              className="flex h-[40px] w-[40px] items-center justify-center rounded bg-light-950 grayscale transition-all duration-100 hover:grayscale-0 dark:bg-dark-800"
              href={tool.url}
            >
              {tool.id === "nextauth" ? (
                <Image
                  alt="next auth"
                  width={18}
                  height={18}
                  src="/next_auth.png"
                />
              ) : (
                svgIcons[tool.id]
              )}
            </Link>
            {isHovered[tool.id] && (
              <div className="absolute top-[-35px] left-1/2 -translate-x-1/2">
                <motion.div
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.5 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className="motion_div bg-white text-center text-black text-xs font-medium py-1 px-2 rounded shadow-lg whitespace-nowrap"
                >
                  {tool.name}
                </motion.div>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
