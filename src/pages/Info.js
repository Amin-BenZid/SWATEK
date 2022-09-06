import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import img from "../img/info.jpg";
import { BsFillArrowUpCircleFill } from "react-icons/bs";
import { Container, Row, Col } from "react-bootstrap";
import "./info.css";

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
            <h2 className="info-h2">LES SYSTÈMES D’INFORMATIONS</h2>
            <i className="info-i" style={{ color: "gray", fontSize: "20px" }}>
              SWATEK
            </i>
            <Col></Col>
            <img className="smart-home" src={img} />
            <Col></Col>
          </Col>
        </Row>
        <Row className="paragraph">
          <p>
            Face aux besoins particuliers de ses clients opérants dans les différents secteurs, Smart Waves Technologie
            propose ses services de développement spécifique software et hardware.
            <br />
            <br />
            <b style={{ color: "#7420d3" }}>Développement spécifique : Méthodologie</b>
            <br />
            <br />
            Notre méthodologie de développement spécifique consiste en première phase à accompagner le client dans la
            formulation de ses besoins, étudier la faisabilité de son projet et l’assister dans l’élaboration du cahier
            des charges.
            <br />
            <br />
            <b style={{ color: "#7420d3" }}>Développement spécifique : Processus</b>
            <br />
            <br />
            Pour la bonne réalisation du produit, Les ingénieurs Smart Waves Technologie affectés au projet mettent en
            œuvre tout les processus prédéfinis et rodés conformément aux termes du cahier des charges.
            <br />
            <br />
            En étroite collaboration avec le client, l’équipe projet transfert le produit développé en assurant son bon
            fonctionnement dans l’environnement de déploiement et s’engage dans la formation de l’équipe client.
            <br />
            <br />
            Smart Waves Technologie s’engage aussi à garantir le service après-vente ainsi que le support technique pour
            tout type de maintenance : le meilleur service de TMA , Tierce qualification applicative…
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
