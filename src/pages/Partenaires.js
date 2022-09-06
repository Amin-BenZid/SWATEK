import "./partenaires.css";
import { Container, Row, Col, Button } from "react-bootstrap";
import axios from "axios";

export default function Produit(props) {
  const key = localStorage.getItem("authorization");

  const handleClick = (e) => {
    const name = props.getdata.partenairesName;
    axios
      .delete(`http://localhost:8888/api/partenaires/delete/${name}`, {
        headers: {
          authorization: key,
        },
      })
      .then((res) => {
        window.location.reload();
      })
      .catch((err) => {
        console.log(err.response.data.error);
      });
  };
  return (
    <Container className="produit">
      <div style={{ height: "2px", backgroundColor: "gray", marginTop: "3.5rem" }}></div>

      <Row>
        <Col></Col>
        <Col>
          <h2 style={{ marginTop: "3.5rem" }}>{props.getdata.partenairesName}</h2>
          <i style={{ color: "gray", fontSize: "20px" }}>SWATEK</i>
        </Col>
        <Col></Col>
      </Row>

      <Row className="bigbox">
        <Col sm={12} md={6}>
          <img className="img" src={`http://localhost:8888/${props.getdata.logo}`} />
        </Col>
        <Col sm={12} md={6}>
          <p>{props.getdata.partenairesDes}</p>
          <Button style={props.styleButton} variant="danger" onClick={handleClick}>
            DELETE
          </Button>
        </Col>
      </Row>
    </Container>
  );
}
