import React, { useEffect, useState } from "react";
import "./actualites.css";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import axios from "axios";
import Actualites from "./Actualites";

export default function ActualitesList(prop) {
  const [success, setSuccess] = useState();
  const [error, setError] = useState();
  const [data, setData] = useState();

  const [newActualites, setNewActualites] = useState({
    photo: "",
    title: "",
    paragraph: "",
    file: "",
  });
  const getData = async () => {
    try {
      const data = await axios.get(`http://localhost:8888/api/actualites/all`);
      setData(data.data.findActualites);
    } catch (err) {
      console.log(err);
    }
  };
  const key = localStorage.getItem("authorization");

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("photo", newActualites.photo);
    formData.append("title", newActualites.title);
    formData.append("paragraph", newActualites.paragraph);
    formData.append("file", newActualites.file);

    axios
      .post(`http://localhost:8888/api/actualites/add`, formData, {
        headers: {
          authorization: key,
        },
      })
      .then((res) => {
        setSuccess("Done");
        window.location.reload();
      })
      .catch((err) => {
        console.log(err.response.data.error);
        setError("Error");
      });
  };

  const handleChange = (e) => {
    setNewActualites({ ...newActualites, [e.target.name]: e.target.value });
  };

  const handlePhoto = (e) => {
    setNewActualites({ ...newActualites, photo: e.target.files[0] });
  };
  const handleFile = (e) => {
    setNewActualites({ ...newActualites, file: e.target.files[0] });
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <Container id="actualitesList">
      <Navbar styleButton={prop.styleButton} />
      <div style={{ height: "2px", backgroundColor: "gray" }}></div>

      <Row style={{ justifyContent: "center" }}>
        {data === undefined ? (
          <h2 style={{ color: "white" }}>Loading...</h2>
        ) : (
          <>
            {data
              .map((item) => {
                return (
                  <Row style={{ width: "30%", textAlign: "center" }}>
                    <Col className="pt-5 align-self-center ">
                      <Actualites styleButton={prop.styleButton} data={item} />
                    </Col>
                  </Row>
                );
              })
              .reverse()}
          </>
        )}
      </Row>

      <Row style={{ color: "white" }}>
        <Col></Col>
        <Col style={prop.styleButton}>
          <Form onSubmit={handleSubmit}>
            <h2 style={{ color: "green" }}>{success}</h2>
            <h2 style={{ color: "red" }}>{error}</h2>
            <h1>ADD PARTNER</h1>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label style={{ color: "white" }}>Photo</Form.Label>
              <Form.Control
                onChange={handlePhoto}
                className="formm"
                type="file"
                accept=".png, .jpg, .jpeg"
                name="photo"
              />
              <Form.Label style={{ color: "white" }}>Titre</Form.Label>
              <Form.Control
                onChange={handleChange}
                value={newActualites.title}
                className="formm"
                type="Titre"
                placeholder="Titre"
                name="title"
              />
              <Form.Label style={{ color: "white" }}> Paragraph</Form.Label>
              <Form.Control
                onChange={handleChange}
                value={newActualites.paragraph}
                className="formm"
                type="paragraph"
                placeholder="Paragraph"
                name="paragraph"
              />
              <Form.Label style={{ color: "white" }}>File</Form.Label>
              <Form.Control onChange={handleFile} className="formm" type="file" accept=".pdf" name="file" />
            </Form.Group>
            <Button onClick={handleSubmit}>ADD!</Button>
          </Form>
        </Col>
        <Col></Col>
      </Row>
      <div style={{ height: "2px", backgroundColor: "gray", marginTop: "5rem" }}></div>

      <Footer />
    </Container>
  );
}
