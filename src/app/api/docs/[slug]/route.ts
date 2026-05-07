import { NextResponse } from "next/server";
import { docsData } from "@/data/docsData";

export async function GET(
  request: Request,
  { params }: { params: { slug: string } }
) {
  const { slug } = params;

  // Simulate slight network latency
  await new Promise((resolve) => setTimeout(resolve, 300));

  const doc = docsData.find((d) => d.slug === slug);

  if (!doc) {
    return NextResponse.json(
      { success: false, message: "Document not found" },
      { status: 404 }
    );
  }

  return NextResponse.json({ success: true, data: doc });
}
