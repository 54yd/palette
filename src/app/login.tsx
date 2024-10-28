"use client";

import React, { useEffect, useState, Suspense } from "react";
import { Avatar, Button, Row, Col, Card } from "antd";
import { useSession, signIn, signOut } from "next-auth/react";
import { motion } from "framer-motion"; // Import Framer Motion

import useIsMounted from "@/common/utils/useIsMounted"; // Import mountifyProps

const LoginPage = () => {
  const { data: session } = useSession();

  //  const [_opacity, _setOpacity] = useState(0);

  const [isMounted, isUnmounted, m] = useIsMounted();

  // useEffect(() => {
  //   if (_opacity === 100) _setOpacity(0)
  //   else if (_opacity === 0) _setOpacity(100)
  // }, [])

  const handleLogin = async () => {
    if (session) {
      await signOut();
    } else {
      await signIn("github");
    }
  };

  //const cn = `opacity-${_opacity} transition-opacity duration-500 ease-in-out`
  const username = session?.user?.name || "ANON";

  const motionProps = {
    initial: { y: 20, opacity: 0 },
    animate: { y: 0, opacity: 1 },
    transition: { ease: "easeInOut", duration: 0.5 },
  };

  const fadeInProps = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    transition: { duration: 0.5 },
  }; // Add the missing closing curly brace here

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Row justify="start" align="middle" style={{ minHeight: "10vh" }}>
        <motion.div
          {...m({ ...motionProps, transition: { duration: 0.45 * 2 } })}
        >
          <Avatar className="bg-slate-500 align-middle" size="default" gap={5}>
            {session ? username[0].toUpperCase() : "X"}
          </Avatar>
        </motion.div>
        <motion.div
          {...m({ ...motionProps, transition: { duration: 0.45 * 3 } })}
        >
          {"　"}
          {session ? username : "NO NAME"}
          {"　"}
        </motion.div>

        <motion.div {...m(fadeInProps)}>
          <Button
            type="primary"
            onClick={async () => {
              await handleLogin();
            }}
            className=""
          >
            {session ? `Sign out ${session.user?.name}` : "Sign in with GitHub"}
          </Button>
        </motion.div>

        <br />
        <br />
        <Card className="bg-slate-500 text-white">
          <motion.div {...m(motionProps)}>
            <h1 className="text-4xl">Welcome to Next.js</h1>
            <p className="text-lg">This is a simple login page with GitHub.</p>
          </motion.div>
        </Card>
      </Row>
    </Suspense>
  );
};

export default LoginPage;
