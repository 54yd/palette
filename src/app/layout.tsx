"use client";
import React, { ReactNode } from "react";
import { useRouter } from "next/navigation";

import RootContainer from "./_rootContainer";

import { Layout, Menu } from "antd";
import { Content } from "antd/lib/layout/layout";

import { AppHeader, AppFooter } from "@/common/containers/OuterParts";
//import NavigationEvents from "@/common/components/NavigationEvents";

const AppLayout = ({ children }: { children: ReactNode }) => {
  const router = useRouter();

  const menuItems = ["Home", "Upload", "User"];

  const handleMenuClick = (page: string) => {
    router.push(`/${page.toLowerCase()}`);
  };

  return (
    <RootContainer>
      {/* <NavigationEvents /> */}

      <Layout style={{ minHeight: "100vh" }}>
        <AppHeader menuItems={menuItems} onMenuClick={handleMenuClick} />{" "}
        {/*// Add the onMenuClick prop here**/}
        <Content style={{ padding: "50px", backgroundColor: "#fff" }}>
          {children}
        </Content>
        <AppFooter />
      </Layout>
    </RootContainer>
  );
};

export default AppLayout;
