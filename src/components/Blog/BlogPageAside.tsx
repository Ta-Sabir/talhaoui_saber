"use client";

import { useLocale, useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";

export default  function BlogPageAside() {
  const locale = useLocale();
  const t = useTranslations("BlogPageAside");
  return (
    <aside className="top-3 col-span-4 flex h-fit w-full flex-col items-end justify-end gap-6 p-3 lg:col-span-1">
      <section className="w-full">
        <h3 className="label-text mb-2 font-semibold">- {t("tags")} :</h3>
        <aside>
          <section className="flex flex-wrap gap-3">
            <span className="inline-flex items-center duration-100 border-dashed justify-center whitespace-nowrap text-sm font-medium dark:ring-offset-dark-500 ring-offset-light-500 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-900 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary-500 hover:bg-[#007eeb] text-white hover:text-dark-600 active:text-dark-900 active:bg-primary-300 h-6 rounded px-3 cursor-pointer">
              {t("all")}
            </span>
            <span className="inline-flex items-center duration-100 border-dashed justify-center whitespace-nowrap text-sm font-medium dark:ring-offset-dark-500 ring-offset-light-500 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-900 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary-500 hover:bg-[#007eeb] text-white hover:text-dark-600 active:text-dark-900 active:bg-primary-300 h-6 rounded px-3 cursor-pointer">
              {t("coding")}
            </span>
            <span className="inline-flex items-center duration-100 border-dashed justify-center whitespace-nowrap text-sm font-medium dark:ring-offset-dark-500 ring-offset-light-500 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-900 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary-500 hover:bg-[#007eeb] text-white hover:text-dark-600 active:text-dark-900 active:bg-primary-300 h-6 rounded px-3 cursor-pointer">
              {t("design")}
            </span>
          </section>
          <section className="adver_area relative text-white mt-6 p-6 rounded-3xl">
            <div className="mb-[125px] text-center">
              <h2 className="text-lg font-bold">
                {locale === "ar"
                  ? "لديك مشروع جديد ؟"
                  : "Do you have a new project?"}
              </h2>
              <p className="font-normal mt-2">
                {locale === "ar"
                  ? "  تواصل معي الآن و احصل على عرض ممتاز !"
                  : "Contact me now and get an excellent offer!"}
              </p>
              <Link
                target="_blank"
                title="selance.com website link"
                className="mt-3 mx-auto flex w-[120px] items-center justify-center rounded bg-[#0040ff] text-white py-2 font-medium hover:bg-[#023ce8] hover:text-light-200 active:bg-selance_color/80 active:text-light-50"
                href="https://selance.com/ar"
              >
                {locale === "ar" ? "تواصل معي" : "Contact Me"}
              </Link>
            </div>
            <Image
              src={"/3d_man.png"}
              width={150}
              height={150}
              alt="Picture of the author"
              className="absolute left-[50%] right-[50%] translate-x-1/2 bottom-0"
            />
          </section>
        </aside>
      </section>
    </aside>
  );
}
