import React, { useEffect, useState } from "react";
import "./actualites.css";
import { Container, Row, Col, Button } from "react-bootstrap";
import axios from "axios";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";
import parse from "html-react-parser";
import swatekLogo from "../img/SwatekLogo.png";
import { Link } from "react-router-dom";

export default function ActualitePage(props) {
  const navigate = useNavigate();
  const key = localStorage.getItem("authorization");

  const [data, setData] = useState();
  var url = window.location.pathname;
  var id = url.substring(url.lastIndexOf("/") + 1);
  const getData = async () => {
    try {
      const data = await axios.get(`http://localhost:8888/api/actualites/one/${id}`);
      setData(data.data.findActualites);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    getData();
  }, []);

  const handleDelete = () => {
    axios
      .delete(`http://localhost:8888/api/actualites/delete/${id}`, {
        headers: {
          authorization: key,
        },
      })
      .then((res) => {
        navigate("/actualites", { replace: true });
      })
      .catch((err) => {
        console.log(err.response.data.error);
      });
  };
  var pdf;
  return (
    <Container>
      <Navbar styleButton={props.styleButton} />
      <div style={{ height: "0.5px", backgroundColor: "gray" }}></div>

      {data == undefined ? (
        <Col style={{ color: "white" }}>
          <h1>NotFoundError</h1>
        </Col>
      ) : (
        <Row>
          {data.file === "nothing" ? (pdf = "none") : (pdf = "flex")}
          <Col sm={7} style={{ color: "white", marginTop: "4rem" }}>
            <h4>{">."}</h4>
            <Button style={props.styleButton} onClick={handleDelete} variant="danger">
              DELTE
            </Button>
            <Row style={{ justifyContent: "center" }}>
              <img style={{ width: "70%", borderRadius: "2rem" }} src={`http://localhost:8888/${data.photo}`} />
            </Row>
            <Row style={{ justifyContent: "center" }}>
              <h1 style={{ marginTop: "4rem" }}>{data.title}</h1>
            </Row>
            <Row style={{ justifyContent: "center" }}>
              {parse(data.paragraph)}

              <Row />
              <Row style={{ display: pdf }}>
                <Button variant="info" style={{ marginTop: "2rem", width: "5.5rem" }}>
                  <a
                    style={{
                      backgroundColor: "transparent",
                      color: "black",
                      textDecoration: "none",
                      textAlign: "center",
                    }}
                    href={`http://localhost:8888/${data.file}`}
                    target="_blank"
                  >
                    Voir PDF
                  </a>
                </Button>
              </Row>
            </Row>
          </Col>

          <Col sm={4} style={{ color: "white", marginTop: "1rem" }}>
            <Row>
              <img src={swatekLogo} />
              <div style={{ height: "0.5px", backgroundColor: "gray" }}></div>
            </Row>
            <Row>
              <h2 style={{ marginTop: "4rem" }}>{data.title}</h2>
            </Row>
            <Row style={{ marginTop: "7rem", marginLeft: "1rem" }}>
              <Link style={{ textDecoration: "none" }} to="/batiment">
                <br />- LA GESTION TECHNIQUE DU BÂTIMENT
              </Link>
              <Link style={{ textDecoration: "none" }} to="/embarques">
                <br />- LES SYSTÈMES EMBARQUÉS
              </Link>
              <Link style={{ textDecoration: "none" }} to="/info">
                <br />- LES SYSTÈMES D’INFORMATIONS
              </Link>
            </Row>
            <Row style={{ marginTop: "7rem", marginLeft: "1rem" }}>
              <p>
                Contact Adresse : 3 rue des amandes Khézama Est 4051 Sousse Tunisie <br />
                Tél : (+216) 73 277 052 <br />
                Email : contact@swatek.tn
              </p>
            </Row>
          </Col>
        </Row>
      )}
      <div style={{ height: "2px", backgroundColor: "gray", marginTop: "4rem" }}></div>

      <Footer />
    </Container>
  );
}
