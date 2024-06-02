export function parseText(text: string): Record<string, { path: string, content: string }> {
  const lines = text.split('\n');
  const parsedData: Record<string, { path: string, content: string }> = {};

  let currentSection = '';

  lines.forEach(line => {
    if (line.startsWith(' ')) return; // skip invalid lines
    if (line.endsWith(':')) {
      currentSection = line.slice(0, -1).trim();
    } else if (currentSection) {
      if (!parsedData[currentSection]) {
        parsedData[currentSection] = { path: currentSection, content: '' };
      }
      parsedData[currentSection].content += line + '\n';
    }
  });

  return parsedData;
}
