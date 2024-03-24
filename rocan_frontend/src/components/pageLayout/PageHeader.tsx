import useBreadcrumbs from "@/hooks/useBreadcrumbs";
import { Breadcrumb, Typography } from "antd";
import React from "react";

const { Title } = Typography;

interface PageHeaderProps {
  title: string;
}

const PageHeader: React.FC<PageHeaderProps> = ({ title }) => {
  const breadcrumbs = useBreadcrumbs();
  return (
    <div>
      <Title level={2}>{title}</Title>
      <Breadcrumb>
        {breadcrumbs.map((item, index) => (
          <Breadcrumb.Item key={index} href={item.path}>
            {item.breadcrumbName}
          </Breadcrumb.Item>
        ))}
      </Breadcrumb>
    </div>
  );
};

export default PageHeader;
