import React from 'react';

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Philosophie from '../components/Philosphie';
import Lineup1 from '../components/Lineup1';
import HeroCountdown from '../components/HeroCountdown';
import HeroNoLineup from '../components/HeroNoCountdown';
import Anreise from '../components/Anreise';

import LineupTba from '../components/LineupTba';

export default function Home() {
    var hero, lineup;

    var noLineup = false;
    var noHero = true;

    if (noHero) {
        hero = <HeroNoLineup />
    } else {
        hero = <HeroCountdown />
    }

    if (noLineup) {
        lineup = <Lineup1 />
    } else {
        lineup = <LineupTba />
    }

    return (
        <div className="content-section">
            {hero}
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