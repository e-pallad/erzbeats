import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Teaser from '../vid/teaser.webm';
import HeroPoster from '../img/erzbeats-poster.gif';

export default function TeaserComp() {
    return (
        <div className='teaser-content'>
            <Container>
                <Row>
                    <Col>
                        <video id='teaser-video' poster={HeroPoster} autoPlay loop muted>
                            <source 
                                src={Teaser} 
                                type='video/webm' 
                            />
                        </video>
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
                {/* Bottom Line (Links, etc.) */}
                <Row className='fixed-bottom'>
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