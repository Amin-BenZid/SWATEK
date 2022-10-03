import React, { useState } from "react";
import "./produit.css";
import { Container, Row, Col, Button } from "react-bootstrap";
import axios from "axios";
import parse from "html-react-parser";
import EditProduct from "./EditProduct";
import { FaRegEdit } from "react-icons/fa";
import { MdOutlineDelete } from "react-icons/md";

export default function Produit(prop) {
  const [openModal, setOpenModal] = useState(false);

  const handleClick = (e) => {
    const name = prop.getdata.ProduitName;
    axios
      .delete(`produits/delete/${name}`)
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
        <Col style={{ marginTop: "3rem", display: "flex", height: "2rem" }}>
          <Button style={prop.styleButton} variant="dark" onClick={handleClick}>
            <h6>
              DELETE
              <MdOutlineDelete size="15px" />
            </h6>
          </Button>
          <Button style={prop.styleButton} variant="dark" onClick={() => setOpenModal(true)} className="modalButton">
            <h6>
              EDIT
              <FaRegEdit size="15px" />
            </h6>
          </Button>
          <EditProduct data={prop.getdata} open={openModal} onClose={() => setOpenModal(false)} />
        </Col>
      </Row>
      <Row className="bigbox">
        <Col sm={12} md={6}>
          <img className="img-prod" src={`http://151.80.123.212:8888/${prop.getdata.logo}`} />
        </Col>
        <Col sm={12} md={6}>
          <p style={{ textAlign: "left" }}>{parse(prop.getdata.ProduitDes)}</p>
        </Col>
      </Row>
    </Container>
  );
}
