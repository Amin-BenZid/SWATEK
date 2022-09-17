import React, { useEffect, useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import EquipCard from "./EquipCard";
import ReactQuill from "react-quill";
import axios from "axios";

export default function Equipe(prop) {
  const [data, setData] = useState();

  const [newMember, setNewMember] = useState({
    photo: "",
    name: "",
    role: "",
    description: "",
  });
  const [success, setSuccess] = useState();
  const [error, setError] = useState();
  const getData = async () => {
    try {
      const { data } = await axios.get(`equipe/get`);
      setData(data.result);
    } catch (err) {
      console.log(err);
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("photo", newMember.photo);
    formData.append("name", newMember.name);
    formData.append("role", newMember.role);
    formData.append("description", newMember.description);

    axios
      .post(`equipe/add`, formData)
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
    setNewMember({ ...newMember, [e.target.name]: e.target.value });
  };
  const handleDescription = (e) => {
    setNewMember({ ...newMember, description: e });
  };
  const handlePhoto = (e) => {
    setNewMember({ ...newMember, photo: e.target.files[0] });
  };
  useEffect(() => {
    getData();
  }, []);
  const getdata = data;

  return (
    <Container>
      <Navbar styleButton={prop.styleButton} />
      <div style={{ height: "2px", backgroundColor: "gray", marginBottom: "4rem" }}></div>
      <Row style={{ marginBottom: "8rem", justifyContent: "center" }}>
        {getdata === undefined ? (
          <h2 style={{ color: "white" }}>Loading...</h2>
        ) : (
          <>
            {getdata
              .map((item, i) => {
                return (
                  <Row style={{ width: "20rem" }} key={Math.random()}>
                    <Col className="pt-5 align-self-center ">
                      <EquipCard getdata={item} styleButton={prop.styleButton} />
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
            <h1>ADD</h1>
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
                value={newMember.name}
                className="formm"
                type="Titre"
                placeholder="Name"
                name="name"
              />
              <Form.Label style={{ color: "white" }}>Titre</Form.Label>
              <Form.Control
                onChange={handleChange}
                value={newMember.role}
                className="formm"
                type="Titre"
                placeholder="role"
                name="role"
              />
              <Form.Label style={{ color: "white" }}>Description</Form.Label>
              <ReactQuill
                style={{ height: "30vh", marginBottom: "3rem", color: "white" }}
                onChange={handleDescription}
                theme="snow"
                value={newMember.description}
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
