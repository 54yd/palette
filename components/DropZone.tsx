import React, { useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import { parseTextAndCreateFiles } from '../utils/fileCreator';

const DropZone = () => {
  const onDrop = useCallback((acceptedFiles: File[]) => {
    const file = acceptedFiles[0];
    const reader = new FileReader();

    reader.onload = async (event) => {
      const text = event.target?.result as string;
      await parseTextAndCreateFiles(text);
    };

    reader.readAsText(file);
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  return (
    <div {...getRootProps()} className="border-dashed border-4 border-gray-600 p-6 rounded-md">
      <input {...getInputProps()} />
      {isDragActive ? (
        <p>Drop the files here...</p>
      ) : (
        <p>Drag & drop some files here, or click to select files</p>
      )}
    </div>
  );
};

export default DropZone;
