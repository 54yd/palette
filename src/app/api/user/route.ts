// app/api/user/route.ts
import { NextRequest, NextResponse } from "next/server";
import prisma from "@/common/lib/prisma";
//import { User } from "@prisma/client";

interface UserRequestPayload {
  email: string;
  password: string;
  name: string;
}

export async function GET() {
  const users = await prisma.user.findMany();
  return NextResponse.json(users, { status: 200 });
}

export async function POST(req: NextRequest) {
  const { email, password, name }: UserRequestPayload = await req.json();
  const user = await prisma.user.create({
    data: {
      email,
      password,
      name,
    },
  });
  return NextResponse.json(user, { status: 201 });
}
