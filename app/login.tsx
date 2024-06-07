'use client';

import React, { useEffect, useState } from 'react';
import { Avatar, Button, Row, Col, Card } from 'antd';
import { useSession, signIn, signOut } from 'next-auth/react';
const LoginPage = () => {
  const { data: session } = useSession();

  const [_opacity, _setOpacity] = useState(0);

  useEffect(() => {
    _opacity === 100 ? _setOpacity(0) : _setOpacity(100)
  }, [])

  const handleLogin = () => {
    if (session) {
      signOut();
    } else {
      signIn('github');
    }
  };

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     set_opacity((prev) => (prev + 1) % 1000);
  //   }, 1000);
  //   return () => clearInterval(interval);
  // }, []);

  const cn = `opacity-${_opacity} transition-opacity duration-500 ease-in-out`
  const username = session?.user?.name || 'ANON';
  
  return (
    <Row justify="start" align="middle" style={{ minHeight: '10vh' }}>
      
    
         <Avatar className="bg-slate-500 align-middle" size="default" gap={5}>
          {session ? username[0].toUpperCase() : "X" }
        </Avatar>
          {"　"}{session ? username : "NO NAME" }{"　"}
        <div className={cn}>
          <Button type="primary" onClick={handleLogin} className="">
            {session ? `Sign out ${session.user?.name}` : 'Sign in with GitHub'}
          </Button>
        </div>
      
      
    </Row>
  );
};

export default LoginPage;
