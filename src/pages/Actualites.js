import React from "react";
import "./actualites.css";
import { Container, Row, Col, Card } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function Actualites(props) {
  return (
    <Container>
      <Col >
        <Card style={{ border: "2px solid #7420d3", backgroundColor: "transparent" }}>
          <Card.Img variant="top" src={`http://localhost:8888/${props.data.photo}`} />
          <Card.Body>
            <Card.Title>{props.data.title}</Card.Title>
            <Card.Text>{props.data.paragraph} </Card.Text>
            <Link style={{ color: "#7420d3" }} to={`/actualite/${props.data._id}`}>
              Voir plus
            </Link>
          </Card.Body>
        </Card>
      </Col>
    </Container>
  );
}
