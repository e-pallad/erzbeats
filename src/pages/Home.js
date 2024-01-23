import React from 'react';

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Philosophie from '../components/Philosphie';
import Lineup from '../components/Lineup';
import HeroCountdown from '../components/HeroCountdown';
import Anreise from '../components/Anreise';

import LineupTba from '../components/LineupTba';

export default function Home() {
    var lineup;

    var noLineup = false;

    if (noLineup) {
        lineup = <LineupTba />
    } else {
        lineup = <Lineup />
    }

    return (
        <div className="content-section">
            <HeroCountdown />
            <Container>
                <Row>
                    <Philosophie />
                </Row>
                <Row>
                    {lineup}
                </Row>
                <Row>
                    <Anreise />
                </Row>
            </Container>
        </div>
    )
}