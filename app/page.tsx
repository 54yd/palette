import '../styles/globals.css';
import React from 'react';
import LoginPage from './login';

import{ Card,Space }from "antd"
;
import { Header } from 'antd/es/layout/layout';
;
export default function HomePage() {
  return (
    <Card style={{ width: 'auto', margin: '30px',padding: 'auto',  }}>
    <Header className="text-center min-h-screen text-white overflow-hidden">
      <div className="text-center px-3 bg-gray-200">
          <div className="p-5">
          <Card className="text-left text-3xl font-bold bg-blue-600" >
            HEADER
          </Card>
          </div>
          <Card className="text-3xl font-bold">
            <LoginPage/>
          </Card>

      </div>
    </Header>
    </Card>
    
  );
}