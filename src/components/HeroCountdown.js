import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Countdown from 'react-countdown';

import VitaCola from './../img/vitacola.png';

// Timer done component
const Completionist = () => (
    <div className='entry-header-subline'>
        <h2>DANCE TOGETHER. FOREVER.</h2>
    </div>
);

// Renderer callback with condition
const renderer = ({
    days,
    hours,
    minutes,
    seconds,
    completed
}) => {
    if (completed) {
        return <Completionist />;
    } else {
        return (
            <div className="countdown flex flex-wrap justify-content-between text-center">
                <div className="countdown-holder">
                    <div className="dday">{days}</div>
                    <label>Tage</label>
                </div>
                <div className="countdown-holder">
                    <div className="dhour">{hours}</div>
                    <label>Stunden</label>
                </div>
                <div className="countdown-holder">
                    <div className="dmin">{minutes}</div>
                    <label>Minuten</label>
                </div>
                <div className="countdown-holder">
                    <div className="dsec">{seconds}</div>
                    <label>Sekunden</label>
                </div>
            </div>
        )
    }
};

export default function HeroCountdown() {
    return (
        <div className='hero-content'>
            <Container>
                <Row>
                    <Col>
                        <div className='entry-header'>
                            <h2>Die Party des Sommers '24</h2>
                        </div>
                        <Countdown 
                            date='2024-06-22T16:00:00'
                            daysInHours={false}
                            renderer={renderer}
                        />
                    </Col>
                </Row>
                <Row>
                    <Col className="sponsor-vitacola flex flex-wrap justify-content-center">
                        <h2>powered by</h2>
                    </Col>
                </Row>
                <Row>
                    <Col className="sponsor-vitacola flex flex-wrap justify-content-center">
                        <picture>
                            <source 
                                srcSet={VitaCola} 
                                alt="Sponsorlogo: Vita Cola"
                                width={300}
                                height="auto"
                            />
                            <img 
                                src={VitaCola} 
                                alt="Sponsorlogo: Vita Cola" 
                                width={300}
                                height="auto"
                            />
                        </picture>
                    </Col>
                </Row>
                <Row>
                    <Col xs="12">
                        <div className='entry-footer'>
                            <a href='/tickets' className='btn'>Tickets</a>
                            <a href='#lineup' className='btn'>Lineup</a>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
