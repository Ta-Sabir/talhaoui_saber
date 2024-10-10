"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import Link from "next/link";
import { projectsData } from "../contents/projectsData";
import useHover from '../hooks/useHover';


export default function Projects() {
  const t = useTranslations("Projects");
  const { isHovered, handleMouseEnter, handleMouseLeave } = useHover();

  return (
    // START PROJECTS COMPONENT
    <section id="projects" className="grid gap-3 md:grid-cols-2">
      <section>
        <h3 className="label-text font-semibold">{t("title")}</h3>
        <div>
          {projectsData.map((project) => {
            return (
              <div key={project.id} className="relative">
                -{/* */}{" "}
                <Link
                  target="_blank"
                  className="link"
                  data-state="closed"
                  href={project.href}
                  onMouseEnter={() => handleMouseEnter(project.id)}
                  onMouseLeave={() => handleMouseLeave(project.id)}
                >
                  {project.title}
                </Link>
                {isHovered[project.id] && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.5 }}
                    transition={{
                      type: "spring",
                      stiffness: 300,
                      damping: 20,
                    }}
                    className="motion_div absolute flex items-start gap-3 bg-white py-4 px-4 rounded shadow-lg z-20"
                  >
                    <section>
                      <div className="bg-black w-10 h-10 rounded-full flex items-center justify-center">
                        {/* <Image
                      alt="next auth"
                      width={30}
                      height={30}
                      style={{ color: "transparent" }}
                      src="/team.png"
                    /> */}
                      </div>
                    </section>
                    <div className="flex flex-col items-start justify-start space-y-1">
                      <h2 className="text-sm font-semibold text-black">
                        {project.title}
                      </h2>
                      <p className="text-sm"> {t(project.descriptionKey)}</p>
                      <div className="flex items-center pt-2">
                        <svg
                          stroke="currentColor"
                          fill="none"
                          strokeWidth={2}
                          viewBox="0 0 24 24"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="mx-2 h-4 w-4 opacity-70"
                          height="1em"
                          width="1em"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <rect
                            width={18}
                            height={18}
                            x={3}
                            y={4}
                            rx={2}
                            ry={2}
                          />
                          <line x1={16} x2={16} y1={2} y2={6} />
                          <line x1={8} x2={8} y1={2} y2={6} />
                          <line x1={3} x2={21} y1={10} y2={10} />
                          <path d="M8 14h.01" />
                          <path d="M12 14h.01" />
                          <path d="M16 14h.01" />
                          <path d="M8 18h.01" />
                          <path d="M12 18h.01" />
                          <path d="M16 18h.01" />
                        </svg>{" "}
                        <span className="text-muted-foreground text-xs">
                          {t(project.dateKey)}
                        </span>
                      </div>
                    </div>
                  </motion.div>
                )}
              </div>
            );
          })}
        </div>
      </section>
    </section>
    // END PROJECTS COMPONENT
  );
}
