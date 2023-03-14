import React, { useEffect } from 'react';
import { Col, Row } from 'react-bootstrap';
import Container from "react-bootstrap/Container";
import Iframe from 'react-iframe';

export default function Tickets() {
    useEffect(() => {
        document.body.classList.add('ticket-page')
        return () => {
            document.body.classList.remove('ticket-page')
        }
    }, [])

    return (
        <Container>
            <div className='main-content'>
                <div className='iframe-container'>
                <Row>
                    <Col>
                        <Iframe url="https://erzbeats.ticket.io/"
                            width="100%"
                            height="1210px"
                            className="tickets-iframe"
                        />
                    </Col>
                </Row>
                </div>
            </div>
        </Container>
    );
}