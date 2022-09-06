import React from "react";
import "./footer.css";
import img from "../img/SwatekLogo.png";
import { BsFacebook } from "react-icons/bs";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";

export default function Footer() {
  return (
    <Container className="footer-f">
      <Row>
        <Col className="sec">
          <Link to="/">
            <img style={{ width: "10rem" }} src={img} />
          </Link>
          <p style={{ color: "gray", fontSize: "12px" }}>
            SWATEK © 2022 Tous droits réservés. <br /> Devloper : aminebenzid2003@gmail.com
          </p>
        </Col>
        <Col className="sec">
          <h3>Facebook</h3>
          <a href="https://www.facebook.com/swatek.tn">
            <BsFacebook size="2rem" />
          </a>

          <p style={{ color: "gray" }}>@swatek.tn </p>
        </Col>
        <Col className="sec">
          <h3>NOS PRESTATIONS</h3>
          <Link style={{ textDecoration: "none" }} to="/batiment">
            <br />- LA GESTION TECHNIQUE DU BÂTIMENT
          </Link>
          <Link style={{ textDecoration: "none" }} to="/embarques">
            <br />- LES SYSTÈMES EMBARQUÉS
          </Link>
          <Link style={{ textDecoration: "none" }} to="/info">
            <br />- LES SYSTÈMES D’INFORMATIONS
          </Link>
        </Col>
        <Col className="sec">
          <h3>CONTACT</h3>
          <p style={{ color: "gray" }}>
            <b>Adresse : </b>3 rue des amandes Khézama Est 4051 Sousse Tunisie <br />
            <b>Tél : </b>(+216) 73 277 052 <br />
            <b>Email : </b>contact@swatek.tn
          </p>
        </Col>
      </Row>
    </Container>
  );
}
