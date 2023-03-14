import React, { Component } from 'react';
import Iframe from 'react-iframe';
import { Button, Row, Col } from 'react-bootstrap';

export default class Anreise extends Component {
    constructor() {
        super();
        this.state = { 
            mapStatus: false,
        };
    }

    mapOpen = () => {
        this.setState({ mapStatus: true });
    }

    render() {
        const accepted = this.state.mapStatus;
        console.log(accepted)
        return (
            <Col xs="12">
                <div id="anreise" className="anreise-headline">
                    <div className="entry-title">
                        <p>ERZbeats 2023</p>
                        <h2>Anreise</h2>
                    </div>
                    <Row>
                        <Col lg={{ span: 6 }} xs={{ span: 12 }} className="anreise-map">
                            {!accepted ? (
                                <div className='map-disclaimer'>
                                    <p>Mit einem Klick auf den Button akzeptierst du das <a href="https://policies.google.com/technologies/retention?hl=de" target="_blank" rel="noreferrer">Daten</a> an und <a href="https://policies.google.com/technologies/cookies?hl=de" target="_blank" rel="noreferrer">Cookies</a> von Google gesendet und geladen werden.</p>
                                    <p>Alternativ findest du die Karte auch hier: <a href="https://www.google.com/maps/d/u/0/viewer?mid=1nPvFzdbPH-ih4n0rNWR-knrGp7kSthA&ll=50.8345697050548%2C13.435202250000033&z=19" target="_blank" rel="noreferrer">Google Maps</a></p>
                                    <Button variant="secondary" onClick={this.mapOpen}>Akzeptieren</Button>
                                </div>
                            ) : (
                                <Iframe url="https://www.google.com/maps/d/embed?mid=1nPvFzdbPH-ih4n0rNWR-knrGp7kSthA&ehbc=2E312F"
                                    width="100%"
                                    height="650px"
                                    className="map"
                                />
                            )}
                        </Col>
                        <Col lg={{ span: 6 }} xs={{ span: 12 }} className='anreise-text'>
                            <p>

                            </p>
                        </Col>
                    </Row>
                </div>
            </Col>
        );
    }
}