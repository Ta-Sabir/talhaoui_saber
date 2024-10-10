"use client";

import { useLocale, useTranslations } from "next-intl";
import { CopyButton, SocialMediaButtons, SocialShareButtons } from "..";
import Link from "next/link";

// BlogContent component that accepts post data as props
interface BlogContentProps {
  post: {
    titleAr: string;
    titleEn: string;
    contentAr: string;
    contentEn: string;
    createdAt: string;
  };
}

export function BlogContent({ post }: BlogContentProps) {
  const locale = useLocale();
  const t = useTranslations("BlogContent");

  return (
    <>
      <article className="prose w-full max-w-2xl">
        <header className="mb-4 border-x border-dashed border-light-400 bg-gradient-to-t from-light-50 via-white to-light-50 p-4 dark:border-dark-700 dark:from-dark-900 dark:via-dark-800 dark:to-dark-900">
          <nav className="muted-text flex w-full max-w-2xl select-none gap-2">
            <Link
              className="text-sm !text-light-950 !no-underline hover:!text-dark-50 dark:!text-dark-50 dark:hover:!text-light-950"
              href="/"
            >
              {t("home")}
            </Link>
            <span className="text-sm text-primary-500/50">&gt;</span>
            <Link
              className="text-sm !text-light-950 !no-underline hover:!text-dark-50 dark:!text-dark-50 dark:hover:!text-light-950"
              href="/ar/blog"
            >
              {t("blog")}
            </Link>
            <span className="text-sm text-primary-500/50">&gt;</span>
            <div className="h-fit truncate px-1 text-sm">
              {locale === "ar" ? `${post.titleAr}` : `${post.titleEn}`}
            </div>
          </nav>
          <h1 className="m-0 mb-2">
            {locale === "ar" ? `${post.titleAr}` : `${post.titleEn}`}
          </h1>
          <section className="flex w-full items-center justify-end gap-4 mb-4">
            <SocialMediaButtons />
          </section>
          <div className="flex flex-col justify-between text-xs md:flex-row border-t border-dashed border-light-500 pt-2 dark:border-[#191919]">
            <p className="m-0 w-full text-light-900">
              {t("writed")}{" "}
              <Link
                className="!px-0 font-semibold hover:underline hover:decoration-[#0072d3]"
                href="/"
              >
                {t("saber")}
              </Link>{" "}
              {t("in")}{" "}
              <span className="font-bold text-primary-600">
                {" "}
                {new Date(post.createdAt).toLocaleDateString("en-US", {
                  day: "2-digit",
                  month: "2-digit",
                  year: "numeric",
                })}
              </span>
              .
            </p>
          </div>
        </header>
        <div
          className="prose lg:prose-xl p-1 py-4 sm:p-4"
          dangerouslySetInnerHTML={{
            __html: locale === "ar" ? post.contentAr : post.contentEn,
          }}
        />
        {/* <PostContent /> */}
        <footer className="mb-10 mt-4 border-x border-dashed border-light-400 bg-gradient-to-t from-light-50 via-white to-light-50 p-4 dark:border-dark-700 dark:from-dark-900 dark:via-dark-800 dark:to-dark-900">
          <h6 className="pb-4 !text-sm !font-bold !text-dark-900 dark:!text-light-50">
            - {t("share")}{" "}
          </h6>
          {/* <section className="flex w-full items-center justify-evenly gap-4">
              <button
                className="inline-flex items-center duration-100 border-dashed justify-center whitespace-nowrap rounded text-sm font-medium dark:ring-offset-dark-500 ring-offset-light-500 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-900 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-dark-50 hover:text-light-900 text-dark-50 hover:bg-dark-400 dark:hover:bg-dark-800 dark:hover:text-dark-100 dark:active:bg-dark-700 hover:border-transparent active:bg-dark-300 dark:active:text-dark-50 active:text-light-600 h-8 w-8 !h-8 !w-8 p-2"
                data-state="closed"
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
                  <path d="M18.3643 15.5353L16.95 14.1211L18.3643 12.7069C20.3169 10.7543 20.3169 7.58847 18.3643 5.63585C16.4116 3.68323 13.2458 3.68323 11.2932 5.63585L9.87898 7.05007L8.46477 5.63585L9.87898 4.22164C12.6127 1.48797 17.0448 1.48797 19.7785 4.22164C22.5121 6.95531 22.5121 11.3875 19.7785 14.1211L18.3643 15.5353ZM15.5358 18.3638L14.1216 19.778C11.388 22.5117 6.9558 22.5117 4.22213 19.778C1.48846 17.0443 1.48846 12.6122 4.22213 9.87849L5.63634 8.46428L7.05055 9.87849L5.63634 11.2927C3.68372 13.2453 3.68372 16.4112 5.63634 18.3638C7.58896 20.3164 10.7548 20.3164 12.7074 18.3638L14.1216 16.9496L15.5358 18.3638ZM14.8287 7.75717L16.2429 9.17139L9.17187 16.2425L7.75766 14.8282L14.8287 7.75717Z" />
                </svg>
              </button>
              <button
                data-state="closed"
                className="react-share__ShareButton"
                style={{
                  backgroundColor: "transparent",
                  border: "none",
                  padding: 0,
                  font: "inherit",
                  color: "inherit",
                  cursor: "pointer",
                }}
              >
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
                className="react-share__ShareButton"
                style={{
                  backgroundColor: "transparent",
                  border: "none",
                  padding: 0,
                  font: "inherit",
                  color: "inherit",
                  cursor: "pointer",
                }}
              >
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
                className="react-share__ShareButton"
                style={{
                  backgroundColor: "transparent",
                  border: "none",
                  padding: 0,
                  font: "inherit",
                  color: "inherit",
                  cursor: "pointer",
                }}
              >
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
            </section> */}

          <section className="flex w-full items-center justify-evenly gap-4">
            <CopyButton text={post.contentAr} />
            <SocialShareButtons />
          </section>

          <section className="mt-8 border-t border-dashed border-light-500 pt-4 dark:border-dark-700">
            <h6 className="!text-sm !font-bold !text-dark-900 dark:!text-light-50">
              - {t("aboutTitle")}
            </h6>
            <p className="text-sm">{t("aboutContent")}</p>
          </section>
        </footer>
      </article>
    </>
  );
}
