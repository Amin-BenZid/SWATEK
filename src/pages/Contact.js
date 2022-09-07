import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import "./contact.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Button from "react-bootstrap/Button";
import img from "../img/contact.png";
import axios from "axios";
import Message from "./Message";

export default function Contact(prop) {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [phoneNumber, setPhoneNumber] = useState();
  const [location, setLocation] = useState();
  const [sujet, setSujet] = useState();
  const [message, setMessage] = useState();
  const [success, setSuccess] = useState();
  const [error, setError] = useState();
  const [data, setData] = useState();

  const newMessage = {
    name,
    email,
    phoneNumber,
    location,
    sujet,
    message,
  };

  const getData = async () => {
    try {
      const { data } = await axios.get(`admin/contact`);
      setData(data.messages);
    } catch (err) {}
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios
      .post("contact/add", newMessage)
      .then((res) => {
        setSuccess("Done");
        window.location.reload();
      })
      .catch((err) => {
        setError("Error");
      });
  };
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Container>
      <Navbar styleButton={prop.styleButton} />
      <div style={{ height: "2px", backgroundColor: "gray" }}></div>

      <Row>
        <Col style={{ marginBottom: "5rem", marginTop: "5rem" }} sm={12} md={6}>
          {<h4 style={{ color: "green" }}>{success}</h4>}
          {<h4 style={{ color: "red" }}>{error}</h4>}

          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label style={{ color: "white", display: "flex" }}>
                Votre nom <p style={{ color: "red" }}>*</p>
              </Form.Label>
              <Form.Control
                onChange={(e) => {
                  setName(e.target.value);
                }}
                className="formm"
                type="nom"
                placeholder="nom"
              />
              <Form.Label style={{ color: "white", display: "flex" }}>
                Tél<p style={{ color: "red" }}>*</p>
              </Form.Label>
              <Form.Control
                onChange={(e) => {
                  setPhoneNumber(e.target.value);
                }}
                className="formm"
                type="nom"
                placeholder="Tél"
              />
              <Form.Label style={{ color: "white", display: "flex" }}>
                Localisation<p style={{ color: "red" }}>*</p>
              </Form.Label>
              <Form.Control
                onChange={(e) => {
                  setLocation(e.target.value);
                }}
                className="formm"
                type="localisation"
                placeholder="localisation"
              />
              <Form.Label style={{ color: "white", display: "flex" }}>
                Votre e-mail<p style={{ color: "red" }}>*</p>
              </Form.Label>
              <Form.Control
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                className="formm"
                type="email"
                placeholder="name@example.com"
              />
              <Form.Label style={{ color: "white" }}>Sujet </Form.Label>
              <Form.Control
                onChange={(e) => {
                  setSujet(e.target.value);
                }}
                className="formm"
                type="Sujet"
                placeholder="sujet"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
              <Form.Label style={{ color: "white", display: "flex" }}>
                Votre message<p style={{ color: "red" }}>*</p>
              </Form.Label>
              <Form.Control
                onChange={(e) => {
                  setMessage(e.target.value);
                }}
                className="formm"
                as="textarea"
                placeholder="message"
                rows={3}
              />
            </Form.Group>
          </Form>
          <Button
            style={{ color: "white", backgroundColor: "#7700ff", marginTop: "2rem", width: "10rem" }}
            variant="light"
            onClick={handleSubmit}
          >
            Envoyer
          </Button>
        </Col>
        <Col>
          <img className="contact-img" src={img} />
        </Col>
      </Row>
      <Row style={prop.styleButton}>
        <Col style={{ color: "white", fontSize: "1.5rem" }}>
          {data === undefined ? (
            <h2 style={{ color: "white" }}>Contacts :</h2>
          ) : (
            <>
              {data
                .map((item, i) => {
                  return (
                    <Row key={Math.random()}>
                      <Col className="pt-5 align-self-center ">
                        <Message data={item} />
                      </Col>
                    </Row>
                  );
                })
                .reverse()}
            </>
          )}
        </Col>
        <Row style={{ marginBottom: "2rem" }}>
          <Button
            style={{
              color: "white",
              backgroundColor: "#7700ff",
              marginTop: "1rem",
              width: "10rem",
            }}
            onClick={getData}
          >
            Show Contacts
          </Button>
        </Row>
      </Row>
      <div style={{ height: "2px", backgroundColor: "gray" }}></div>

      <Footer />
    </Container>
  );
}
