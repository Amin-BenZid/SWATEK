import React, { useEffect, useState } from "react";
import Partenaires from "./Partenaires";
import axios from "axios";
import { Container, Row, Col, Button } from "react-bootstrap";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Form from "react-bootstrap/Form";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

export default function PartenairesList(prop) {
  const [newPartenaire, setNewPartenaire] = useState({
    logo: "",
    name: "",
    description: "",
  });
  const [data, setData] = useState();
  const [success, setSuccess] = useState();
  const [error, setError] = useState();

  const getData = async () => {
    try {
      const { data } = await axios.get(`http://localhost:8888/api/partenaires/get`);
      setData(data.result);
    } catch (err) {
      console.log(err);
    }
  };

  const getdata = data;
  const key = localStorage.getItem("authorization");

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("logo", newPartenaire.logo);
    formData.append("name", newPartenaire.name);
    formData.append("description", newPartenaire.description);

    axios
      .post(`http://localhost:8888/api/partenaires/add`, formData, {
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
    setNewPartenaire({ ...newPartenaire, [e.target.name]: e.target.value });
  };
  const handleDescription = (e) => {
    setNewPartenaire({ ...newPartenaire, description: e });
  };

  const handlePhoto = (e) => {
    setNewPartenaire({ ...newPartenaire, logo: e.target.files[0] });
  };

  useEffect(() => {
    getData();
  }, []);
  return (
    <Container>
      <Navbar styleButton={prop.styleButton} />
      <Row style={{ marginBottom: "8rem" }}>
        {getdata === undefined ? (
          <h2 style={{ color: "white" }}>Loading...</h2>
        ) : (
          <>
            {getdata
              .map((item) => {
                return (
                  <Row>
                    <Col className="pt-5 align-self-center ">
                      <Partenaires styleButton={prop.styleButton} getdata={item} />
                    </Col>
                  </Row>
                );
              })
              .reverse()}
          </>
        )}
      </Row>
      <Row style={{ color: "white" }}>
        <Col style={prop.styleButton}>
          <Form style={{ width: "100%" }} onSubmit={handleSubmit}>
            <h2 style={{ color: "green" }}>{success}</h2>
            <h2 style={{ color: "red" }}>{error}</h2>
            <h1>ADD PARTNER</h1>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label style={{ color: "white" }}>Logo</Form.Label>
              <Form.Control
                onChange={handlePhoto}
                className="formm"
                type="file"
                accept=".png, .jpg, .jpeg"
                name="logo"
              />
              <Form.Label style={{ color: "white" }}>Titre</Form.Label>
              <Form.Control
                onChange={handleChange}
                value={newPartenaire.name}
                className="formm"
                type="Titre"
                placeholder="Titre"
                name="name"
              />
              <Form.Label style={{ color: "white" }}>Description</Form.Label>
              <ReactQuill
                style={{ height: "30vh", marginBottom: "3rem" }}
                onChange={handleDescription}
                theme="snow"
                value={newPartenaire.description}
                className="formm"
                type="Description"
                placeholder="Description"
                name="description"
              />
            </Form.Group>
            <Button onClick={handleSubmit}>ADD!</Button>
          </Form>
        </Col>
      </Row>
      <div style={{ height: "2px", backgroundColor: "gray", marginTop: "3.5rem" }}></div>

      <Footer />
    </Container>
  );
}
