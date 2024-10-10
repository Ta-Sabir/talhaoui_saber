"use client";

import { useLocale, useTranslations } from "next-intl";
import Link from "next/link";

interface Post {
  _id: string;
  titleAr: string;
  titleEn: string;
  contentAr: string;
  contentEn: string;
  createdAt: string;
}

interface BlogPageContentProps {
  posts: Post[];
}

export function BlogPageContent({ posts }: BlogPageContentProps) {
  const locale = useLocale();
  const t = useTranslations("BlogContent");

  const getTitle = (post: Post) =>
    locale === "ar" ? post.titleAr : post.titleEn;
  const getContent = (post: Post) =>
    locale === "ar" ? post.contentAr : post.contentEn;

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString(
      locale === "ar" ? "ar-EG" : "en-US",
      {
        day: "2-digit",
        month: "2-digit",
        year: "numeric",
      }
    );
  };

  return (
    <main className="col-span-4 flex w-full max-w-2xl flex-col border-t border-dashed border-light-400 dark:border-dark-700 lg:col-span-3 lg:border-x lg:border-t-0 xl:col-span-2">
      {posts.length === 0 ? (
        <h1>{t("noPosts")}</h1>
      ) : (
        posts.map((post) => (
          <article
            key={post._id}
            className="group flex w-full max-w-2xl overflow-hidden border-b border-dashed border-light-400 transition-all duration-75 hover:bg-white dark:border-dark-700 dark:hover:bg-dark-800"
          >
            <main className="flex w-full flex-col justify-between p-4">
              <header>
                <Link href={`/blog/${post._id}`}>
                  <h2 className="line-clamp-4 text-xl font-semibold text-dark-500 transition-all duration-75 hover:text-dark-950 dark:text-light-100 dark:hover:text-primary-500 sm:text-3xl">
                    {getTitle(post)}
                  </h2>
                </Link>
                <div
                  className="label-text mb-2 mt-1 line-clamp-2 text-sm"
                  dangerouslySetInnerHTML={{ __html: `${getContent(post)}...` }}
                />
              </header>
              <footer className="flex w-full items-center justify-between">
                <p className="muted-text text-xs font-light">
                  {t("writed")}{" "}
                  <span className="font-bold text-dark-500 dark:text-primary-500">
                    {t("saber")}{" "}
                  </span>
                  <span className="text-[0.6rem]">
                    {t("in")} {formatDate(post.createdAt)}
                  </span>
                </p>
                <section className="flex">
                  <Link
                    className="muted-text group flex w-fit items-center gap-1 !text-xs decoration-light-950 decoration-dashed underline-offset-2 transition-all duration-100 hover:decoration-dark-50 hover:underline-offset-2 active:decoration-dark-500 group-hover:underline dark:decoration-dark-50 dark:hover:decoration-light-950 dark:active:decoration-light-500"
                    href={`/blog/${post._id}`}
                  >
                    <p className="m-0 text-xs">
                      {locale === "ar" ? "اقرأ المزيد" : "Read More"}
                    </p>
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      strokeWidth={0}
                      viewBox="0 0 1024 1024"
                      className="opacity-0 group-hover:opacity-100"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M872 474H286.9l350.2-304c5.6-4.9 2.2-14-5.2-14h-88.5c-3.9 0-7.6 1.4-10.5 3.9L155 487.8a31.96 31.96 0 0 0 0 48.3L535.1 866c1.5 1.3 3.3 2 5.2 2h91.5c7.4 0 10.8-9.2 5.2-14L286.9 550H872c4.4 0 8-3.6 8-8v-60c0-4.4-3.6-8-8-8z" />
                    </svg>
                  </Link>
                </section>
              </footer>
            </main>
          </article>
        ))
      )}
    </main>
  );
}
