import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./Tehran_Contact.css";

function Tehran_Contact() {
  return (
    <Container fluid className="contact-font contact-box">
      <Row>
        <Col>Contact Info</Col>
      </Row>

      <Row>
        <Col xs lg="1"></Col>
        <Col xs lg="10">
          <div className="map-box"></div>
          <Row>
            <Col xs lg="1"></Col>
            <Col xs lg="2">
              <Row>
                <Col className="sub-heading">Hours of Operations:</Col>
              </Row>
              <Row>
                <Col className="sub-heading-text">2 PM to 3 AM Daily</Col>
              </Row>
            </Col>
            <Col xs lg="1"></Col>
            <Col xs lg="2">
              <Row>
                <Col className="sub-heading">Located:</Col>
              </Row>
              <Row>
                <Col className="sub-heading-text">123 W 45th Newyork</Col>
              </Row>
            </Col>
            <Col xs lg="1"></Col>
            <Col xs lg="2">
              <Row>
                <Col className="sub-heading">Phone:</Col>
              </Row>
              <Row>
                <Col className="sub-heading-text">(+1) (404) 7236 423</Col>
              </Row>
            </Col>

            <Col xs lg="1"></Col>
            <Col xs lg="2">
              <Row>
                <Col className="sub-heading">Follow Us:</Col>
              </Row>
              <Row>
                <Col className="sub-heading-text">@tehranlounge</Col>
              </Row>
            </Col>
          </Row>
        </Col>
        <Col xs lg="1"></Col>
      </Row>

      <Row>
        <Col xs lg="1"></Col>
        <Col xs lg="10" className="contact-line"></Col>
        <Col xs lg="1"></Col>
      </Row>
      <Row>
        <Col xs lg="2"></Col>
        <Col xs lg="8" className="copy-right">Tehran © 2024 All rights reserved.</Col>
        <Col xs lg="2" className="footer-logo"></Col>
      </Row>
    </Container>
  );
}
export default Tehran_Contact;
