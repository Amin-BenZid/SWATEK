import React from "react";
import { Container, Row, Col } from "react-bootstrap";

export default function Eror404() {
  return (
    <Container style={{ color: "white" }}>
      <Row>
        <Col style={{ backgroundColor: "gray", marginTop: "20rem", textAlign: "center" }}>
          <div>
            <h1>Error 404</h1>
            <p>Sorry this page is not found.</p>
          </div>
        </Col>
      </Row>
    </Container>
  );
}
