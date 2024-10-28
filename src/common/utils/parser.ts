const extensionWhitelist = ['js', 'ts', 'jsx', 'tsx', 'css', 'json', 'html', 'py'];

export function parseText(text: string): Record<string, { path: string, content: string }> {
  const lines = text.split('\n');
  const parsedData: Record<string, { path: string, content: string }> = {};

  let currentFilePath = '';
  let currentContent = '';

  lines.forEach(line => {
    const trimmedLine = line.trim();

    if (extensionWhitelist.some(ext => trimmedLine.endsWith(`.${ext}`))) {
      if (currentFilePath) {
        parsedData[currentFilePath] = { path: currentFilePath, content: currentContent.trim() };
      }
      currentFilePath = trimmedLine;
      currentContent = '';
    } else if (currentFilePath) {
      currentContent += `${line}\n`;
    }
  });

  if (currentFilePath) {
    parsedData[currentFilePath] = { path: currentFilePath, content: currentContent.trim() };
  }

  return parsedData;
}