import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Countdown from 'react-countdown';

// Random component
const Completionist = () => <span>You are good to go!</span>;

// Renderer callback with condition
const renderer = ({ days, hours, minutes, seconds, completed }) => {
  if (completed) {
    // Render a completed state
    return <Completionist />;
  } else {
    // Render a countdown
    return (
      <div class="countdown flex flex-wrap justify-content-between" data-date="2018/06/06">
        <div class="countdown-holder">
          <div class="dday">{days}</div>
          <label>Tage</label>
          </div>
          <div class="countdown-holder">
          <div class="dhour">{hours}</div>
          <label>Stunden</label>
          </div>
          <div class="countdown-holder">
          <div class="dmin">{minutes}</div>
          <label>Minuten</label>
          </div>
          <div class="countdown-holder">
          <div class="dsec">{seconds}</div>
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
                    <Col xs="12" lg={{ span: 10, offset: 2}}>
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
                            <a href='/buytickets' className='btn'>Tickets</a>
                            <a href='/lineup' className='btn current'>Lineup</a>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}