import React, { useEffect, useState } from "react";
import "./actualites.css";
import { Container, Row, Col, Button } from "react-bootstrap";
import axios from "axios";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";

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
  return (
    <Container>
      <Navbar styleButton={props.styleButton} />
      <div style={{ height: "2px", backgroundColor: "gray" }}></div>

      {data == undefined ? (
        <Col style={{ color: "white" }}>
          <h1>NotFoundError</h1>
        </Col>
      ) : (
        <Row style={{ textAlign: "center" }}>
          <Col></Col>
          <Col style={{ color: "white", height: "100vh", marginTop: "4rem" }}>
            <h6>{data.date}</h6>
            <img style={{ width: "100%" }} src={`http://localhost:8888/${data.photo}`} />
            <h1 style={{ marginTop: "4rem" }}>{data.title}</h1>
            <p style={{ marginTop: "2rem" }}>{data.paragraph}</p>
            <a href={`http://localhost:8888/${data.file}`} target="_blank">
              PDF
            </a>
          </Col>
          <Col style={{ marginTop: "2rem" }}>
            <Button style={props.styleButton} onClick={handleDelete} variant="danger">
              DELTE
            </Button>
          </Col>
        </Row>
      )}
      <div style={{ height: "2px", backgroundColor: "gray" }}></div>

      <Footer />
    </Container>
  );
}
