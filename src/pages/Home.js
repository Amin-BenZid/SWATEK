import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import img from "../img/home.jpg";
import Card from "./Card";
import "./home.css";
import { BsFillArrowUpCircleFill } from "react-icons/bs";
import Aos from "aos";
import "aos/dist/aos.css";
import { Container, Row, Col } from "react-bootstrap";
import Presentation from "./Presentation";

export default function Home(prop) {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  const [backToTop, setBackToTop] = useState(false);
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
    <Container>
      <Navbar styleButton={prop.styleButton} />
      <div style={{ height: "0.4px", backgroundColor: "gray" }}></div>

      <Row className="home">
        <Col className="home-img">
          <img data-aos="zoom-out-right" src={img} />
        </Col>
        <Col data-aos="zoom-in" id="text" className="cardd">
          <h1>
            Smart Waves <span style={{ color: "#7420d3" }}>T</span>echnologies
          </h1>
          <p>
            Smart Waves Technologies est une société de recherche et de développement en électronique embarqué,
            informatique, et informatique industriel.
          </p>
        </Col>
      </Row>
      <Presentation  />
      <Card />
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
