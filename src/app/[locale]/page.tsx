import { Hero, Tools, Contact, Blog, Projects } from "@/components";

export default function Home() {
  return (
    <>
      <main className="relative flex min-h-screen w-full flex-col gap-5 overflow-hidden rounded px-6 pt-10 sm:px-20 md:pt-20 lg:px-32 xl:px-64">
        <Hero />
        <Projects />
        <Tools />
        <Contact />
      </main>
      <Blog />
    </>
  );
}
