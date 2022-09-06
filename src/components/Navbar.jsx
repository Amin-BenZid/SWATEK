import React, { useEffect, useState } from "react";
import img from "../img/SwatekLogo.png";
import "./navbar.css";
import { Link } from "react-router-dom";
import { Link as Lnk } from "react-scroll";
import { Button, Container } from "react-bootstrap";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";

export default function navbar(prop) {
  const handleClick = (e) => {
    localStorage.removeItem("authorization");
    window.location.reload();
  };
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" variant="dark">
        <Container>
          <Navbar.Brand>
            <Link to="/">
              <img src={img} />
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse style={{ marginLeft: "30%" }} id="responsive-navbar-nav">
            <Button onClick={handleClick} variant="light" style={prop.styleButton}>
              LogOut
            </Button>

            <Nav className="me-auto">
              <Link className="link" to="/">
                ACCUEIL
              </Link>
              <Lnk spy={true} smooth={true} offset={-100} duration={10} className="link" to="pre">
                NOS PRESENTATION
              </Lnk>
              <Link className="link" to="/produits">
                NOS PRODUITS
              </Link>
              <Link className="link" to="/partenaires">
                PARTENAIRES
              </Link>
              <Link className="link" to="/actualites">
                ACTUALITES
              </Link>
              <Link to="/contact" className="link" spy={true} smooth={true} offset={-100} duration={10} id="contact">
                CONTACT
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}
