import { NextResponse } from "next/server";
import { connectMongoDB } from "../../../../lib/mongodb";
import PostModal from "../../../../lib/models/Post";

export async function GET(req, { params }) {
  try {
    await connectMongoDB();
    const { id } = params;
    const post = await PostModal.findById(id).lean();

    if (!post) {
      return NextResponse.json({ message: "Post not found" }, { status: 404 });
    }

    return NextResponse.json(post);
  } catch (error) {
    console.error("Error fetching post:", error);
    return NextResponse.json(
      { message: "Failed to fetch post" },
      { status: 500 }
    );
  }
}
