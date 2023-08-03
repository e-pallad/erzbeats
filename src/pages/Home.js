import React from 'react';

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Philosophie from '../components/Philosphie';
//import Lineup1 from '../components/Lineup1';
import Hero from '../components/Hero';
import Anreise from '../components/Anreise';

import LineupTba from '../components/LineupTba';

export default function Home() {
    return (
        <div className="content-section">
            <Hero />
            <Container>
                <Row>
                    <Philosophie />
                </Row>
                {/* 
                <Row>
                    <Lineup1 />
                </Row>
                */}
                <Row>
                    <LineupTba />
                </Row>
                
                <Row>
                    <Anreise />
                </Row>
            </Container>
            {/**
            <Gallery />
            */}
        </div>
    )
}