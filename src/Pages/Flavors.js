import React from "react";
import { Button, Card, Container, Row, Col } from "react-bootstrap";
import "./Flavors.css";
import flv1 from "../assets/flavour01.png"
import flv2 from "../assets/flavour2.png"
import flv3 from "../assets/flavour3.png"

function Flavors() {
  return (
    <Container fluid className="flavors-box">
      <Row>
        <Col className="flavors-heading">Hookh Flavours</Col>
      </Row>
      <Row>
        <Col lg="2"></Col>
        <Col lg="8">
          {/* <Row>
            <Col className="sample-flavors">
              <Row>
                <Col className="flavor-img"></Col>
              </Row>
              <Row>
                <Col className="flavor-box">
                  <h1>HOOKAH </h1>
                  <h2 className="flavor-box-desc"> Al Fakher, Nakhla, Fumari, Vantage by <br/>Starbuzz, Tangiers, Starbuzz, Lavoo, <br/>Dark Side.</h2>
                  <div className="flavor-box-bottom"></div>
                </Col>
              </Row>
              <Row></Row>
            </Col>
            <Col className="sample-flavors">
              <Row>
                <Col className="flavor-img"></Col>
              </Row>
              <Row></Row>
              <Row></Row></Col>
            <Col className="sample-flavors">
              <Row>
                <Col className="flavor-img"></Col>
              </Row>
              <Row></Row>
              <Row></Row></Col>
          </Row> */}
          <Row className="flavour-cards-top-margin">
            <Col>
              <Card style={{ width: "18rem" }} className="flavor-box">
                <Card.Img variant="top" src={flv1} className="flavor-img" />
                <Card.Body>
                  <Card.Title className="flavor-box-title">HOOKAH </Card.Title>
                  <Card.Text className="flavor-box-text">
                    Al Fakher, Nakhla, Fumari, Vantage by Starbuzz, Tangiers, Starbuzz, Lavoo, Dark Side.
                  </Card.Text>
                  <Button className="flv-button">$32.99</Button>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card style={{ width: "18rem" }} className="flavor-box">
                <Card.Img variant="top" src={flv2} className="flavor-img" />
                <Card.Body>
                  <Card.Title className="flavor-box-title">FRUIT BOWL</Card.Title>
                  <Card.Text className="flavor-box-text">
                    Try our fruit bowl hookah with Grapefruit, Orange, Apple, Pineapple, Melon.
                  </Card.Text>
                  <Button className="flv-button">$32.99</Button>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card style={{ width: "18rem" }} className="flavor-box">
                <Card.Img variant="top" src={flv3} className="flavor-img" />
                <Card.Body>
                  <Card.Title className="flavor-box-title">ART HOOKAH </Card.Title>
                  <Card.Text className="flavor-box-text">
                    These all glass hookah are created using only the highest quality of glass.
                  </Card.Text>
                  <Button className="flv-button">$32.99</Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>
          <div style={{justifyItems:"center"}}>
            <Button className="all-flavours">All Flavours</Button>
          </div>
        </Col>
        <Col lg="2"></Col>
      </Row>
    </Container>
  );
}
export default Flavors;
