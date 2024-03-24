import PageHeader from "@/components/pageLayout/PageHeader";
import { Layout } from "antd";
import { FC } from "react";

const GovernmentPage: FC = () => {
  return (
    <Layout className="layout" style={{ minHeight: "100vh" }}>
      <PageHeader title={"政府"} />
    </Layout>
  );
};

export default GovernmentPage;
