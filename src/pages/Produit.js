import React, { useState } from "react";
import "./produit.css";
import { Container, Row, Col, Button } from "react-bootstrap";
import axios from "axios";
import parse from "html-react-parser";

export default function Produit(prop) {
  const key = localStorage.getItem("authorization");

  const handleClick = (e) => {
    const name = prop.getdata.ProduitName;
    axios
      .delete(`http://localhost:8888/api/produits/delete/${name}`, {
        headers: {
          authorization: key,
        },
      })
      .then((res) => {
        window.location.reload();
      })
      .catch((err) => {
        console.log(err.response.data.error);
      });
  };
  return (
    <Container className="produit">
      <div style={{ height: "2px", backgroundColor: "gray", marginTop: "3.5rem" }}></div>
      <Row>
        <Col></Col>
        <Col>
          <h3 style={{ marginTop: "3.5rem" }}>{prop.getdata.ProduitName}</h3>
          <i style={{ color: "gray", fontSize: "15px" }}>SWATEK</i>
        </Col>
        <Col></Col>
      </Row>
      <Row className="bigbox">
        <Col sm={12} md={6}>
          <img className="img-prod" src={`http://localhost:8888/${prop.getdata.logo}`} />
        </Col>
        <Col sm={12} md={6}>
          <p>{parse(prop.getdata.ProduitDes)}</p>
          <Button style={prop.styleButton} variant="danger" onClick={handleClick}>
            DELETE
          </Button>
        </Col>
      </Row>
    </Container>
  );
}
