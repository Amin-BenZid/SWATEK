import React, { useEffect } from "react";
import "./presentation.css";
import { GiHouse, GiTechnoHeart } from "react-icons/gi";
import { FaLaptopCode } from "react-icons/fa";
import { Link } from "react-router-dom";
import Aos from "aos";
import { Container, Row, Col } from "react-bootstrap";

export default function Presentation() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <Container id="pre">
      <div style={{ height: "0.5px", backgroundColor: "gray", marginTop: "2rem" }}></div>
      <h1 data-aos="zoom" className="title">
        NOS PRESTATION<span style={{ color: "#7420d3" }}>S.</span>
      </h1>
      <Row className="presentation">
        <Col className="col-card">
          <Link className="link" to="/batiment">
            <div data-aos="zoom-out-right" className="all">
              <GiHouse size="9rem" color="#7420d3" />
              <h4>LA GESTION TECHNIQUE DU BÂTIMENT</h4>
              <p>Voir</p>
            </div>
          </Link>
        </Col>
        <Col className="col-card">
          <Link className="link" to="embarques">
            <div data-aos="zoom-out" className="all">
              <GiTechnoHeart size="9rem" color="#7420d3" />
              <h4>LES SYSTÈMES EMBARQUÉS</h4>
              <p style={{ marginTop: "5.2rem" }}>Voir</p>
            </div>
          </Link>
        </Col>
        <Col className="col-card">
          <Link className="link" to="info">
            <div data-aos="zoom-out" id="last" className="all">
              <FaLaptopCode size="9rem" color="#7420d3" />
              <h4>LES SYSTÈMES D’INFORMATIONS</h4>
              <p>Voir</p>
            </div>
          </Link>
        </Col>
      </Row>
    </Container>
  );
}
