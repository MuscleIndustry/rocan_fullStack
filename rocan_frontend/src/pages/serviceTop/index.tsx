import PageHeader from "@/components/pageLayout/PageHeader";
import { Layout } from "antd";
import { Content, Footer } from "antd/es/layout/layout";
import { FC } from "react";
import { NavigationBar } from "./NavigationBar";
import { RegistrationPromotion } from "./RegistrationPromotion";
import { ServiceIntroduction } from "./ServiceIntroduction";

const ServiceTop: FC = () => (
  <Layout className="layout" style={{ minHeight: "100vh" }}>
    <PageHeader title="サービストップ" />
    <NavigationBar />
    <Content style={{ padding: "0 50px" }}>
      <ServiceIntroduction />
      <RegistrationPromotion />
    </Content>
    <Footer style={{ textAlign: "center" }}>
      Ant Design ©2024 Created by Ant UED
    </Footer>
  </Layout>
);

export default ServiceTop;
