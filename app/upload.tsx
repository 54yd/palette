import React from 'react';
import { Card, Row, Col } from 'antd';
import DropZone from '@/_components/DropZone';

const UploadPage = () => {
  return (
    <Row justify="start" align="middle" style={{ minHeight: '10vh' }}>
      <Col>
        <Card title="Upload Your Files" style={{ width: '500px' }}>
          <DropZone />
        </Card>
      </Col>
    </Row>
  );
};

export default UploadPage;
