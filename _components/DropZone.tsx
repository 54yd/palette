'use client'
import React, { useState } from 'react';
import { Upload, Button } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import { parseText } from './utils/parser';
import { saveFiles } from './utils/fileHandler';

const DropZone = () => {
  const [parsedData, setParsedData] = useState<Record<string, { path: string, content: string }> | null>(null);

  const handleUpload = (file: File) => {
    const reader = new FileReader();
    reader.onload = (event) => {
      const text = event.target?.result as string;
      const parsed = parseText(text);
      setParsedData(parsed);
    };
    reader.readAsText(file);
    return false; // Prevent automatic upload
  };

  const handleSaveFiles = async () => {
    if (parsedData) {
      await saveFiles(parsedData);
    }
  };

  return (
    <>
      <Upload beforeUpload={handleUpload} multiple={false} showUploadList={false}>
        <Button icon={<UploadOutlined />}>Click to Upload</Button>
      </Upload>
      {parsedData && (
        <Button onClick={handleSaveFiles} type="primary" style={{ marginTop: '20px' }}>
          Save Files
        </Button>
      )}
    </>
  );
};

export default DropZone;
