import { pathToBreadcrumbName } from "@/hooks/useBreadcrumbs/pathToBreadcrumbName";
import { Button } from "antd";
import React from "react";
import { Link } from "react-router-dom";

const NavigationButtons: React.FC = () => {
  return (
    <div style={{ margin: "20px 0" }}>
      {Object.entries(pathToBreadcrumbName).map(([path, name]) => (
        <Button key={path} style={{ margin: "5px" }}>
          <Link to={path}>{name}</Link>
        </Button>
      ))}
    </div>
  );
};

export default NavigationButtons;
