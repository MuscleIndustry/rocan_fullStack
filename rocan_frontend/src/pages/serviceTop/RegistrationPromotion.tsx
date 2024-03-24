import { Card, Col, Row } from "antd";

export const RegistrationPromotion = () => (
  <div className="registration-promotion" style={{ padding: "30px" }}>
    <Row justify="center">
      <Col span={12}>
        <Card>{/* 登録促進に関する情報をここに配置 */}</Card>
      </Col>
    </Row>
  </div>
);
