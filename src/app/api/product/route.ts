// app/api/product/route.ts
import { NextRequest, NextResponse } from "next/server";
//import prisma from "@/common/lib/prisma";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

// Handle POST requests to create a new product
// export async function POST(req: NextRequest) {
//   const { name, description, price, stock, categoryId } = await req.json();

//   const product = await prisma.product.create({
//     data: {
//       name,
//       description,
//       price,
//       stock,
//       category: {
//         connect: { id: categoryId },
//       },
//     },
//   });

//   return NextResponse.json(product, { status: 201 });
// }

export async function POST(req: NextRequest) {
  const { name, description, price, stock, categoryId } = await req.json();

  try {
    const product = await prisma.product.create({
      data: {
        name,
        description,
        price: parseFloat(price),
        stock: parseInt(stock, 10),
        categoryId,
      },
    });
    return NextResponse.json(product, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to create product at prisma" },
      { status: 500 }
    );
  }
}

// Handle GET requests to fetch all products
export async function GET() {
  //const { page, pageSize } = await req.json();
  //const skip = (page - 1) * pageSize;
  try {
    const skip = 0;
    const take = 10;
    const products = await prisma.product.findMany({});
    console.log(products);
    return NextResponse.json(products, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to fetch products from prisma" },
      { status: 500 }
    );
  }
}
