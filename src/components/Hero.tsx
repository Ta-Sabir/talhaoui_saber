import { useTranslations } from "next-intl";
import Link from "next/link";

export default function Hero() {
  const t = useTranslations("Hero");
  return (
    // START HERO SECTION
    <>
      <section className="relative z-10 flex w-fit items-center gap-2 rounded-full border border-dashed border-light-400 bg-white px-2 text-xs backdrop-blur-xl dark:border-dark-700 dark:bg-dark-800/50">
        <div className="h-2 w-2 rounded-full bg-primary-500">
          <div className="h-2 w-2 animate-ping rounded-full bg-primary-500" />
        </div>
        <p>
          {t("subTitle")}
          {/* */}{" "}
          <Link
            className="text-primary-500 transition-all duration-75 hover:text-primary-400 hover:underline"
            href="/blog"
          >
            {t("here")}
          </Link>
        </p>
      </section>
      <section className="label-text flex flex-col gap-5 bg-gradient-to-b from-dark-900 via-dark-800 to-dark-500 bg-clip-text font-bold dark:from-light-50 dark:via-light-100 dark:to-light-500"
      >
        <h1 className="w-full text-5xl text-black md:text-7xl"
        >
          {" "}
          {t("title1")}
        </h1>
        <h2 className="w-full text-4xl text-[#191919] md:text-6xl mt-5">
          {t("title2")}
        </h2>
        <h3
          className="w-full text-3xl text-[#313131] md:text-5xl"
          style={{ lineHeight: "90px !important" }}
        >
          {t("title3")}
        </h3>
      </section>
    </>
    // END HERO SECTION
  );
}
