import { BlogContent } from "@/components/Blog/BlogContent";
import { notFound } from "next/navigation";

interface Post {
  id: string;
  titleAr: string;
  titleEn: string;
  contentAr: string;
  contentEn: string;
  createdAt: string;
}

async function fetchPost(id: string): Promise<Post | null> {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";
  const response = await fetch(`${baseUrl}/api/posts/${id}`);

  if (!response.ok) {
    return null;
  }

  return response.json();
}

export default async function PostPage({ params }: { params: { id: string } }) {
  const { id } = params;

  // FETCH POST
  const post = await fetchPost(id);

  if (!post) {
    return notFound();
  }

  return (
    <>
      <main className="px-6 pt-10 sm:px-12 md:px-16 lg:px-36">
        <div className="flex min-h-[60vh] w-full items-center justify-center py-6 xs:py-10">
          <BlogContent post={post} />
          <div
            className="fixed inset-0 h-1 origin-[0%] bg-gradient-to-r from-primary-900 via-primary-700 to-primary-500"
            style={{ transform: "scaleX(0) translateZ(0px)" }}
          />
        </div>
      </main>
    </>
  );
}
