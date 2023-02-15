import React from 'react';

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Philosophie from '../components/Philosphie';
import Lineup1 from '../components/Lineup1';
import Hero from '../components/Hero';
/*
import Lineup2 from '../components/Lineup2';
import Gallery from '../components/Gallery';
*/

export default function Home() {
    return (
        <div className="content-section">
            <Hero />
            <Container>
                <Row>
                    <Philosophie />
                </Row>
                <Row>
                    <Lineup1 />
                </Row>
                {/* 
                <Row>
                    <Lineup2 />
                </Row>
                */}
            </Container>
            {/**
            <Gallery />
            */}
        </div>
    )
}