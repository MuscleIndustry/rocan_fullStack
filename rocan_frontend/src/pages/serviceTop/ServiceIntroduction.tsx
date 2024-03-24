import { Button, Card, Col, Row } from "antd";

export const ServiceIntroduction = () => (
  <div className="service-introduction">
    <Row gutter={16}>
      <Col span={8}>
        <Card title="サービス1" bordered={false}>
          <p>
            サービス1の簡単な説明がここに入ります。このサービスのメリットや特徴をユーザーに知らせます。
          </p>
          <Button type="primary">詳細</Button>
        </Card>
      </Col>
      <Col span={8}>
        <Card title="サービス2" bordered={false}>
          <p>
            サービス2についての説明。別の重要な特徴や提供している価値について説明します。
          </p>
          <Button type="primary">詳細</Button>
        </Card>
      </Col>
      <Col span={8}>
        <Card title="サービス3" bordered={false}>
          <p>
            サービス3の説明。ユーザーがこのサービスを選ぶべき理由や、どのように彼らの問題を解決できるかを紹介します。
          </p>
          <Button type="primary">詳細</Button>
        </Card>
      </Col>
    </Row>
  </div>
);
