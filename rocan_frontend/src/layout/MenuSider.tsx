import { useIsMobile } from "@/hooks";
import {
  AppstoreOutlined,
  CalendarOutlined,
  LinkOutlined,
  MailOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import { Button, GetProp, Menu, MenuProps } from "antd";
import Sider from "antd/es/layout/Sider";
import React, { FC, useState } from "react";

type MenuItem = GetProp<MenuProps, "items">[number];

function getItem(
  label: React.ReactNode,
  key?: React.Key | null,
  icon?: React.ReactNode,
  children?: MenuItem[]
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
  } as MenuItem;
}

// TODO: メニューはデフォルトメニューとフィッチメニューを作る予定
const items: MenuItem[] = [
  getItem("Navigation One", "1", <MailOutlined />),
  getItem("Navigation Two", "2", <CalendarOutlined />),
  getItem("Navigation Two", "sub1", <AppstoreOutlined />, [
    getItem("Option 3", "3"),
    getItem("Option 4", "4"),
    getItem("Submenu", "sub1-2", null, [
      getItem("Option 5", "5"),
      getItem("Option 6", "6"),
    ]),
  ]),
  getItem("Navigation Three", "sub2", <SettingOutlined />, [
    getItem("Option 7", "7"),
    getItem("Option 8", "8"),
    getItem("Option 9", "9"),
    getItem("Option 10", "10"),
  ]),
  getItem(
    <a href="https://ant.design" target="_blank" rel="noopener noreferrer">
      Ant Design
    </a>,
    "link",
    <LinkOutlined />
  ),
];

const MenuSider: FC = () => {
  const [collapsed, setCollapsed] = useState<boolean>(true); // collapsedの状態をboolean型として定義
  const isMobile = useIsMobile();

  const isShowSider = !isMobile || !collapsed;

  const toggleSider = (): void => {
    setCollapsed(!collapsed);
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", zIndex: 10 }}>
      <Button
        className="site-layout-background"
        style={{ padding: 0, width: 80 }}
        onClick={toggleSider}
      >
        {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
      </Button>
      {isShowSider && (
        <Sider
          width={80}
          className="site-layout-background"
          trigger={null}
          collapsible
          collapsed={collapsed}
        >
          <Menu
            style={{ width: collapsed ? 80 : 256 }}
            mode="inline"
            items={items}
          />
        </Sider>
      )}
    </div>
  );
};
export default MenuSider;
