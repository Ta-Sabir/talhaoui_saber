import { Metadata } from "next";
import { BlogPageContent } from "@/components/Blog/BlogPageContent";
import BlogPageAside from "@/components/Blog/BlogPageAside";

export const metadata: Metadata = {
  title: "مدونة طلحاوي صابر التقنية | رؤية في تطوير و هندسة البرمجيات",
  description:
    "مدونة تركز على تطوير البرمجيات وهندستها، تقدم رؤى وأفكار جديدة.",
};

export interface Post {
  _id: string;
  titleAr: string;
  titleEn: string;
  contentAr: string;
  contentEn: string;
  createdAt: string;
}

async function fetchPosts(): Promise<Post[]> {
  try {
    const response = await fetch("../../api/posts", {
      cache: "no-store",
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch posts: ${response.statusText}`);
    }

    return (await response.json()) as Post[];
  } catch (error) {
    console.error("Error fetching posts:", error);
    return []; // إرجاع مصفوفة فارغة في حالة الخطأ
  }
}

export default async function BlogPage() {
  const posts = await fetchPosts();

  return (
    <main className="px-6 pt-10 sm:px-12 md:px-16 lg:px-36">
      <div className="mb-12 flex min-h-screen flex-col lg:grid lg:grid-cols-4 gap-4">
        <BlogPageAside />
        <BlogPageContent posts={posts} />
      </div>
    </main>
  );
}
