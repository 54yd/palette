
import React from 'react';
import { Suspense } from 'react'

import LoginPage from '@/app/login';
import UploadPage from '@/app/upload';
import DropZone from '@/components/DropZone';


export default function Page() {
  return (
    
    <>
    <Suspense fallback={<div>Loading...</div>}>
      <UploadPage />
      <LoginPage />
    </Suspense>
    </>
  );
}