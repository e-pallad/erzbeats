import React from 'react';

import { Container, Col, Row } from 'react-bootstrap';

import TeaserVideo from '../vid/teaser.webm';
import HeroPoster from '../img/erzbeats-poster.gif';


export default function Teaser() {
    return (
        <div className="teaser-content-section">
            <Container className='teaser-content'>
                <Row>
                    <Col>
                        <video id='teaser-video' poster={HeroPoster} autoPlay loop muted>
                            <source 
                                src={TeaserVideo} 
                                type='video/webm' 
                            />
                        </video>
                    </Col>
                </Row>
                {/* Teaser Text + Link */}
                <Row className='fixed-bottom'>
                    <Col>
                        <div className='teaser-headline'>
                            <h2>Wir halten dich hier auf dem Laufenden.</h2>
                        </div>
                        <div className='teaser-headline-subline'>
                            <h2>Folge uns auch auf Instagram, um keine Neuigkeiten zu verpassen.</h2>
                        </div>
                    </Col>
                </Row>
                {/* Link To Impressum & Datenschutz */}
                <Row className='fixed-bottom teaser-footer-links'>
                    <Col lg={{ span: 4, order: 1 }} xs={{ span: 6, order: 1 }}>
                        <div className='teaser-bottom-links'>
                            <a href='/impressum' alt='Link zum Impressum' target='_blank'>Impressum</a>
                        </div>
                    </Col>
                    <Col lg={{ span: 4 , order: 2 }} xs={{ span: 12, order: 3 }}>
                        <div className='teaser-bottom-links teaser-copyright'>
                            Copyright ©{new Date().getFullYear()} All rights reserved | This page is made with &#9825; by devfluent
                        </div>
                    </Col>
                    <Col lg={{ span: 4, order: 3 }} xs={{ span: 6, order: 2 }}>
                        <div className='teaser-bottom-links'>
                            <a href='/datenschutz' alt='Link zum Datenschutz' target='_blank'>Datenschutz</a>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}