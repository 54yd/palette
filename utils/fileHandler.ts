export async function saveFiles(parsedData: Record<string, { path: string, content: string }>) {
  try {
    // Request the user to select a directory
    const dirHandle = await (window as any).showDirectoryPicker();
    if (!dirHandle) throw new Error('No directory selected');

    for (const [relativePath, fileData] of Object.entries(parsedData)) {
      const parts = relativePath.split('/');
      let currentDir = dirHandle;

      // Traverse through the directories and create them if they don't exist
      for (let i = 0; i < parts.length - 1; i++) {
        const part = parts[i];
        currentDir = await currentDir.getDirectoryHandle(part, { create: true });
      }

      // Create or overwrite the file
      const fileHandle = await currentDir.getFileHandle(parts[parts.length - 1], { create: true });
      const writable = await fileHandle.createWritable();
      await writable.write(fileData.content);
      await writable.close();
    }

    alert('Files and folders created successfully.');
  } catch (error) {
    console.error('Error writing files:', error);
    alert('Failed to create files and folders.');
  }
}
