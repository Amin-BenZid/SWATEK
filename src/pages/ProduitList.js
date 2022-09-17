import React, { useEffect, useState } from "react";
import axios from "axios";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Produit from "./Produit";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

export default function ProduitList(prop) {
  const [data, setData] = useState();
  const [newProduct, setNewProduct] = useState({
    logo: "",
    name: "",
    description: "",
  });
  const [success, setSuccess] = useState();
  const [error, setError] = useState();
  const getData = async () => {
    try {
      const { data } = await axios.get(`produits/get`);
      setData(data.findProduits);
    } catch (err) {
      console.log(err);
    }
  };

  const getdata = data;

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("logo", newProduct.logo);
    formData.append("name", newProduct.name);
    formData.append("description", newProduct.description);

    axios
      .post(`produits/add`, formData)
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
    setNewProduct({ ...newProduct, [e.target.name]: e.target.value });
  };
  const handleDescription = (e) => {
    setNewProduct({ ...newProduct, description: e });
  };

  const handlePhoto = (e) => {
    setNewProduct({ ...newProduct, logo: e.target.files[0] });
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <Container>
        <Navbar styleButton={prop.styleButton} />
        <Row style={{ marginBottom: "8rem" }}>
          {getdata === undefined ? (
            <h2 style={{ color: "white" }}>Loading...</h2>
          ) : (
            <>
              {getdata
                .map((item, i) => {
                  return (
                    <Row key={Math.random()}>
                      <Col className="pt-5 align-self-center ">
                        <Produit getdata={item} styleButton={prop.styleButton} />
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
              <h1>ADD PRODUCT</h1>
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
                  value={newProduct.name}
                  className="formm"
                  type="Titre"
                  placeholder="Titre"
                  name="name"
                />
                <Form.Label style={{ color: "white" }}>Description</Form.Label>

                <ReactQuill
                  style={{ height: "30vh", marginBottom: "3rem", color: "white" }}
                  onChange={handleDescription}
                  theme="snow"
                  value={newProduct.description}
                  className="formm"
                  type="Description"
                  placeholder="Description"
                  name="description"
                />
              </Form.Group>
              <Button type="submit">Submit</Button>
            </Form>
          </Col>
        </Row>
        <div style={{ height: "2px", backgroundColor: "gray", marginTop: "3.5rem" }}></div>

        <Footer />
      </Container>
    </div>
  );
}
