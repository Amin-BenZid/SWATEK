import React from "react";
import { Col, Container, Row } from "react-bootstrap";

export default function Message(props) {
  console.log(props.data);
  return (
    <Container>
      <Row style={{ marginBottom: "4rem", display: "flex" }}>
        <Col
          md={5}
          style={{ color: "white", borderRadius: "10%", border: "2px solid white", height: "100%", padding: "1rem" }}
        >
          <p>
            <span style={{ color: "#7700ff" }}>Nom :</span> {props.data.name}
            <br />
            <span style={{ color: "#7700ff" }}>email :</span> {props.data.email}
            <br />
            <span style={{ color: "#7700ff" }}>Tél :</span> {props.data.phoneNumber}
            <br />
            <span style={{ color: "#7700ff" }}>Sujet :</span> {props.data.sujet}
            <br />
            <span style={{ color: "#7700ff" }}>Message :</span> {props.data.message}
          </p>
        </Col>
      </Row>
    </Container>
  );
}
