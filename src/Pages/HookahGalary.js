import React from "react";
import "./HookahGalary.css";
import { Container, Row, Col } from "react-bootstrap";

function HookahGalary() {
  return (
    <Container fluid className="galary-box">
      <Row>
        <Col className="galary-heading">Hookah Gallery</Col>
      </Row>
      <Row>
        <Col lg="2"></Col>
        <Col lg="8">
          <Row>
            <Col className="g1"></Col>
            <Col className="g2"></Col>
            <Col>
              <Row>
                <Col className="g3"></Col>
              </Row>
              <Row>
                <Col className="g4"></Col>
              </Row>
            </Col>
          </Row>
        </Col>
        <Col lg="2"></Col>
      </Row>
      <Row>
        <Col className="brandsWeCarry">Brands we carry</Col>
      </Row>
      <Row>
        <Col lg="2"></Col>
        <Col lg="8">
          <Row>
            <Col lg="1"></Col>
            <Col lg="2" className="b1"></Col>
            <Col lg="2" className="b2"></Col>
            <Col lg="2" className="b3"></Col>
            <Col lg="2" className="b4"></Col>
            <Col lg="2" className="b5"></Col>
            <Col lg="1"></Col>
          </Row>
        </Col>
        <Col lg="2"></Col>
      </Row>
    </Container>
  );
}
export default HookahGalary;
