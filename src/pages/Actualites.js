import React from "react";
import "./actualites.css";
import { Container, Row, Col, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import parse from "html-react-parser";

export default function Actualites(props) {
  const date = props.data.date.substring(0, 10).split("");
  const dateString = date[8] + date[9] + date[7] + date[5] + date[6] + date[4] + date[0] + date[1] + date[2] + date[3];
  return (
    <Container>
      <Col>
        <Card style={{ border: "2px solid #7420d3", backgroundColor: "transparent" }}>
          <Card.Img variant="top" src={`http://localhost:8888/${props.data.photo}`} />
          <Card.Body>
            <Card.Title>{props.data.title}</Card.Title>
            <Card.Text style={{ color: "gray" }}>
              <i>{dateString}</i>
            </Card.Text>
            <Card.Text id="text">{parse(props.data.paragraph)} </Card.Text>
            <Link style={{ color: "#7420d3" }} to={`/actualite/${props.data._id}`}>
              Voir plus
            </Link>
          </Card.Body>
        </Card>
      </Col>
    </Container>
  );
}
