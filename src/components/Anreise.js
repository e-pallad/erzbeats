import React, { Component } from 'react';
import Iframe from 'react-iframe';
import { Button, Row, Col, Accordion } from 'react-bootstrap';

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
                                Viele Wege führen zum ERZBEATS. Damit alle Besucher ihre Reise jetzt schon planen können, gibt es hier erste Infos. Detaillierte Infos zur Anfahrt folgen in den nächsten Wochen.
                            </p>
                            <Accordion alwaysOpen>
                                <Accordion.Item eventKey="0">
                                    <Accordion.Header><strong>Auto</strong></Accordion.Header>
                                    <Accordion.Body>
                                        <p>Je mehr Fahrgemeinschaften, desto besser. Wir werden genug Parkfläche am Gelände zur Verfügung stellen.</p>
                                        <p>Weitere Informationen und die Route für Google Maps findest du mit einem klick auf "Akzeptieren"</p>
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="1">
                                    <Accordion.Header><strong>Bus</strong></Accordion.Header>
                                    <Accordion.Body>
                                        <p>Folgende Möglichkeiten gibt es für die Anreise mit Bus</p>
                                        <ul>
                                            <li>
                                                <strong>Linie 733</strong><br />Freiberg - Weißenborn - Lichtenberg - Oberbobritzsch - Burkersdorf - Frauenstein
                                            </li>
                                            <li>
                                                <strong>Linie 732</strong><br />Freiberg - Weißenborn - Lichtenberg - Dittersbach - Nassau - Rechenberg-Bienenmühle - Holzhau
                                            </li>
                                        </ul>
                                        <a href="www.vms.de" target={"_blank"}>www.vms.de</a>
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="2">
                                    <Accordion.Header><strong>Zug</strong></Accordion.Header>
                                    <Accordion.Body>
                                        <p>Anreise mit Zug ist ebenfalls möglich mit der Freiberger Eisenbahn. Allerdings habt ihr vom Bahnhof aus einen Gehweg von ca. 35 min.</p>
                                        <ul>
                                            <li>
                                                Freiberg - Berthelsdorf - Lichtenberg -Mulda - Nassau - Clausnitz - Rechenberg-Bühnenmühle - Holzhau
                                            </li>
                                        </ul>
                                        <a href="www.freiberger-eisenbahn.de" target={"_blank"}>www.freiberger-eisenbahn.de</a>
                                    </Accordion.Body>
                                </Accordion.Item>
                            </Accordion>
                        </Col>
                    </Row>
                </div>
            </Col>
        );
    }
}