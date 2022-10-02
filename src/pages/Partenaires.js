import "./partenaires.css";
import { Container, Row, Col, Button } from "react-bootstrap";
import axios from "axios";
import parse from "html-react-parser";
import { FaRegEdit } from "react-icons/fa";
import { MdOutlineDelete } from "react-icons/md";
import EditPartner from "./EditPartner";
import { useState } from "react";

export default function Produit(props) {
  const [openModal, setOpenModal] = useState(false);

  const handleClick = (e) => {
    const name = props.getdata.partenairesName;
    axios
      .delete(`partenaires/delete/${name}`)
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
          <h2 style={{ marginTop: "3.5rem" }}>{props.getdata.partenairesName}</h2>
          <i style={{ color: "gray", fontSize: "20px" }}>SWATEK</i>
        </Col>
        <Col style={{ display: "flex", height: "2rem", marginTop: "1rem" }}>
          <Button style={props.styleButton} variant="dark" onClick={handleClick}>
            <p>
              DELETE
              <MdOutlineDelete size="15px" />
            </p>
          </Button>
          <Button style={props.styleButton} variant="dark" onClick={() => setOpenModal(true)} className="modalButton">
            <p>
              EDIT
              <FaRegEdit size="15px" />
            </p>
          </Button>
          <EditPartner data={props.getdata} open={openModal} onClose={() => setOpenModal(false)} />
        </Col>
      </Row>
      <Row className="bigbox">
        <Col sm={12} md={6}>
          <img className="img" src={`http://localhost:8888/${props.getdata.logo}`} />
        </Col>
        <Col sm={12} md={6}>
          <p style={{ textAlign: "left" }}>{parse(props.getdata.partenairesDes)}</p>
        </Col>
      </Row>
    </Container>
  );
}
