import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Countdown from 'react-countdown';

import HeroVidMp4 from '../vid/ErzbeatsAftermovie_720p.mp4';
import HeroVidWebm from '../vid/ErzbeatsAftermovie_WEBM.webm';
import HeroPoster from '../img/erzbeats-poster.gif'

// Random component
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
                    <div className="dday">
                        {days}</div>
                    <label>Tage</label>
                </div>
                <div className="countdown-holder">
                    <div className="dhour">
                        {hours}</div>
                    <label>Stunden</label>
                </div>
                <div className="countdown-holder">
                    <div className="dmin">
                        {minutes}</div>
                    <label>Minuten</label>
                </div>
                <div className="countdown-holder">
                    <div className="dsec">
                        {seconds}</div>
                    <label>Sekunden</label>
                </div>
            </div>
        )
    }
};

export default function Hero() {
    return (
        <div className='hero-content'>
            <Container>
                <Row>
                    <Col>
                        <video id='header-video' poster={HeroPoster} autoPlay loop muted>
                            <source 
                                src={HeroVidWebm} 
                                type='video/webm' 
                            />
                            <source
                                src={HeroVidMp4}
                                type='video/mp4'
                            />
                        </video>
                        <div className='entry-header'>
                            <h2>Die Party des Sommers '24</h2>
                        </div>
                        <Countdown 
                            date='2023-07-01T17:30:00'
                            daysInHours={false}
                            renderer={renderer}
                        />
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
