import React from 'react';

import { Container, Button, Col, Row } from 'react-bootstrap';

import TeaserVideo from '../vid/teaser.webm';
import HeroPoster from '../img/erzbeats-poster.gif';


export default function Teaser() {
    return (
        <div className="content-section">
            <Container className='teaser-content'>
                <Row>
                    <Col>
                        <Button>Links</Button>
                    </Col>
                    <Col>
                        <video id='teaser-video' poster={HeroPoster} autoPlay loop muted>
                            <source 
                                src={TeaserVideo} 
                                type='video/webm' 
                            />
                        </video>
                    </Col>
                    <Col>
                        <Button>Rechts</Button>
                    </Col>
                </Row>
                {/* Teaser Text + Link */}
                <Row className='fixed-bottom'>
                    <Col>
                        <div className='teaser-headline'>
                            <h2>Bleib auf dem Laufenden.</h2>
                        </div>
                        <div className='teaser-headline-subline'>
                            <h2>Folge uns auf Instagram um keine Neuigkeiten zu verpassen.</h2>
                        </div>
                    </Col>
                </Row>
                {/* Link To Impressum & Datenschutz */}
                <Row className='fixed-bottom teaser-footer-links'>
                    <Col>
                        <div className='teaser-bottom-links'>
                            <a href='#1' alt='Link zum Impressum' target='_blank'>Impressum</a>
                        </div>
                    </Col>
                    <Col>
                        <div className='teaser-bottom-links'>
                            <a href='#2' alt='Link zum Datenschutz' target='_blank'>Datenschutz</a>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}