import PageHeader from "@/components/pageLayout/PageHeader";
import { Layout } from "antd";
import { FC } from "react";

const UnionPage: FC = () => {
  return (
    <Layout className="layout" style={{ minHeight: "100vh" }}>
      <PageHeader title={"連合"} />
    </Layout>
  );
};

export default UnionPage;
