import { useTranslations } from "next-intl";
import Link from "next/link";

export default function Contact() {
  const t = useTranslations("Contact");
  return (
    // START CONTACT SECTION
    <section>
      <h3 className="mb-2">{t("title")}</h3>
      <section className="flex items-center gap-3">
        <Link
          className="contact_link inline-flex items-center justify-center gap-3 h-6 px-3 text-sm font-medium text-dark-500 border border-light-500 rounded duration-100 hover:bg-light-200 hover:text-dark-600 hover:border-transparent active:bg-light-100 active:text-dark-900 dark:text-light-500 dark:hover:bg-dark-300 dark:hover:text-light-200 dark:active:bg-dark-200 dark:active:text-light-50 dark:ring-offset-dark-500 ring-offset-light-500 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-900 focus-visible:ring-offset-2"
          href="tel:+213782903876"
        >
          {t("link1")}
          <svg
            stroke="currentColor"
            fill="none"
            strokeWidth={2}
            viewBox="0 0 24 24"
            strokeLinecap="round"
            strokeLinejoin="round"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
            <path d="M14.05 2a9 9 0 0 1 8 7.94" />
            <path d="M14.05 6A5 5 0 0 1 18 10" />
          </svg>
        </Link>

        <Link
          className="contact_link inline-flex items-center justify-center gap-3 h-6 px-3 text-sm font-medium text-dark-500 border border-light-500 rounded duration-100 hover:bg-light-200 hover:text-dark-600 hover:border-transparent active:bg-light-100 active:text-dark-900 dark:text-light-500 dark:hover:bg-dark-300 dark:hover:text-light-200 dark:active:bg-dark-200 dark:active:text-light-50 dark:ring-offset-dark-500 ring-offset-light-500 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-900 focus-visible:ring-offset-2"
          href="mailto:moncef@selance.com"
        >
          {t("link2")}
          <svg
            stroke="currentColor"
            fill="none"
            strokeWidth={2}
            viewBox="0 0 24 24"
            strokeLinecap="round"
            strokeLinejoin="round"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M21.2 8.4c.5.38.8.97.8 1.6v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V10a2 2 0 0 1 .8-1.6l8-6a2 2 0 0 1 2.4 0l8 6Z" />
            <path d="m22 10-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 10" />
          </svg>
        </Link>
      </section>
    </section>
    // END CONTACT SECTION
  );
}