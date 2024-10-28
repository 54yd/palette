import React from "react";
import MainPage from "@/src/app/page";
import UploadPage from "../upload";
import LoginPage from "../login";
import { Card } from "antd";

export default function Page() {
  return (
    <Card title="Home Page">
      <UploadPage />
      <LoginPage />
    </Card>
  );
}
