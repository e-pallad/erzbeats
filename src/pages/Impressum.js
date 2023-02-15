import React from 'react';
import { Col, Row } from 'react-bootstrap';
import Container from "react-bootstrap/Container";

export default function Impressum() {
    return (
        <div className="content-impressum">
            <Container>
                <Row className="mt-5">
                    <Col xs={6}>
                        <h2 className='content-impressum-headline'>Impressum</h2>
                        <p>
                            Erzbeats Lichtenberg e.V.<br />
                            verteten durch Vorstand Robert Einert<br />
                            Dorfstraße 39a<br />
                            09638 Lichtenberg<br />
                            <a href='mailto:robert.einert@erzbeats.de' className='content-impressum-link'>robert.einert@erzbeats.de</a><br />
                            <a href='tel:+4915204068259' className='content-impressum-link'>+4915204068259</a><br />
                        </p>
                    </Col>
                    <Col xs={6}>
                        <h2 className='content-impressum-headline'>Kontakt Bookings:</h2>
                        <p>
                            Raphael Böhme<br />
                            <a href='mailto:raphael.boehme@erzbeats.de' className='content-impressum-link'>raphael.boehme@erzbeats.de</a><br />
                            <a href='tel:+491746811606' className='content-impressum-link'>+491746811606</a><br />
                        </p>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}