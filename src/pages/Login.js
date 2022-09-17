import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import { Col, Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [error, setError] = useState();

  let navigate = useNavigate();

  const data = {
    email: email,
    password: password,
  };

  const handleSubmit = async (e) => {
    await axios
      .post("admin/login", data)
      .then((res) => {
        navigate("/", { replace: true });
        localStorage.setItem("authorization", res.data.token);
        window.location.reload();
      })
      .catch((err) => {
        setError("Wrong");
      });
  };
  return (
    <Container style={{ backgroundColor: "black", height: "100vh" }}>
      <Row>
        <Col></Col>
        <Col style={{ marginTop: "15%" }}>
          <h1 style={{ color: "red" }}>{error}</h1>
          <Form style={{ border: "2px solid #7420d3 ", padding: "1rem" }}>
            <Form.Group className="mb-3" controlId="formGroupEmail">
              <Form.Label style={{ color: "white" }}>Email address</Form.Label>
              <Form.Control onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Enter email" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formGroupPassword">
              <Form.Label style={{ color: "white" }}>Password</Form.Label>
              <Form.Control onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Password" />
            </Form.Group>
            <Button
              style={{
                color: "white",
                backgroundColor: "#7700ff",
                marginTop: "2rem",
                width: "10rem",
              }}
              variant="light"
              onClick={handleSubmit}
            >
              Login
            </Button>
          </Form>
        </Col>
        <Col></Col>
      </Row>
    </Container>
  );
}
