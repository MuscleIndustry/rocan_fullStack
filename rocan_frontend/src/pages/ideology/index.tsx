import PageHeader from "@/components/pageLayout/PageHeader";
import { Layout } from "antd";
import { FC } from "react";

const IdeologyPage: FC = () => {
  return (
    <Layout className="layout" style={{ minHeight: "100vh" }}>
      <PageHeader title={"信念"} />
    </Layout>
  );
};

export default IdeologyPage;
