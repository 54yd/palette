import { NextResponse } from "next/server";
import { promises as fs } from "fs";
import { join } from "path";
import { parseText } from "../../../common/utils/parser";

async function createFile(basePath: string, filePath: string, content: string) {
  const fullPath = join(basePath, filePath);
  const dir = join(fullPath, "..");
  await fs.mkdir(dir, { recursive: true });
  await fs.writeFile(fullPath, content.trim(), "utf8");
}

export async function POST(request: Request) {
  const { text, destinationPath } = await request.json();
  const parsedData = parseText(text);
  console.log("POSTED!");
  console.log(text);

  for (const key in parsedData) {
    const { path, content } = parsedData[key];
    await createFile(destinationPath, path, content);
  }
}

export const runtime = "nodejs"; // Ensure this is not attempted to be exported as static
