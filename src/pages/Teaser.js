import React from 'react';

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import TeaserComp from '../components/TeaserComp';


export default function Teaser() {
    return (
        <div className="content-section">
            <Container>
                <Row>
                    <TeaserComp />
                </Row>
            </Container>
        </div>
    )
}