import React, { Suspense } from "react";
import { Card, Row, Col } from "antd";
import DropZone from "@/common/components/DropZone";

const UploadPage = () => {
  return (
    // <Suspense fallback={<div>Loading...</div>}>
    <Row justify="start" align="middle" style={{ minHeight: "10vh" }}>
      <Col>
        <Card title="Upload Your Files" style={{ width: "500px" }}>
          <DropZone />
        </Card>
      </Col>
    </Row>
    // </Suspense>
  );
};

export default UploadPage;
