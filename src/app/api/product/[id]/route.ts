// app/api/product/[id]/route.ts
import { NextRequest, NextResponse } from "next/server";
import prisma from "@/common/lib/prisma";

export async function GET(
  _: NextRequest,
  { params }: { params: { id: string } }
) {
  const { id } = params;

  const product = await prisma.product.findUnique({
    where: { id: id },
    include: { category: true, reviews: true },
  });

  if (!product) {
    return NextResponse.json({ error: "Product not found" }, { status: 404 });
  }

  return NextResponse.json(product, { status: 200 });
}
