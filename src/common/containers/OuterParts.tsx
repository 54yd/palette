import React from "react";
import { Layout, Menu } from "antd";
const { Header, Content, Footer } = Layout;

const AppHeader = ({
  menuItems,
  onMenuClick,
}: {
  menuItems: string[];
  onMenuClick: (page: string) => void;
}) => (
  <Header style={{ backgroundColor: "#001529", padding: "0 50px" }}>
    <div
      style={{
        float: "left",
        color: "white",
        fontSize: "20px",
        fontWeight: "bold",
      }}
    ></div>
    <Menu theme="dark" mode="horizontal" style={{ lineHeight: "64px" }}>
      {menuItems.map((item, index) => (
        <Menu.Item key={index} onClick={() => onMenuClick(item)}>
          {item}
        </Menu.Item>
      ))}
    </Menu>
  </Header>
);

const AppFooter = () => (
  <Footer style={{ textAlign: "center" }}>54yd - Straydrop411 2024</Footer>
);

export { AppHeader, AppFooter };
