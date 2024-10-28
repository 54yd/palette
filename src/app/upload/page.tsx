import React from "react";
import { Suspense } from "react";

import LoginPage from "@/app/login";
import UploadPage from "@/app/upload";
import FormProduct from "@/app/FormProduct";
export default function Page() {
  return (
    <>
      <UploadPage />
      <FormProduct />
      <LoginPage />
    </>
  );
}
