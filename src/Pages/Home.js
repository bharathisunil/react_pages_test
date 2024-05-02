import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import './Home.css';

function Home() {
    return (
        <Container fluid className="home-box">
            <Row>
                <Col lg="2"></Col>
                <Col lg="8">
                    <h2 className="home-heading1">Indulge in</h2>
                    <h2 className="home-heading2">Exotic Flavour<span>&</span></h2>
                    <h2 className="home-heading3">Relaxing Atmosphere</h2>
                    <div className="home-heading3-underline"></div>
                </Col>
                <Col lg="2"></Col>
            </Row>

        </Container>
    );
}
export default Home;