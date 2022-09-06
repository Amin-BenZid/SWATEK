import React, { useEffect } from "react";
import "./card.css";
import { BiUser, BiWorld, BiTachometer, BiGroup } from "react-icons/bi";
import Aos from "aos";
import "aos/dist/aos.css";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function Card() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <Container id="contact-card" className="cardd">
      <div style={{ height: "2px", backgroundColor: "gray" }}></div>
      <Row className="cards">
        <Col className="col-tech">
          <div data-aos="fade-up" className="card1 all-cards">
            <BiUser color="white" size="80" />
            <h3>CLIENT</h3>
            <p>Chaque projet Smart Waves Technologies obéit à une philosophie simple : vous redonner le contrôle.</p>
          </div>
        </Col>
        <Col className="col-tech">
          <div data-aos="fade-down" className="card2 all-cards">
            <BiWorld color="white" size="85" />
            <h3>ENTREPRENEURIAT</h3>
            <p>Nous avons une culture startup. Nous prenons des risques afin d’innover.</p>
          </div>
        </Col>

        <Col className="col-tech">
          <div data-aos="fade-up" className="card4 all-cards">
            <BiTachometer color="white" size="80" />
            <h3>TECHNOLOGIE</h3>
            <p>
              Outre la maîtrise de la technologie d’aujoud’hui, nous ambitionnons également d’inventer celle de demain.
            </p>
          </div>
        </Col>
      </Row>
      <Link to="/contact">
        <button data-aos="zoom-out" className="btnn">
          CONTACTEZ-NOUS
        </button>
      </Link>
      <div style={{ height: "2px", backgroundColor: "gray", marginTop: "5rem" }}></div>
    </Container>
  );
}
