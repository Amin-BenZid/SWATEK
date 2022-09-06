import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import img from "../img/robot.jpg";
import { BsFillArrowUpCircleFill } from "react-icons/bs";
import "./embarques.css";
import { Container, Row, Col } from "react-bootstrap";

export default function Produit(prop) {
  const [backToTop, setBackToTop] = useState(false);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 400) {
        setBackToTop(true);
      } else {
        setBackToTop(false);
      }
    });
  });
  const scrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <Container className="batiment">
      <Navbar styleButton={prop.styleButton} />
      <div style={{ height: "2px", backgroundColor: "gray", marginTop: "3.5rem", marginBottom: "4rem" }}></div>

      <Row>
        <Row>
          <Col>
            <h2 className="emb-h2">LES SYSTÈMES EMBARQUÉS</h2>
            <i className="emb-i">SWATEK</i>
            <Col></Col>
            <img className="smart-home" src={img} />
            <Col></Col>
          </Col>
        </Row>

        <Row className="paragraph">
          <p className="em-p">
            La grande compétence des ingénieurs en développement de systèmes embarqués de notre société de conseil
            informatique nous a permis de développer des systèmes et des applications sur la base des technologies les
            plus pointues. Nos compétences interdisciplinaires (Hardware, Software) créent des solutions complètes à
            partir des plateformes matérielles jusqu’au logiciels Frontal. Nous vous proposons des compétences hautement
            qualifiées orientées principalement vers les secteurs suivants :
            <br />
            <ul>
              <li>Multimédia</li>
              <li>Domotique</li>
              <li>Wireless</li>
              <li>Industrie</li>
              <li>Equipements de télécommunications et instruments de mesure</li>
              <li>Systèmes de sécurité (systèmes d’alarmes, systèmes de surveillance vidéo)</li>
            </ul>
          </p>
        </Row>
      </Row>
      <div style={{ height: "2px", backgroundColor: "gray", marginTop: "3.5rem", marginBottom: "4rem" }}></div>
      {backToTop && (
        <button
          style={{
            position: "fixed",
            bottom: "40px",
            right: "40px",
            height: "50px",
            width: "50px",
            border: "none",
            backgroundColor: "transparent",
            cursor: "pointer",
          }}
          onClick={scrollUp}
        >
          <BsFillArrowUpCircleFill style={{ color: "#7420d3" }} size={40} />
        </button>
      )}
      <Footer />
    </Container>
  );
}
