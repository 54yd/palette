import { promises as fs } from 'fs';
import { join } from 'path';
import { parseText } from './parser';

async function createFile(filePath: string, content: string) {
  const dir = join(process.cwd(), filePath, '..');
  await fs.mkdir(dir, { recursive: true });
  await fs.writeFile(join(process.cwd(), filePath), content.trim(), 'utf8');
}

export async function parseTextAndCreateFiles(text: string) {
  const parsedData = parseText(text);

  for (const key in parsedData) {
    const { path, content } = parsedData[key];
    await createFile(path, content);
  }
}
