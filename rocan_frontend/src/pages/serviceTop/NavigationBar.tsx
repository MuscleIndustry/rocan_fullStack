import { Layout, Menu } from "antd";
const { Header } = Layout;

export const NavigationBar = () => (
  <Header>
    <div className="logo" />
    <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["1"]}>
      <Menu.Item key="1">ホーム</Menu.Item>
      <Menu.Item key="2">サービス紹介</Menu.Item>
      <Menu.Item key="3">会員登録</Menu.Item>
    </Menu>
  </Header>
);
