import { Layout } from "antd";
import { Content } from "antd/es/layout/layout";
import React, { ReactNode } from "react";
import MenuSider from "./MenuSider";

interface CustomLayoutProps {
  children: ReactNode;
}

const CustomLayout: React.FC<CustomLayoutProps> = ({ children }) => {
  return (
    <Layout style={{ margin: 0, padding: 0 }}>
      <MenuSider />
      <Content>{children}</Content>
    </Layout>
  );
};

export default CustomLayout;
