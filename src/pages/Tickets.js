import React from 'react';
import { Col, Row } from 'react-bootstrap';
import Container from "react-bootstrap/Container";
import Iframe from 'react-iframe';

export default function Tickets() {
    return (
        <div className="content-tickets">
            <Container>
                <Row>
                    <Col>
                        <Iframe url="https://www.google.com/maps/d/embed?mid=1nPvFzdbPH-ih4n0rNWR-knrGp7kSthA&ehbc=2E312F"
                            width="600px"
                            height="450px"
                            className="tickets-iframe"
                        />
                    </Col>
                </Row>
            </Container>
        </div>
    );
}