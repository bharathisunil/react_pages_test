import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import "./Welcome.css";

function Welcome() {
  return (
    <Container fluid className="welcome-box">
      <Row>
        <Col lg="1"></Col>
        <Col lg="5">
          <p className="welcome-heading1">
            Welcome to Tehran
            <br />
            hookah lounge
          </p>
          <p className="welcome-text">
            Quisque arcu dui, ornare a lacus ac, dignissim bibendum tellus.
            <br />
            Integer vestibulum faucibus nulla, vel lobortis mauris pharetra at.
            <br />
            Morbi fringilla mi ut augue consectetur, sed laoreet lectus iaculis.{" "}
            <br />
            Etiam sed orci consequat, interdum arcu non, imperdiet mauris.{" "}
            <br />
            Vivamus vel laoreet arcu, non dignissim dolor.
          </p>
          <p className="welcome-text">
            Sed laoreet lectus iaculis. Etiam sed orci consequat, interdum{" "}
            <br />
            arcu non, imperdiet mauris. Vivamus vel laoreet arcu, non <br />
            dignissim dolor.
          </p>
          <div className="book-a-table">
            <Button>Book a Table</Button>
          </div>
        </Col>
        <Col lg="6" className="welcome-lady"></Col>
      </Row>
      {/* <Row>
                <Col>

                </Col>
            </Row> */}
    </Container>
  );
}
export default Welcome;
