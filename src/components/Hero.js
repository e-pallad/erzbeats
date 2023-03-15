import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Countdown from 'react-countdown';

// Random component
const Completionist = () => (
    <div className='entry-header'>
        <h2>Startet jetzt!</h2>
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
                        <div className='entry-header'>
                            <h2>Die Party des Sommers '23</h2>
                            {/*<div className='entry-meta-date'>01.07.2023</div>*/}
                        </div>
                        <Countdown 
                            date='2023-07-01T15:00:00'
                            daysInHours={false}
                            renderer={renderer}
                        />
                    </Col>
                </Row>
                <Row>
                    <Col xs="12">
                        <div className='entry-footer'>
                            <a href='https://erzbeats.ticket.io' target={"_blank"} rel={"noreferrer"} className='btn'>Tickets</a>
                            <a href='#lineup' className='btn'>Lineup</a>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
