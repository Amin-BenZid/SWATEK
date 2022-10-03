import React, { useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import parse from "html-react-parser";
import axios from "axios";
import { FaRegEdit } from "react-icons/fa";
import { MdOutlineDelete } from "react-icons/md";
import EditEquip from "./EditEquip";

export default function EquipCard(prop) {
  const [openModal, setOpenModal] = useState(false);

  const handleClick = (e) => {
    const id = prop.getdata._id;
    axios
      .delete(`equipe/delete/${id}`)
      .then((res) => {
        window.location.reload();
      })
      .catch((err) => {
        console.log(err.response.data.error);
      });
  };
  return (
    <Container>
      <Row>
        <Card style={{ width: "18rem", border: "3px solid white", backgroundColor: "hsla(268,73%,47%,1)" }}>
          <Col style={{ display: "flex", height: "2rem" }}>
            <Button style={prop.styleButton} variant="dark" onClick={handleClick}>
              <p>
                DELETE
                <MdOutlineDelete size="15px" />
              </p>
            </Button>
            <Button style={prop.styleButton} variant="dark" onClick={() => setOpenModal(true)} className="modalButton">
              <p>
                EDIT
                <FaRegEdit size="15px" />
              </p>
            </Button>
            <EditEquip data={prop.getdata} open={openModal} onClose={() => setOpenModal(false)} />
          </Col>
          <Card.Img
            style={{
              borderRadius: "90%",
              width: "10rem",
              height: "13rem",
              marginLeft: "auto",
              marginRight: "auto",
              marginTop: "1rem",
            }}
            variant="top"
            src={`http://151.80.123.212:8888/${prop.getdata.photo}`}
          />
          <Card.Body style={{ backgroundColor: "hsla(268,73%,47%,1)", textAlign: "center" }}>
            <Card.Title>
              <h3 style={{ backgroundColor: "hsla(268,73%,47%,1)" }}>{prop.getdata.memberName}</h3>
            </Card.Title>
            <Card.Title>
              <h5 style={{ backgroundColor: "hsla(268,73%,47%,1)" }}>{prop.getdata.memberRole}</h5>
            </Card.Title>
            <Card.Text style={{ backgroundColor: "hsla(268,73%,47%,1)" }}>{parse(prop.getdata.memberDes)}</Card.Text>
          </Card.Body>
        </Card>
      </Row>
    </Container>
  );
}
